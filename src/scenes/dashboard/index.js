import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import useDashboard from '../../hooks/useDashboard';
import CardPodcast from '../../components/podcast/cardPodcast';
import podcastsActions from '../../state/actions/podcasts';

const Dashboard = (props) => (
    <div style={{display: 'flex', flexDirection: 'row'}}>
        {props.podcasts.map((podcast) => (
            <CardPodcast
                key={podcast["id"].attributes["im:id"]}
                title={podcast["im:name"].label}
                author={podcast["im:artist"].label}
                image={podcast["im:image"][0].label}
            />
        ))}
    </div>
);

const DashboardHoc = (props) => {
    const hook = useDashboard(props);
    return <Dashboard {...hook} />;
};

DashboardHoc.propTypes = {
    getPodcasts: PropTypes.func,
};

DashboardHoc.defaultProps = {
    getPodcasts: () => {},
};

const mapState = (state) => state.podcasts;

const mapDispatch = {
    getPodcasts: podcastsActions.getPodcasts,
};

export default connect(mapState, mapDispatch)(DashboardHoc);