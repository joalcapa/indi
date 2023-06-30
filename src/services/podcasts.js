import { ENDPOINTS_COLLECTION } from '../config/constants';
import apiCall from '../middlewares/apiCall';

const getPodcasts = () => {
    return apiCall(ENDPOINTS_COLLECTION.podcasts.get);
};

export default {
    getPodcasts,
};