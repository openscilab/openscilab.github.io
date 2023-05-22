import { useEffect, useRef } from 'react';

const useIsFirst = () => {
	const isFirst = useRef(true);

	useEffect(() => {
		isFirst.current = false;
	}, []);

	return isFirst;
};

export default useIsFirst;
