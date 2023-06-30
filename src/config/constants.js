import axios from 'axios';
import { ENV, API, ENDPOINTS, CORS_API } from './env';

export const API_URL = API[ENV];

export const ENDPOINTS_COLLECTION = ENDPOINTS[ENV];

axios.defaults.baseURL = `${CORS_API[ENV]}${API_URL}`;
