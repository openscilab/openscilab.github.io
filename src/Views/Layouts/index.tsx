import './index.scss';
import NavBar from './Navbar';
import Footer from './Footer';
import { FC, useEffect } from 'react';
import usePersistedState from '@src/Tools/Hooks/usePersistedState';

const Layouts: FC = ({ children }) => {
	const [themeMode, setThemeMode] = usePersistedState('THEME_MODE', 'dark');

	useEffect(() => {
		const classes = document?.body?.classList;
		const themes = ['dark', 'light'];
		themes?.forEach(i => classes?.remove(`theme-${i}`));
		classes?.add(`theme-${themeMode}`);
	}, [themeMode]);

	return (
		<div className='root-layout'>
			<NavBar {...{ themeMode, setThemeMode }} />
			<div className='root-children'>{children}</div>
			<Footer />
		</div>
	);
};

export default Layouts;
