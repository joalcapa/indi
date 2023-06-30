import { useEffect } from 'react';

const useDashboard = (props = {}) => {
    const { getPodcasts, podcasts } = props;
    console.log(props)

    useEffect(() => {
        (async () => {
            try {
                getPodcasts();
            } catch (error) {}
        })();
    }, []);

    return {
        podcasts,
    };
};

export default useDashboard;