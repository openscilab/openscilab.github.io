import { createAction } from '@reduxjs/toolkit';
import { Swiper as SwiperType } from 'swiper/types';

export const setLoading = createAction<boolean>('setLoading');

export const setUploadProgress = createAction<number>('setUploadProgress');

export const setIsLight = createAction<boolean>('setIsLight');

export const setSwiper = createAction<SwiperType | undefined>('setSwiper');

export const setWhitePageOffset = createAction<number>('setWhitePageOffset');
