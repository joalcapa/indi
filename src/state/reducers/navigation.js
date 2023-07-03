import { createSlice } from '@reduxjs/toolkit';
import action from '../actions/navigation';

const initialState = {
  isNavigate: false,
};

const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(action.startNavigate, (state) => {
        state.isNavigate = true;
      })
      .addCase(action.endNavigate, (state) => {
        state.isNavigate = false;
      })
  },
});

export default navigationSlice.reducer;