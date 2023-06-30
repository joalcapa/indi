import { useEffect, useMemo } from 'react';
import { useParams, useNavigate } from "react-router-dom";

const usePodcast = (props = {}) => {
    const { getEpisodes, episodes, podcasts } = props;
    const { podcastId = '' } = useParams();

    console.log('tote', episodes);

    useEffect(() => {
        let isFetch = true;

        if (isFetch) {
            console.log("aquiii");
            let isCurrentDateGreaterThanOldDate = true;

            if (episodes[podcastId]) {
                const currentDate = new Date();
                currentDate.setHours(0, 0, 0, 0);
                const differenceInDays = Math.floor((currentDate - new Date(episodes[podcastId].date)) / 86400000);
                isCurrentDateGreaterThanOldDate = differenceInDays > 0;
            }

            if (isCurrentDateGreaterThanOldDate) {
                getEpisodes(podcastId);
            }

            isFetch = false;
        }

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
        podcast: podcastInfo,
        episodes: (episodes[podcastId] || { episodes: [] })['episodes']
    };
};

export default usePodcast;