import { useEffect } from 'react';

const useWindowCloseAlert = () => {
	useEffect(() => {
		if (!window) return;
		(window as any).onbeforeunload = () => 'Are you sure you want to exit this page?';
	}, []);
};

export default useWindowCloseAlert;
