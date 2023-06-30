import { useEffect } from 'react';

const useFetchPodcasts = (props = {}) => {
    const { getPodcasts, podcasts, date } = props;

    useEffect(() => {
        let isFetch = false;

        (async () => {
            try {
                let isCurrentDateGreaterThanOldDate = !date;

                if (date) {
                    const currentDate = new Date();
                    currentDate.setHours(0, 0, 0, 0);
                    const differenceInDays = Math.floor((currentDate - new Date(date)) / 86400000);
                    isCurrentDateGreaterThanOldDate = differenceInDays > 0;
                }

                if (isCurrentDateGreaterThanOldDate) {
                    getPodcasts();
                }

                isFetch = true;
            } catch (error) {}
        })();

        return () => {
            isFetch = false;
        };
    }, []);

    return {
        podcasts,
    };
};

export default useFetchPodcasts;