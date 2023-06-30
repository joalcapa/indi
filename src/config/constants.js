import axios from 'axios';
import { ENV, API, ENDPOINTS } from './env';

export const API_URL = API[ENV];

export const ENDPOINTS_COLLECTION = ENDPOINTS[ENV];

axios.defaults.baseURL = API_URL;
