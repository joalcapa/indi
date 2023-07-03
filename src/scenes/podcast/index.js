import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BaseScene from '../baseScene';
import EpisodesList from '../../components/episodes/episodesList';
import PodcastInfo from '../../components/podcast/podcastInfo';
import usePodcast from '../../hooks/usePodcast';
import episodesActions from '../../state/actions/episodes';
import './index.css';

const Podcast = (props) => (
    <div className="dashboard-container">
        <PodcastInfo 
            {...props.podcast} 
            onPodcastInfo={props.onPodcastInfo}
        />
        {
            props.isLoading ? 
                <div className='loading'>loading episodes, that may take a few minutes</div> : 
                <EpisodesList episodes={props.episodes} />
        }
    </div>
);

Podcast.propTypes = {
    podcast: PropTypes.shape({}),
    episodes: PropTypes.array,
    onPodcastInfo: PropTypes.func,
};

Podcast.defaultProps = {
    podcast: {},
    episodes: [],
    onPodcastInfo: () => {},
};

const PodcastHoc = (props) => {
    const hook = usePodcast(props);
    return <Podcast {...hook} />;
};

PodcastHoc.propTypes = {
    getEpisodes: PropTypes.func,
    podcasts: PropTypes.array,
    episodes: PropTypes.shape({}),
    isLoading: PropTypes.bool,
};

PodcastHoc.defaultProps = {
    getEpisodes: () => {},
    podcasts: [],
    episodes: {},
    isLoading: false,
};

const mapState = (state) => ({
    podcasts: state.podcasts.podcasts,
    episodes: state.episodes.episodes,
    isLoading: state.episodes.loading,
});

const mapDispatch = {
    getEpisodes: episodesActions.getEpisodes,
};

export default BaseScene(connect(mapState, mapDispatch)(PodcastHoc));