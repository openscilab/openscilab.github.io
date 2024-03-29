import './index.scss';
import { Else, If } from 'tsx-statements';
import { NavLink } from 'react-router-dom';
import FaIcon from '@src/Components/FaIcon';
import { Navbar, Nav, Drawer } from 'rsuite';
import useWindow from '@tools/Hooks/useWindow';
import useHash from '@src/Tools/Hooks/useHash';
import { useState, useEffect } from 'react';
import NeonBtn from '@components/NeonBtn/NeonBtn';
import useDashboard from '@tools/Hooks/useDashboard';
import useIsFirst from '@src/Tools/Hooks/useIsFirst';
import { Divide as Hamburger } from 'hamburger-react';
import { classes, classNames } from '@tools/Utils/React';
import OSL_TEXTED_logo from '../../../Assets/icons/logo-with-text.svg';
import useLocalStorage from '@src/Tools/Hooks/useLocalStorage';
import useStore from '@src/Tools/Store/useStore';
import { setThemeMode } from '@src/Tools/Store/actions/LocalStorageActions';


// type NavBar_Props = { themeMode: any; setThemeMode: (mode: any) => void };

const NavBar = () => {
	const isFirst = useIsFirst();
	const { dispatch } = useStore();
	const { isMobile } = useWindow();
	const { swiper } = useDashboard();
	const { themeMode } = useLocalStorage();
	const [isOpen, setOpen] = useState(false);
	const { hasHash, addHash, removeHash } = useHash();
	const [currentSection, setCurrentSection] = useState(0);

	//? ------------------ vars -------------------------------------------------------------------------------

	//? ------------------ Utils -------------------------------------------------------------------------------

	const goToSlide = (index: number) => {
		swiper?.slideTo?.(index, 700, true);
		setCurrentSection(index);
	};

	const changeThemeMode = (mode: 'dark' | 'light') => {
		dispatch(setThemeMode(mode));
	};
	//? --------------- useEffect ------------------------------------------------------------------------------

	useEffect(() => {
		setOpen(false);
	}, [currentSection]);

	useEffect(() => {
		if (!!swiper)
			swiper?.on('imagesReady', s => {
				if (!hasHash('donation')) return;
				s?.slideTo?.(5, 700, true);
				setCurrentSection(5);
			});
	}, [swiper]);

	useEffect(() => {
		setTimeout(() => {
			if (isFirst.current) return;
			(currentSection === 5 ? addHash : removeHash)?.('donation');
		}, 300);
	}, [currentSection]);

	// minimal nav off & on
	useEffect(() => {
		if (!swiper) return;
		swiper.on('slideChange', sw => {
			const { realIndex } = sw;
			setCurrentSection(realIndex);
		});
	}, [swiper]);

	// ---------------------------------------------------------------------------------------------------------

	const content = (
		<Nav pullRight>
			<Nav.Item as={NavLink} to='/' onClick={goToSlide.bind(null, 0)}>
				<NeonBtn children='Home' ledMode selected={currentSection === 0} bolt={isMobile} />
			</Nav.Item>

			<Nav.Item onClick={goToSlide.bind(null, 2)}>
				<NeonBtn children='Team' ledMode selected={currentSection === 2} bolt={isMobile} />
			</Nav.Item>

			<Nav.Item onClick={goToSlide.bind(null, 3)}>
				<NeonBtn children='Projects' ledMode selected={currentSection === 3} bolt={isMobile} />
			</Nav.Item>

			<Nav.Item onClick={goToSlide.bind(null, 4)}>
				<NeonBtn children='Contact Us' ledMode selected={currentSection === 4} bolt={isMobile} />
			</Nav.Item>

			<Nav.Item onClick={goToSlide.bind(null, 5)}>
				<NeonBtn children='Donation' ledMode selected={currentSection === 5} bolt={isMobile} />
			</Nav.Item>

			<div className='toggle-theme-mode'>
				<FaIcon
					fa='d-brightness'
					onClick={() => changeThemeMode('light')}
					className={classNames({ selected: themeMode === 'light' })}
				/>
				<FaIcon
					fa='d-moon'
					onClick={() => changeThemeMode('dark')}
					className={classNames({ selected: themeMode === 'dark' })}
				/>
			</div>
		</Nav>
	);

	return (
		<div {...classes('navbar-layout', { 'navbar-minimal': currentSection !== 0 })}>
			<Navbar>
				<Navbar.Brand onClick={goToSlide.bind(null, 0)}>
					<img alt='osl-logo' src={OSL_TEXTED_logo} />
				</Navbar.Brand>

				<If condition={!isMobile}>
					{content}

					<Else>
						<Hamburger rounded size={26} distance='sm' color='#3282B8' toggled={isOpen} toggle={setOpen} />
					</Else>
				</If>
			</Navbar>

			<Drawer open={isOpen && isMobile} onClose={() => setOpen(false)}>
				<div className='header'>
					<Hamburger rounded size={26} distance='sm' color='#3282B8' toggled={isOpen} toggle={setOpen} />
				</div>

				<div className='content'>{content}</div>
			</Drawer>
		</div>
	);
};

export default NavBar;
