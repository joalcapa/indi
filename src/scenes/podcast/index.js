import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import usePodcast from '../../hooks/usePodcast';
import podcastsActions from '../../state/actions/podcasts';
import './index.css';

const Podcast = (props) => (
    <div className="dashboard-items">
        {props.podcastId}
    </div>
);

Podcast.propTypes = {
    podcastId: PropTypes.string,
};

Podcast.defaultProps = {
    podcastId: '',
};

const PodcastHoc = (props) => {
    const hook = usePodcast(props);
    return <Podcast {...hook} />;
};

PodcastHoc.propTypes = {
    getPodcast: PropTypes.func,
    podcasts: PropTypes.array,
};

PodcastHoc.defaultProps = {
    getPodcast: () => {},
    podcasts: [],
};

const mapState = (state) => ({
    podcasts: state.podcasts.podcasts,
    podcast: state.podcasts.podcast,
    date: state.podcasts.date,
});

const mapDispatch = {
    getPodcast: podcastsActions.getPodcast,
};

export default connect(mapState, mapDispatch)(PodcastHoc);