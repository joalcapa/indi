import { useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";

const usePodcast = (props = {}) => {
    const { getPodcast, podcast } = props;
    const { podcastId = '' } = useParams();

    console.log('podcast:', podcast);

    useEffect(() => {
        let isFetch = true;

        console.log('Vamos a llamar: ', podcastId);
        getPodcast(podcastId);
        isFetch = false;

        return () => {
            isFetch = false;
        };
    }, []);

    return {
        podcastId,
    };
};

export default usePodcast;