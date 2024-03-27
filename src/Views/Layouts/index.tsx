import './index.scss';
import NavBar from './Navbar';
import Footer from './Footer';
import { FC, useEffect } from 'react';
import useLocalStorage from '@src/Tools/Hooks/useLocalStorage';

const Layouts: FC = ({ children }) => {
	const { themeMode } = useLocalStorage();

	useEffect(() => {
		const classes = document?.body?.classList;
		const themes = ['dark', 'light'];
		themes?.forEach(i => classes?.remove(`theme-${i}`));
		classes?.add(`theme-${themeMode}`);
	}, [themeMode]);

	return (
		<div className='root-layout'>
			<NavBar />
			<div className='root-children'>{children}</div>
			<Footer />
		</div>
	);
};

export default Layouts;
