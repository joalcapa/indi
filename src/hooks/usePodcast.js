import { useEffect, useMemo } from 'react';
import { useParams, useNavigate } from "react-router-dom";

const usePodcast = (props = {}) => {
    const { getPodcast, podcast, podcasts } = props;
    const { podcastId = '' } = useParams();

    useEffect(() => {
        let isFetch = true;

        console.log('Vamos a llamar: ', podcastId);
        getPodcast(podcastId);
        isFetch = false;

        return () => {
            isFetch = false;
        };
    }, []);

    const podcastInfo = useMemo(() => {
        return podcasts.filter((podcast) => (
            podcast["id"].attributes["im:id"] === podcastId
        )).map((podcast) => ({
            key: podcast["id"].attributes["im:id"],
            title: podcast["im:name"].label,
            author: podcast["im:artist"].label,
            image: podcast["im:image"][2].label,
            description: podcast["summary"].label,
        }))[0];
    }, [podcasts, podcastId]);

    return {
        podcastId,
        podcast: podcastInfo,
    };
};

export default usePodcast;