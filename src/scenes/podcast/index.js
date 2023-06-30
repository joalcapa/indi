import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import EpisodesList from '../../components/episodes/episodesList';
import PodcastInfo from '../../components/podcast/podcastInfo';
import usePodcast from '../../hooks/usePodcast';
import episodesActions from '../../state/actions/episodes';
import './index.css';

const Podcast = (props) => (
    <div className="dashboard-container">
        <PodcastInfo {...props.podcast} />
        <EpisodesList episodes={props.episodes} />
    </div>
);

Podcast.propTypes = {
    podcast: PropTypes.shape({}),
    episodes: PropTypes.array,
};

Podcast.defaultProps = {
    podcast: {},
    episodes: [],
};

const PodcastHoc = (props) => {
    const hook = usePodcast(props);
    return <Podcast {...hook} />;
};

PodcastHoc.propTypes = {
    getEpisodes: PropTypes.func,
    podcasts: PropTypes.array,
    episodes: PropTypes.shape({}),
};

PodcastHoc.defaultProps = {
    getEpisodes: () => {},
    podcasts: [],
    episodes: {},
};

const mapState = (state) => ({
    podcasts: state.podcasts.podcasts,
    episodes: state.episodes.episodes,
});

const mapDispatch = {
    getEpisodes: episodesActions.getEpisodes,
};

export default connect(mapState, mapDispatch)(PodcastHoc);