import { useEffect } from 'react';
import { isReloadResource } from '../utils';

const useFetchPodcasts = (props = {}) => {
    const { getPodcasts, podcasts, date } = props;

    useEffect(() => {
        let isFetch = true;

        if (isFetch) {
            let isreload = !date;

            if (date) {
                isreload = isReloadResource(date);
            }

            if (isreload) {
                getPodcasts();
                isFetch = false;
            }
        }

        return () => {
            isFetch = false;
        };
    }, []);

    return {
        podcasts,
    };
};

export default useFetchPodcasts;