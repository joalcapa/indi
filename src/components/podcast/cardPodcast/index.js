import PropTypes from 'prop-types';
import './index.css';

const CardPodcast = (props) => (
    <div className="podcast-content">
        <div className="podcast-image-container">
            <img src={props.image} className="podcast-image"/>
        </div>
        <div className="podcast-container box-shadow">
            <div className="podcast-text-center">
                {props.title}
            </div>
            <div className="podcast-text-center podcast-author">
                Author: {props.author}
            </div>
        </div>
    </div>
);

CardPodcast.propTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
    image: PropTypes.string,
};

CardPodcast.defaultProps = {
    title: '',
    author: '',
    image: '',
};

export default CardPodcast;