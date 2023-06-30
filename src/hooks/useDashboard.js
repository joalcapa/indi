import { useEffect } from 'react';

const useDashboard = (props = {}) => {
    const { getPodcasts, podcasts, date } = props;
    console.log(props)

    useEffect(() => {
        let isFetch = false;

        (async () => {
            try {
                let isCurrentDateGreaterThanOldDate = !!date;

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

export default useDashboard;