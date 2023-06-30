import { createAction } from '@reduxjs/toolkit';
import types from '../types/podcasts';

export const getPodcasts = createAction(types.GET_PODCASTS);

export default {
    getPodcasts,
};