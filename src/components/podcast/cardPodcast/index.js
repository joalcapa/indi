import PropTypes from 'prop-types';
import './index.css';

const CardPodcast = (props) => (
    <div>
        <img src={props.image} className="podcast-image" />
        <div className="podcast-container">
            <div>{props.title}</div>
            <div className="podcast-author">Author: {props.author}</div>
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