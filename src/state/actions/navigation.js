import { createAction } from '@reduxjs/toolkit';
import types from '../types/navigation';

export const startNavigate = createAction(types.START_NAVIGATE);

export const endNavigate = createAction(types.END_NAVIGATE);

export default {
    startNavigate,
    endNavigate,
};