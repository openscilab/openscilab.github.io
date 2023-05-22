import './index.scss';
import { useEffect } from 'react';
import { Sections } from './Sections';
import useStore from '@tools/Store/useStore';
import { classes } from '@tools/Utils/React';
import { useSwiper } from '@components/Swiper';
import FPSwiper from '@components/Swiper/FPSwiper';
import FPSwiperSlide from '@components/Swiper/FPSwiperSlide';
import { setSwiper } from '../../../Tools/Store/actions/DashboardActions';

const Home = () => {
	const { dispatch } = useStore();
	const { swiper, registerSwiper } = useSwiper();

	// ?-------------------------------- UseEffects 👇 ------------------------------------------------------ //

	useEffect(() => {
		if (!swiper) return;
		dispatch(setSwiper(swiper));
	}, [swiper]);

	// minimal nav off & on
	useEffect(() => {
		if (!swiper) return;
		swiper.on('slideChange', sw => {
			const { realIndex } = sw;
			if (realIndex === 0) document.body.classList.add('minimal');
		});
	}, [swiper]);

	// ------------------------------------------------------------------------------------------------------ //

	return (
		<div className='home-layout'>
			<FPSwiper
				keyboard
				{...registerSwiper}
				generalSwiper={true}
				direction='vertical'
				pagination={{ clickable: true }}
				mousewheel={{ forceToAxis: true, releaseOnEdges: true }}>
				{Sections?.map((Sec, i) => (
					<FPSwiperSlide key={i} {...classes('home-section flex-center')}>
						<Sec key={i} />
					</FPSwiperSlide>
				))}
			</FPSwiper>
		</div>
	);
};

export default Home;
