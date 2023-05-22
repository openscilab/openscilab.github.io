import './index.scss';
import { Swiper } from '@components/Swiper';
import { classes } from '@tools/Utils/React';
import useWindow from '@src/Tools/Hooks/useWindow';
import { Swiper as SwiperType } from 'swiper/types';
import { SwiperProps } from 'swiper/react/swiper-react';
import { FC, createContext, useState, useContext, useEffect } from 'react';

type FPS_Props = SwiperProps & { className?: string; generalSwiper?: boolean };
const FPSwiper: FC<FPS_Props> = props => {
	const { isMobile } = useWindow();
	const { className, generalSwiper = false, ...rest } = props;
	const [swiper, setSwiper] = useState<SwiperType>();

	useEffect(() => {
		if (!swiper || !generalSwiper) return;
		if (isMobile) swiper.allowTouchMove = true;
		else swiper.allowTouchMove = false;
	}, [isMobile]);

	return (
		<FPSwiperProvider value={{ swiper }}>
			<Swiper onInit={setSwiper} {...classes('full-page-swiper', className)} {...rest} />
		</FPSwiperProvider>
	);
};

//? ---------------- Context ----------------------------------
type FPS_Context_type = { swiper?: SwiperType };
export const FPSwiperContext = createContext<FPS_Context_type>({});

//? ---------------- Provider ---------------------------------
export const FPSwiperProvider = FPSwiperContext.Provider;

//? ---------------- useContext -------------------------------
export const useFPSwiperContext = (curIndex?: number) => {
	const { swiper } = useContext(FPSwiperContext);
	const [index, setIndex] = useState({ cur: -1, pre: -1, is_cur: undefined as boolean | undefined });

	// ?----------- 👇 UseEffects -------- //

	useEffect(() => {
		if (!swiper) return;
		swiper.on('slideChange', sw => {
			setIndex({
				cur: sw?.activeIndex,
				pre: sw?.previousIndex,
				is_cur: curIndex !== undefined ? sw?.activeIndex === curIndex : undefined,
			});
		});
	}, [swiper]);

	// -----------------------------------//

	return { swiper, index };
};

//! Important
FPSwiper.displayName = 'SwiperSlide';

export default FPSwiper;
