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

export const getPodcast = createAsyncThunk(
  types.GET_PODCAST,
  async (payload) => {
    try {
      console.log("llamando: ", payload);
      const response = await service.getPodcast(payload);
      const url = response.results[0].feedUrl;
      console.log("response -->>>: ", response);

      const episodesResp = await service.getFeed(url);
      console.log('episodes: ', episodesResp);
      return episodesResp.rss.channel;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

export default {
    getPodcasts,
    getPodcast,
};