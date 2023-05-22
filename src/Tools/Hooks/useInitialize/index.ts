import { useEffect } from 'react';
import useSessionExpire from './useSessionExpire';
import useStorageUpdater from './useStorageUpdater';
import { removeFaIconCache } from '@tools/Utils/Cache';
import useWindowCloseAlert from './useWindowCloseAlert';

const useInitialize = () => {
	useSessionExpire();
	useStorageUpdater();
	useWindowCloseAlert();

	//? -------- useEffect --------------
	useEffect(() => {
		//? Remove FaIcon Cache
		removeFaIconCache();
		//? the it will re-cache it again
	}, []);
};

export default useInitialize;
