import { useEffect, useMemo } from 'react';
import useNavigation from './useNavigation';
import { isReloadResource } from '../utils';

const usePodcast = (props = {}) => {
    const { getEpisodes, episodes, podcasts, isLoading } = props;
    const { params, navigate } = useNavigation(props);
    const { podcastId = '' } = params;

    useEffect(() => {
        let isFetch = true;

        if (isFetch) {
            let isReload = true;

            if (episodes[podcastId]) {
                isReload = isReloadResource(episodes[podcastId].date);
            }

            if (isReload) {
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

    const onPodcastInfo = () => {
        navigate(`/podcast/${podcastId}`)
    };

    return {
        isLoading,
        onPodcastInfo,
        podcast: podcastInfo,
        episodes: (episodes[podcastId] || { episodes: [] })['episodes']
            .map((item) => ({
                ...item, 
                onClick: () => navigate(`/podcast/${podcastId}/episode/${item.id}`),
            })),
    };
};

export default usePodcast;