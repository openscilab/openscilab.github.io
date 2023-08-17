import './index.scss';
import { useEffect, useState } from 'react';
import FaIcon from '@src/Components/FaIcon';
import useWindow from '@src/Tools/Hooks/useWindow';
import { classNames } from '@src/Tools/Utils/React';
import useDashboard from '@src/Tools/Hooks/useDashboard';
import img2 from '../../../../../Assets/Images/scientific.svg';
import img1 from '../../../../../Assets/Images/open_source.svg';
import img3 from '../../../../../Assets/Images/non-profit.svg';
import img4 from '../../../../../Assets/Images/independent.svg';
import { Swiper, useSwiper, SwiperSlide } from '@components/Swiper';
import useMountedState from '@src/Tools/Hooks/useMountedState/useMountedState';

const Section1 = () => {
	const { isMobile } = useWindow();
	const { registerSwiper } = useSwiper();
	const [swiper, setSwiper] = useState<any>();
	const { swiper: globalSwiper } = useDashboard();
	const [mounted, setMounted] = useMountedState(true);

	useEffect(() => {
		if (globalSwiper?.activeIndex === 1) setMounted(true);
		else setMounted(false);
	}, [globalSwiper?.activeIndex]);

	return (
		<div className={classNames('home-section-layout-1', { mounted: mounted })}>
			<div
				className={classNames('section1-slider-container', {
					last: swiper?.activeIndex === data?.length - 1,
					first: swiper?.activeIndex === 0,
				})}>
				<FaIcon fa='d-angle-left' onClick={() => swiper?.slidePrev()} />
				<Swiper
					keyboard
					speed={3000}
					spaceBetween={30}
					{...registerSwiper}
					direction='horizontal'
					onInit={s => setSwiper(s)}
					className='section1-slider'
					pagination={{ clickable: true }}
					allowTouchMove={isMobile ? true : false}
					autoplay={{ delay: 4000, pauseOnMouseEnter: false, disableOnInteraction: false }}>
					{data?.map((el, i) => (
						<SwiperSlide key={i}>
							<img alt={el?.title} src={el?.img} />
							<div className='content'>
								<h3>{el?.title}</h3>
								<p>{el?.description}</p>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
				<FaIcon fa='d-angle-right' onClick={() => swiper?.slideNext()} />
			</div>
		</div>
	);
};

export default Section1;

const data = [
	{
		img: img1,
		title: 'Open source',
		description: `Making reliable open-source tools accessible to everyone 
		in open collaboration with the community.`,
	},
	{
		img: img2,
		title: 'Scientific',
		description: `Providing efficient scientific solutions for real-world challenges.`,
	},
	{
		img: img3,
		title: 'Non-profit',
		description: `Not and never working for financial profit.`,
	},
	{
		img: img4,
		title: 'Independent',
		description: `Founded and operated by independent open-source developers, without permanent support from any external entity.`,
	},
];