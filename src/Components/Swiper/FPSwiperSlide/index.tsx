import './index.scss';
import { FC } from 'react';
import { classes } from '@tools/Utils/React';
import { SwiperSlide } from '@components/Swiper';

type FPSS_Props = { className?: string };
const FPSwiperSlider: FC<FPSS_Props> = props => {
	const { className, children } = props;
	return <SwiperSlide {...classes('full-page-swiper-slide', className)}>{children}</SwiperSlide>;
};

//! Important
FPSwiperSlider.displayName = 'SwiperSlide';

export default FPSwiperSlider;
