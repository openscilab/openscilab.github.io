import { useState, useEffect } from 'react';
import { Swiper as SwiperType } from 'swiper/types';
import { SwiperProps, Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import SwiperCore, { Mousewheel, Keyboard, Pagination, Scrollbar, Autoplay, Navigation } from 'swiper';

//? ------------------- Load styles --------------------------------------
import 'swiper/swiper.scss'; // core Swiper
import 'swiper/modules/effect-fade/effect-fade';
import 'swiper/modules/navigation/navigation.scss'; // Navigation module
import 'swiper/modules/pagination/pagination.scss'; // Pagination module

//? ------------------- Load modules -------------------------------------
SwiperCore.use([Mousewheel, Keyboard, Scrollbar, Pagination, Autoplay, Navigation]);

//? ------------------- Utils --------------------------------------------

export const useSwiper = () => {
	const [swiper, setSwiper] = useState<SwiperType>();
	const [index, setIndex] = useState({ cur: -1, pre: -1 });

	useEffect(() => {
		if (!swiper) return;
		swiper?.on('slideChange', sw => {
			const { activeIndex: cur, previousIndex: pre } = sw || {};
			setIndex({ cur, pre });
		});
	}, [swiper]);

	const registerSwiper: SwiperProps = { onAfterInit: sw => setSwiper(sw) };

	return { index, swiper, registerSwiper };
};

// ------------------------------------------------------------------------

export { Swiper, SwiperSlide };
