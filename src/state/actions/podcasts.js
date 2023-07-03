import { createAsyncThunk } from '@reduxjs/toolkit';
import types from '../types/podcasts';
import service from '../../services/podcasts';

export const getPodcasts = createAsyncThunk(
    types.GET_PODCASTS,
    async () => {
      try {
        const response = await service.getPodcasts();
        return response.feed.entry.map((podcast) => {
          const id = podcast["id"].attributes["im:id"];

          return {
            key: id,
            id: id,
            title: podcast["im:name"].label,
            author: podcast["im:artist"].label,
            image: podcast["im:image"][2].label,
            description: podcast["summary"].label,
          };
        });
      } catch (error) {
        throw error;
      }
    }
);

export default {
    getPodcasts,
};