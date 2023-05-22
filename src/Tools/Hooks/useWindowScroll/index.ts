import { useState, useEffect } from 'react';

const useWindowScroll = () => {
	const [state, setState] = useState(() => ({ x: window?.pageXOffset || 0, y: window?.pageYOffset || 0 }));

	//?-------------------------------------------- useEffect --------------------------------------------//

	useEffect(() => {
		//? Handler
		const handler = () =>
			setState(s => {
				const { pageXOffset, pageYOffset } = window;
				if (s?.x === pageXOffset && s?.y === pageYOffset) return s;
				return { x: pageXOffset, y: pageYOffset };
			});

		//? Adding and removing listeners
		window.addEventListener('scroll', handler);
		return () => window.removeEventListener('scroll', handler);
	}, []);

	//----------------------------------------------------------------------------------------------------//

	return state;
};

export default useWindowScroll;
