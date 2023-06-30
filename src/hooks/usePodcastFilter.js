import { useState, useMemo } from 'react';
import { useNavigate } from "react-router-dom";

const usePodcastFilter = (props = {}) => {
    const { podcasts } = props;
    const [ filter, setFilter ] = useState('');
    const navigate = useNavigate();

    const changeFilter = (event) => {
        setFilter(event.target.value);
    };

    const podcastFilter = useMemo(() => {
        return podcasts.filter((podcast) => (
                !filter ? true : (
                    podcast.title.toLowerCase().includes(filter.toLowerCase()) || 
                    podcast.author.toLowerCase().includes(filter.toLowerCase())
                )
            )).map((podcast) => ({
                ...podcast,
                onClick: () => navigate(`/podcast/${podcast.id}`),
            }));
    }, [ podcasts, filter ]);

    return {
        podcasts: podcastFilter,
        filter,
        changeFilter,
    };
};

export default usePodcastFilter;