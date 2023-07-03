import axios from 'axios';
import { ENV, API, ENDPOINTS, CORS_API, CORS_API_RAW } from './env';

export const API_URL = API[ENV];

export const ENDPOINTS_COLLECTION = ENDPOINTS[ENV];

export const CORS_API_URL = CORS_API[ENV];

export const CORS_API_RAW_URL = CORS_API_RAW[ENV];

axios.defaults.baseURL = API_URL;
