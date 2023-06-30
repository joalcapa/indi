import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import useDashboard from '../../hooks/useDashboard';
import CardPodcast from '../../components/podcast/cardPodcast';
import podcastsActions from '../../state/actions/podcasts';
import './index.css';

const Dashboard = (props) => (
    <div className="dashboard-items">
        <div className="dashboard-filter-container">
            <div className="dashboard-number-filter" >
                {props.podcasts.length}
            </div>
            <input 
                className="dashboard-input" 
                value={props.filter} 
                onChange={props.changeFilter}
                placeholder="Filter podcasts..."
            />
        </div>
        <div className="dashboard-container">
            {props.podcasts.map((podcast) => (
                <div className='dashboard-item'>
                    <CardPodcast {...podcast} />
                </div>
            ))}
        </div>
    </div>
);

Dashboard.propTypes = {
    podcasts: PropTypes.array,
    changeFilter: PropTypes.func,
    filter: PropTypes.string,
};

Dashboard.defaultProps = {
    podcasts: [],
    changeFilter: () => {},
    filter: '',
};

const DashboardHoc = (props) => {
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