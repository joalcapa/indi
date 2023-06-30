import { createReducer } from '@reduxjs/toolkit';
import actions from '../actions/podcasts';

const initialState = { 
    podcasts: [ ],
};

const reducer = createReducer(initialState, (builder) => {
    builder
        .addCase(actions.getPodcasts, (state, action) => {        
            state.podcasts = [];
        })
});

export default reducer;