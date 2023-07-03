import { useMemo } from 'react';
import usePodcast from './usePodcast';
import useNavigation from './useNavigation';

const useEpisode = (props = {}) => {
    const { params, navigate } = useNavigation(props);
    const { podcast, episodes } = usePodcast(props);
    const { episodeId = '', podcastId = '' } = params;

    const episode = useMemo(() => {
        return episodes.filter((item) => {
            return (item.id == episodeId)
        })[0]
    }, [episodes, episodeId]);

    const onPodcastInfo = () => {
        navigate(`/podcast/${podcastId}`)
    };

    return {
        podcast,
        episode,
        onPodcastInfo,
    };
};

export default useEpisode;