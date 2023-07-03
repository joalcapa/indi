import { useEffect } from 'react';
import PropTypes from 'prop-types';
import './index.css';

const EpisodePlayer = (props) => {
    const controlId = "use-uuid-if-multiple-on-page";

    useEffect(() => {
        const audioControl = document.querySelector(`#${controlId}`);
        if(audioControl) {
            audioControl.load();
        }
    });

    return (
        <div className='episodes-list-content box-shadow'>
            <div className='episode-title'>{props.episode.title}</div>
            <div className='episode-description'>
                <div dangerouslySetInnerHTML={{ __html: props.episode.description }}></div>
            </div>
            <div className='episode-player'>
                <audio id={controlId} controls preload="auto" className='player'>
                    <source src={props.episode.raw.url} type={props.episode.raw.type}/>
                </audio>
            </div>
        </div>
    );
};

EpisodePlayer.propTypes = {
    episode: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        date: PropTypes.string,
        duration: PropTypes.string,
        description: PropTypes.string,
        raw: PropTypes.shape({}),
    }),
};

EpisodePlayer.defaultProps = {
    episodes: {},
};

export default EpisodePlayer;