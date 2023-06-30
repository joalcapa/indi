import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import useDashboard from '../../hooks/useDashboard';
import CardPodcast from '../../components/podcast/cardPodcast';
import podcastsActions from '../../state/actions/podcasts';
import './index.css';

const Dashboard = (props) => (
    <div className="dashboard-container">
        {props.podcasts.map((podcast) => (
            <div className='dashboard-item'>
                <CardPodcast
                    key={podcast["id"].attributes["im:id"]}
                    title={podcast["im:name"].label}
                    author={podcast["im:artist"].label}
                    image={podcast["im:image"][0].label}
                />
            </div>
        ))}
    </div>
);

Dashboard.propTypes = {
    podcasts: PropTypes.array,
};

Dashboard.defaultProps = {
    podcasts: [],
};

const DashboardHoc = (props) => {
    console.log('oooo: ', props)
    const hook = useDashboard(props);
    return <Dashboard {...hook} />;
};

DashboardHoc.propTypes = {
    getPodcasts: PropTypes.func,
    podcasts: PropTypes.array,
};

DashboardHoc.defaultProps = {
    getPodcasts: () => {},
    podcasts: [],
};

const mapState = (state) => ({
    podcasts: state.podcasts.podcasts,
    date: state.podcasts.date,
});

const mapDispatch = {
    getPodcasts: podcastsActions.getPodcasts,
};

export default connect(mapState, mapDispatch)(DashboardHoc);