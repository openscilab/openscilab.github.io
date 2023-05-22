import useFetch from '../useFetch';
import { useStore } from 'react-redux';
import useRole from '../useRole/useRole';
import { CONFIG } from '@config/constants';
import { isAfter } from '../../Utils/Date';
import { Notify } from '../../Utils/React';
import useClass from '@tools/Hooks/useClass';
import { TabChannel } from '../../Utils/Tab';
import { isTokenValid } from '../useAccount';
import { subscribe } from '../../Utils/Parse';
import useLocalStorage from '../useLocalStorage';
import useAccount from '@tools/Hooks/useAccount';
import { useRef, useEffect, useCallback } from 'react';
import { promiseQueueRunner } from '../../Utils/Async';
import { logout } from '../../Store/actions/AccountActions';
import { setLocalData } from '../../Store/actions/LocalStorageActions';
import { setInitLoad, clearClassData } from '../../Store/actions/LocalStorageActions';

const useStorageUpdater = () => {
	const { Get } = useFetch();
	const { role } = useRole();
	const { dispatch } = useStore();
	const timeOutRef = useRef<any>();
	const { user, loggedIn } = useAccount();
	const { last_update } = useLocalStorage();
	const lastUpdateRef = useRef(last_update);
	const UpdateClasses = useRef<Set<string>>(new Set());
	const { Class: LIVE_CLASS } = useClass('LIVE_CLASS');

	//* --------------------- Live Client -----------------------------------------
	const clientRef = useRef<Parse.LiveQuerySubscription>();
	const unsubscribe = () => {
		clientRef.current?.unsubscribe();
		clearTimeout(timeOutRef.current);
	};

	//?------------------- useEffects ---------------------------------------------//

	useEffect(() => {
		initLoad();
		return () => unsubscribe();
	}, []);

	useEffect(() => {
		if (loggedIn && isTokenValid(user?.token)) return;
		unsubscribe();
	}, [user, loggedIn]);

	useEffect(() => {
		lastUpdateRef.current = last_update;
	}, [last_update]);

	const initLoad = async () => {
		connectClient();
		await checkForUpdate();
		window.addEventListener('beforeunload', unsubscribe);
	};

	//?------------------- Utils --------------------------------------------------//

	//? Connect websocket client
	const connectClient = useCallback(() => {
		if (!!clientRef.current) return;
		const { on } = TabChannel(`${CONFIG.APP_SHORT_NAME}-CLIENT`);
		on.singleRun(async () => {
			const client = await subscribe('LIVE_CLASS');
			client?.on('update', PO => {
				if (!loggedIn) return;
				clientRef.current = client;
				clearTimeout(timeOutRef.current);
				const item = PO?.toJSON() || {};
				UpdateClasses.current.add(item?.class_name);
				timeOutRef.current = setTimeout(() => {
					const { last_refresh_cache: cache_date, last_update } = item;
					UpdateClasses.current?.forEach(cn => checkForUpdate(cn, last_update, cache_date));
					UpdateClasses.current.clear();
				}, 200);
			});
		});
	}, []);

	//? Check for update
	const checkForUpdate = async (className?: string, last_update?: string, cache_date?: string) => {
		try {
			if (className) {
				//* single update
				const local_last_update = lastUpdateRef?.current?.[className];
				if (!local_last_update || !cache_date) return updateHandler(className);
				const is_cache_update = isAfter(cache_date, local_last_update);
				await updateHandler(className, last_update, is_cache_update);
			} else {
				//* multi update
				const { items = [] } = (await LIVE_CLASS.getItems()) || {};

				const entries = Object.entries((items as any) || {});

				const promises = entries?.map((entry: any) => async () => {
					const [class_name, { last_update, last_refresh_cache }] = entry;

					const local_last_update = lastUpdateRef?.current?.[class_name];
					if (!local_last_update) return await updateHandler(class_name);

					const is_local_update = isAfter(last_update, local_last_update);
					const is_cache_update = isAfter(last_refresh_cache, local_last_update);
					const is_update_needed = is_cache_update || is_local_update;

					if (is_update_needed) await updateHandler(class_name, last_update, is_cache_update);
				});

				await promiseQueueRunner(promises, 20);

				return dispatch(setInitLoad(true));
			}
		} catch (error) {
			console.error(error);
		}
	};

	//? Update handler
	const updateHandler = async (class_name: string, last_update?: string, is_cache?: boolean) => {
		if (!class_name) return;
		const url = `/classes/${class_name}`;
		const query = is_cache ? {} : { params: { last_update: lastUpdateRef?.current?.[class_name] } };

		try {
			const { items: data = [], deleted = [] } = (await Get({ url, ...query })) || {};

			console.log(`%c${class_name}`, 'color:#1ED65E;font-weight:bold', { items: data, deleted });

			checkUserRoleChange(class_name, data);

			if (is_cache) dispatch(clearClassData(class_name));

			dispatch(setLocalData({ class_name, data, deleted, partialUpdate: !is_cache, last_update }));

			//
		} catch (error) {
			console.error(`Problem in fetching ${class_name}`, error);
		}
	};

	const checkUserRoleChange = (CLASS_NAME: string, items: any[]) => {
		if (CLASS_NAME !== 'SYSTEM_USER') return;
		const item = items?.find(i => i?.[`${CLASS_NAME}_ID`] === user?.ID);
		if (!item) return;
		const new_role = item?.SYSTEM_USER_ROLE?.item?.role_name;
		if (new_role === role) return;
		dispatch(logout());
		Notify.info('You have been logged out due to role change.');
		Notify.info('Please login again.');
	};
};

export default useStorageUpdater;
