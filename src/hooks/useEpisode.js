import { useMemo } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import usePodcast from './usePodcast';

const useEpisode = (props = {}) => {
    const { episodeId = '' } = useParams();
    const { podcast, episodes } = usePodcast(props);

    const episode = useMemo(() => {
        console.log('ID: ', episodeId);
        console.log(episodes);
        return episodes.filter((item) => {
            console.log('-----------------------');
            console.log('IDD', episodeId);
            console.log('itt', item.id);
            console.log('itt', item.id.trim().downcase);
            console.log('itt', episodeId.trim().downcase);
            console.log(item.id === episodeId);
            console.log('-----------------------');
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