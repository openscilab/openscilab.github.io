import moment from 'moment';
import useFetch from '../useFetch';
import { useEffect, useRef } from 'react';
import { Notify } from '../../Utils/React';
import useStore from '../../Store/useStore';
import { jwtDecode } from '../../Utils/String';
import useWindow from '@tools/Hooks/useWindow';
import useAccount, { isTokenValid } from '../useAccount';
import { logout, setUserToken } from '../../Store/actions/AccountActions';

const REFRESH_TOKEN_THRESHOLD = 20 * 1000;

const useSessionExpire = () => {
	const { Post } = useFetch();
	const { user } = useAccount();
	const { winRef } = useWindow();
	const { dispatch } = useStore();
	const logOutTimeOutRef = useRef<any>(null);

	//? -------------------- useEffects ------------------------------------------------------

	useEffect(() => {
		if (user?.token && isTokenValid(user?.token)) setLogoutTimer();
		else logOutUser();
		return () => clearTimeout(logOutTimeOutRef?.current);
	}, []);

	//? ------------------------- Utils ------------------------------------------------------

	//? -------------- LogOut ----------------------------------
	const logOutUser = () => {
		dispatch(logout());
		!!logOutTimeOutRef?.current && clearTimeout(logOutTimeOutRef?.current);
		Notify.info('Your session has expired. Please login again.');
	};

	//? --------------- LogOut timer ---------------------------
	const setLogoutTimer = (token?: string) => {
		if (!user?.token) return;
		const { exp } = jwtDecode(token ? token : user?.token!!) || {};
		if (!exp) return;

		//? Remain time
		const remain_time = exp * 1000 - Date.now();
		expireLog(remain_time);

		//? Refresh token handler
		refreshTokenHandler(remain_time - REFRESH_TOKEN_THRESHOLD);

		//? Set timer
		clearTimeout(logOutTimeOutRef?.current);
		logOutTimeOutRef.current = setTimeout(logOutUser, remain_time);
	};

	//? --------------- Refresh token --------------------------
	const refreshTokenHandler = async (remain_time: number) => {
		if (!user?.token) return;
		try {
			const handler = async () => {
				//? Check for window focus
				const { focused } = winRef.current || {};
				if (!focused) return logOutUser();

				//? Getting new token
				const { token } = (await Post({ url: '/endpoints/refresh-token' })) || {};
				if (!token) return logOutUser();
				dispatch(setUserToken(token));

				//? Set new timeout
				clearTimeout(logOutTimeOutRef?.current);
				setLogoutTimer(token);
			};
			setTimeout(handler, remain_time);
		} catch (error) {
			console.error(error);
			Notify.error('Error on refreshing token');
			logOutUser();
		}
	};
};

const expireLog = (remain: number) => {
	const remainMin = ~~(remain / (60 * 1000));
	const expireIn = moment().add(remain, 'milliseconds').toDate().toLocaleString();
	const now = new Date().toLocaleTimeString();
	const remainLog = `(${~~(remainMin / 60)}:${~~(remainMin % 60)} from now)`;
	console.info(`${now} > Your session will expire at ${expireIn} ${remainLog}`);
};

export default useSessionExpire;
