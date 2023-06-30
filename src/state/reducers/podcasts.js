import { createSlice } from '@reduxjs/toolkit';
import action from '../actions/podcasts';

const initialState = {
  podcasts: [],
  loading: false,
  error: null,
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
      })
      .addCase(action.getPodcasts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default podcastsSlice.reducer;