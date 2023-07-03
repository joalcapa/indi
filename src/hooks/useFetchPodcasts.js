import { useEffect } from 'react';
import { isReloadResource } from '../utils';

const useFetchPodcasts = (props = {}) => {
    const { getPodcasts, podcasts, date } = props;

    useEffect(() => {
        let isFetch = true;

        if (isFetch) {
            let isReload = !date;

            if (date) {
                isReload = isReloadResource(date);
            }

            if (isReload) {
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