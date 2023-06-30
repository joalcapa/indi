import useFetchPodcasts from './useFetchPodcasts';
import usePodcastFilter from './usePodcastFilter';

const useDashboard = (props = {}) => {
    useFetchPodcasts(props);
    const { podcasts, filter, changeFilter } = usePodcastFilter(props);

    return {
        podcasts,
        filter,
        changeFilter,
    };
};

export default useDashboard;