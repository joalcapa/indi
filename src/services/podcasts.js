import { ENDPOINTS_COLLECTION } from '../config/constants';
import apiCall from '../middlewares/apiCall';

const getPodcasts = () => {
    return apiCall(ENDPOINTS_COLLECTION.podcasts.get);
};

const getPodcast = (podcastId) => {
    console.log("mando: ", podcastId);
    console.log(ENDPOINTS_COLLECTION)
    const { url, method } = ENDPOINTS_COLLECTION.podcasts.getPodcast;

    console.log({
        method,
        url: url.replace(':id', podcastId),
    });

    return apiCall({
        method,
        url: url.replace(':id', podcastId),
    });
};

export default {
    getPodcasts,
    getPodcast,
};