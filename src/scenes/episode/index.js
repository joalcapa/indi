import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import EpisodePlayer from '../../components/episodes/episodePlayer';
import PodcastInfo from '../../components/podcast/podcastInfo';
import useEpisode from '../../hooks/useEpisode';
import episodesActions from '../../state/actions/episodes';
import './index.css';

const Episode = (props) => (
    <div className="dashboard-container">
        <PodcastInfo {...props.podcast} />
        <EpisodePlayer episode={props.episode} />
    </div>
);

Episode.propTypes = {
    podcast: PropTypes.shape({}),
    episode: PropTypes.shape({}),
};

Episode.defaultProps = {
    podcast: {},
    episode: {},
};

const EpisodeHoc = (props) => {
    const hook = useEpisode(props);
    return <Episode {...hook} />;
};

EpisodeHoc.propTypes = {
    getEpisodes: PropTypes.func,
    podcasts: PropTypes.array,
    episodes: PropTypes.shape({}),
};

EpisodeHoc.defaultProps = {
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

export default connect(mapState, mapDispatch)(EpisodeHoc);