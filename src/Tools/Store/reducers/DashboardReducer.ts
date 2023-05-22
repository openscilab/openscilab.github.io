import { createReducer } from '@reduxjs/toolkit';
import { Swiper as SwiperType } from 'swiper/types';
import { setIsLight, setLoading, setSwiper, setUploadProgress, setWhitePageOffset } from '../actions/DashboardActions';

type InitStateType = {
    isLight: boolean;
    isLoading: boolean;
    uploadProgress: number;
    whitePageYOffset: number;
    swiper: SwiperType | undefined;
};

const initState: InitStateType = { isLoading: false, isLight: false, swiper: undefined, uploadProgress: 0, whitePageYOffset: 0 };

const DashboardReducer = createReducer(initState, {
    //* upload progress
    [setUploadProgress.type]: (state, { payload }) => ({ ...state, uploadProgress: payload }),

    //* loading
    [setLoading.type]: (state, { payload }) => ({ ...state, isLoading: payload }),

    //* light background
    [setIsLight.type]: (state, { payload }) => ({ ...state, isLight: payload }),

    //* set swiper
    [setSwiper.type]: (state, { payload }) => ({ ...state, swiper: payload }),

    //* set White Page Scroll Y position
    [setWhitePageOffset.type]: (state, { payload }) => {
        console.log({ payload });

        return { ...state, whitePageYOffset: payload };
    },
});

export default DashboardReducer;
