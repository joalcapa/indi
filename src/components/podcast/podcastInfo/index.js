import PropTypes from 'prop-types';
import './index.css';

const PodcastInfo = (props) => (
    <div className="box-shadow podcast-info-container">
        <div className="podcast-info-image-content">
            <img src={props.image} className="podcast-info-image" />
        </div>
        <div className="podcast-info-title">
            <div>{props.title}</div>
            <div className="podcast-info-author">
                by {props.author}
            </div>
        </div>
        <div className="podcast-info-description">
            <div>Description:</div>
            <div className="podcast-info-summary">
                {props.description}
            </div>
        </div>
    </div>    
);

PodcastInfo.propTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
};

PodcastInfo.defaultProps = {
    title: '',
    author: '',
    image: '',
    description: '',
};

export default PodcastInfo;