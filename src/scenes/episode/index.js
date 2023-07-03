import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BaseScene from '../baseScene';
import EpisodePlayer from '../../components/episodes/episodePlayer';
import PodcastInfo from '../../components/podcast/podcastInfo';
import useEpisode from '../../hooks/useEpisode';
import episodesActions from '../../state/actions/episodes';
import './index.css';

const Episode = (props) => (
    <div className="dashboard-container">
        <PodcastInfo 
            {...props.podcast} 
            onPodcastInfo={props.onPodcastInfo}
        />
        <EpisodePlayer episode={props.episode} />
    </div>
);

Episode.propTypes = {
    podcast: PropTypes.shape({}),
    episode: PropTypes.shape({}),
    onPodcastInfo: PropTypes.func,
};

Episode.defaultProps = {
    podcast: {},
    episode: {},
    onPodcastInfo: () => {},
};

const EpisodeHoc = (props) => {
    const hook = useEpisode(props);
    return <Episode {...hook} />;
};

EpisodeHoc.propTypes = {
    getEpisodes: PropTypes.func,
    podcasts: PropTypes.array,
    episodes: PropTypes.shape({}),
    startNavigate: PropTypes.func,
};

EpisodeHoc.defaultProps = {
    getEpisodes: () => {},
    podcasts: [],
    episodes: {},
    startNavigate: () => {},
};

const mapState = (state) => ({
    podcasts: state.podcasts.podcasts,
    episodes: state.episodes.episodes,
});

const mapDispatch = {
    getEpisodes: episodesActions.getEpisodes,
};

export default BaseScene(connect(mapState, mapDispatch)(EpisodeHoc));