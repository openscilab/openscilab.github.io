import { deepClone } from '../../Utils/Object';
import { createReducer } from '@reduxjs/toolkit';
import { removeBrowserCache } from '../../Utils/Cache';
import { setInitLoad, setLocalData } from '../actions/LocalStorageActions';
import { clearLocalStorage, clearClassData, LocalActionEntryType } from '../actions/LocalStorageActions';

const initState: InitStateType = {};

const LocalStorageReducer = createReducer(initState, {
	//

	[clearLocalStorage.type]: () => initState,

	[setInitLoad.type]: (state, { payload }) => ({ ...(state || {}), is_init_load: payload }),

	[clearClassData.type]: (state, { payload }) => {
		removeBrowserCache();
		const new_state = deepClone(state);
		delete (new_state as any)?.[payload];
		return new_state as InitStateType;
	},

	//*---------------------- Class Data reducers -------------------------

	[setLocalData.type]: (state: InitStateType, { payload }) => {
		let { class_name, data, deleted = [], partialUpdate, last_update } = payload as LocalActionEntryType;

		const time = last_update || new Date().toUTCString();

		const is_update = partialUpdate || !!deleted?.length;

		if (is_update) {
			const PRIMARY_KEY = `${class_name}_ID`;
			const curData = (state as any)?.[class_name] || [];
			data = dataUpdater(curData, data, deleted, PRIMARY_KEY);
		}

		const extra = { last_update: { ...(state?.last_update || {}), [class_name]: time } };

		return { ...(state || {}), [class_name]: data, ...(extra || {}) };
	},

	//*----------------------------------------------------------------------
});

const dataUpdater = (cur_data: any[], partial_data: any[], deleted_ids: string[], pk: string) => {
	const data = deepClone(cur_data);

	for (const pd of partial_data || []) {
		const i = data.findIndex(cd => cd?.[pk] === pd?.[pk]);
		if (i >= 0) data[i] = pd;
		else data.push(pd);
	}

	for (const di of deleted_ids || []) {
		const targetIndex = data.findIndex(cd => cd?.[pk] === di);
		if (targetIndex >= 0) data.splice(targetIndex, 1);
	}

	return data;
};

type InitStateType = EXTRA & CLASS_DATA_TYPE;

type CLASS_DATA_TYPE = Partial<Record<CLASS_NAMES, any[]>>;

type EXTRA = { is_init_load?: boolean; last_update?: Partial<Record<SUG<CLASS_NAMES>, string>> };

export default LocalStorageReducer;
