import { createAsyncThunk } from '@reduxjs/toolkit';
import types from '../types/podcasts';
import service from '../../services/podcasts';

export const getPodcasts = createAsyncThunk(
    types.GET_PODCASTS,
    async () => {
      try {
        const response = await service.getPodcasts();
        return response.feed.entry;
      } catch (error) {
        throw error;
      }
    }
);

export default {
    getPodcasts,
};