import './index.scss';
import { useEffect } from 'react';
import { If } from 'tsx-statements';
import hero from '@assets/icons/hero.svg';
import FaIcon from '@src/Components/FaIcon';
import useWindow from '@src/Tools/Hooks/useWindow';
import { classNames } from '@src/Tools/Utils/React';
import useDashboard from '@src/Tools/Hooks/useDashboard';
import useMountedState from '@src/Tools/Hooks/useMountedState/useMountedState';

const Section0 = () => {
	const { swiper } = useDashboard();
	const { isMobile } = useWindow();
	const [mounted, setMounted] = useMountedState(true);

	useEffect(() => {
		if (swiper?.activeIndex === 0) setMounted(true);
		else setMounted(false);
	}, [swiper?.activeIndex]);

	return (
		<div className={classNames('section-0-layout', { mounted: mounted })}>
			<div className='content'>
				<h1>OpenSciLab intro</h1>

				<p>
					OpenSciLab is a team of independent open-source developers committed to providing efficient scientific
					solutions for real-world challenges. Our mission is to make reliable open-source tools accessible to everyone
					through open collaboration with the community. We believe that the power of open-source development lies in
					the collective efforts of individuals committed to solving complex problems through shared knowledge and
					resources. At OpenSciLab, we are proud to be a non-profit organization and never work for financial profit. We
					value transparency, inclusivity, and innovation and we are always seeking new and creative ways to make a
					better world. Join us in our mission!
				</p>
			</div>

			<If condition={!isMobile}>
				<div className='img-wrapper'>
					<img alt='Hero' src={hero} />
				</div>
			</If>

			<FaIcon fa='d-angle-down' className='next-page-btn' onClick={() => swiper?.slideTo?.(1, 700, true)} />
		</div>
	);
};

export default Section0;