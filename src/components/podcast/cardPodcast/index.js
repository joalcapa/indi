import PropTypes from 'prop-types';

const CardPodcast = (props) => (
    <div>
        {props.title} - {props.author}
    </div>
);

CardPodcast.propTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
};

CardPodcast.defaultProps = {
    title: '',
    author: '',
};

export default CardPodcast;