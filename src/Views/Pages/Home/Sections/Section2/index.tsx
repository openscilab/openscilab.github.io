import './index.scss';
import Card from './Card';
import { If } from 'tsx-statements';
import { useEffect, useState } from 'react';
import FaIcon from '@src/Components/FaIcon';
import useWindow from '@tools/Hooks/useWindow';
import { classNames } from '@src/Tools/Utils/React';
import { members } from '../../../../../Data/team.data';
import useDashboard from '@src/Tools/Hooks/useDashboard';
import { Swiper, SwiperSlide, useSwiper } from '@components/Swiper';
import useMountedState from '@src/Tools/Hooks/useMountedState/useMountedState';

const Section2 = () => {
	const { isMobile } = useWindow();
	const { registerSwiper } = useSwiper();
	const { isDesktop, size } = useWindow();
	const [swiper, setSwiper] = useState<any>();
	const { swiper: globalSwiper } = useDashboard();
	const [mounted, setMounted] = useMountedState(false);
	const numberOfSlides = size.width > 1250 ? 4 : size.width < 650 ? 1 : !isDesktop ? 2 : 3;

	useEffect(() => {
		if (globalSwiper?.activeIndex === 2) setMounted(true);
		else setMounted(false);
	}, [globalSwiper?.activeIndex]);

	return (
		<div className={classNames('home-section-layout-2', { mounted: mounted })}>
			<div
				className={classNames('team-slider-container', {
					last: swiper?.activeIndex === members?.length - numberOfSlides,
					first: swiper?.activeIndex === 0,
				})}>
				<If condition={size?.width < 1500}>
					<FaIcon fa='d-angle-left' onClick={() => swiper?.slidePrev()} />
				</If>

				<Swiper
					freeMode
					keyboard
					speed={3000}
					spaceBetween={25}
					{...registerSwiper}
					className='team-slider'
					onInit={s => setSwiper(s)}
					slidesPerView={numberOfSlides}
					pagination={{ clickable: true }}
					allowTouchMove={isMobile ? true : false}
					autoplay={{ delay: 3000, pauseOnMouseEnter: false, disableOnInteraction: false }}>
					{members?.map((data, i) => (
						<SwiperSlide key={i}>
							<Card key={i} data={data} />
						</SwiperSlide>
					))}
				</Swiper>
				<If condition={size?.width < 1500}>
					<FaIcon fa='d-angle-right' onClick={() => swiper?.slideNext()} />
				</If>
			</div>
		</div>
	);
};

export default Section2;
