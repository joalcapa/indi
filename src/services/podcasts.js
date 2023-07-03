import { ENDPOINTS_COLLECTION, CORS_API_RAW_URL } from '../config/constants';
import apiCall from '../middlewares/apiCall';

const getPodcasts = () => {
    return apiCall(ENDPOINTS_COLLECTION.podcasts.get);
};

const getPodcast = (podcastId) => {
    const { url, method } = ENDPOINTS_COLLECTION.podcasts.getPodcast;

    return apiCall({
        method,
        url: url.replace(':id', podcastId),
    });
};

const getFeed = (url) => {
    return apiCall({
        url: `${CORS_API_RAW_URL}${url}`,
        method: 'get',
        isXml: true,
        headers: {
            "Accept": "application/xml",
        }
    });
};

export default {
    getPodcasts,
    getPodcast,
    getFeed,
};