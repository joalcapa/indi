import { useMemo } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import usePodcast from './usePodcast';

const useEpisode = (props = {}) => {
    const { episodeId = '', podcastId = '' } = useParams();
    const { podcast, episodes } = usePodcast(props);
    const navigate = useNavigate();

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