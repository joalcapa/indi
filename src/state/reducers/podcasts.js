import { createSlice } from '@reduxjs/toolkit';
import action from '../actions/podcasts';

const initialState = {
  podcasts: [],
  podcast: {},
  loading: false,
  error: null,
  date: null,
};

const podcastsSlice = createSlice({
  name: 'podcasts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(action.getPodcasts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(action.getPodcasts.fulfilled, (state, action) => {
        state.loading = false;
        state.podcasts = action.payload;
        state.date = new Date().toLocaleString();
      })
      .addCase(action.getPodcasts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(action.getPodcast.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(action.getPodcast.fulfilled, (state, action) => {
        state.loading = false;
        console.log("PP:: ", action.payload);
        state.podcast = action.payload;
      })
      .addCase(action.getPodcast.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default podcastsSlice.reducer;