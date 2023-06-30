import { useState, useMemo } from 'react';

const usePodcastFilter = (props = {}) => {
    const { podcasts } = props;
    const [ filter, setFilter ] = useState('');

    const changeFilter = (event) => {
        setFilter(event.target.value);
    };

    const podcastFilter = useMemo(() => {
        return podcasts.filter((podcast) => (
                !filter ? true : (
                    podcast["im:name"].label.toLowerCase().includes(filter.toLowerCase()) || 
                    podcast["im:artist"].label.toLowerCase().includes(filter.toLowerCase())
                )
            ))
            .map((podcast) => ({
                key: podcast["id"].attributes["im:id"],
                title: podcast["im:name"].label,
                author: podcast["im:artist"].label,
                image: podcast["im:image"][0].label,
            }));
    }, [ podcasts, filter ]);

    return {
        podcasts: podcastFilter,
        filter,
        changeFilter,
    };
};

export default usePodcastFilter;