import { createAction } from '@reduxjs/toolkit';

export type LocalActionEntryType = {
	data: any;
	class_name: string;
	deleted?: string[];
	last_update?: string;
	partialUpdate: boolean;
};

export const setInitLoad = createAction<boolean>('setInitLoad');

export const clearLocalStorage = createAction('clearLocalStorage');

export const clearClassData = createAction<string>('clearClassData');

export const setLocalData = createAction<LocalActionEntryType>('setLocalData');
