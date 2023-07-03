import { createSlice } from '@reduxjs/toolkit';
import action from '../actions/episodes';

const initialState = {
  episodes: {},
  loading: false,
  error: null,
  date: null,
};

const episodesSlice = createSlice({
  name: 'episodes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(action.getEpisodes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(action.getEpisodes.fulfilled, (state, action) => {
        state.loading = false;
        state.episodes = { ...state.episodes, ...action.payload };
        state.date = new Date().toLocaleString();
      })
      .addCase(action.getEpisodes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
  },
});

export default episodesSlice.reducer;