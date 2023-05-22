import './index.scss';
import { Swiper } from '@components/Swiper';
import { classes } from '@tools/Utils/React';
import { Swiper as SwiperType } from 'swiper/types';
import { SwiperProps } from 'swiper/react/swiper-react';
import { FC, createContext, useState, useContext, useEffect } from 'react';

type ILS_Props = SwiperProps & { className?: string; reverseDirection?: boolean };
const InfiniteLinearSwiper: FC<ILS_Props> = props => {
    const { className, speed, reverseDirection, ...rest } = props;
    const [swiper, setSwiper] = useState<SwiperType>();
    return (
        <ILSwiperProvider value={{ swiper }}>
            <Swiper
                loop={true}
                freeMode={true}
                grabCursor={true}
                pagination={false}
                navigation={false}
                onInit={setSwiper}
                speed={speed || 4000}
                {...classes('infinite-linear-swiper', className)}
                autoplay={{
                    delay: 0,
                    waitForTransition: true,
                    pauseOnMouseEnter: false,
                    disableOnInteraction: false,
                    reverseDirection: reverseDirection || false,
                }}
                {...rest}
            />
        </ILSwiperProvider>
    );
};

//? ---------------- Context ----------------------------------
type ILS_Context_type = { swiper?: SwiperType };
export const ILSwiperContext = createContext<ILS_Context_type>({});

//? ---------------- Provider ---------------------------------
export const ILSwiperProvider = ILSwiperContext.Provider;

//? ---------------- useContext -------------------------------
export const useILSwiperContext = (curIndex?: number) => {
    const { swiper } = useContext(ILSwiperContext);
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
InfiniteLinearSwiper.displayName = 'SwiperSlide';

export default InfiniteLinearSwiper;
