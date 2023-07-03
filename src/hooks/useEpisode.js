import { useMemo } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import usePodcast from './usePodcast';

const useEpisode = (props = {}) => {
    const { episodeId = '' } = useParams();
    const { podcast, episodes } = usePodcast(props);

    const episode = useMemo(() => {
        return episodes.filter((item) => {
            return (item.id == episodeId)
        })[0]
    }, [episodes, episodeId]);

    console.log('episode: ', episode);
    return {
        podcast,
        episode,
    };
};

export default useEpisode;