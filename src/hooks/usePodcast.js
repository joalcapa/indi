import { useEffect, useMemo } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { isReloadResource } from '../utils';

const usePodcast = (props = {}) => {
    const { getEpisodes, episodes, podcasts, isLoading } = props;
    const { podcastId = '' } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        let isFetch = true;

        if (isFetch) {
            let isReload = true;

            if (episodes[podcastId]) {
                isReload = isReloadResource(episodes[podcastId].date);
            }

            if (isReload) {
                console.log('vamos por episoios: ', podcastId);
                getEpisodes(podcastId);
            }

            isFetch = false;
        }

        return () => {
            isFetch = false;
        };
    }, []);

    const podcastInfo = useMemo(() => {
        return podcasts.filter((podcast) => (podcast.id === podcastId))[0];
    }, [podcasts, podcastId]);

    console.log('EPISO: ', episodes);
    return {
        isLoading,
        podcast: podcastInfo,
        episodes: (episodes[podcastId] || { episodes: [] })['episodes']
            .map((item) => ({
                ...item, 
                onClick: () => navigate(`/podcast/${podcastId}/episode/${item.id}`),
            })),
    };
};

export default usePodcast;