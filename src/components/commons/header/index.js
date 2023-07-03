import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import useHeader from '../../../hooks/useHeader';
import './index.css';

const Header = (props) => (
    <div className='header-container'>
        <div className='podcaster-link' onClick={props.onDashboard}>
            Podcaster
        </div>
        {props.isNavigate && <div className='navigation-sensor' />}
    </div>
);

Header.propTypes = {
    onDashboard: PropTypes.func,
    isNavigate: PropTypes.bool,
};

Header.defaultProps = {
    onDashboard: () => {},
    isNavigate: false,
};

const HeaderHoc = (props) => {
    const hook = useHeader(props);
    return <Header {...hook} {...props} />;
};

HeaderHoc.propTypes = {
    startNavigate: PropTypes.func,
};

HeaderHoc.defaultProps = {
    startNavigate: () => {},
};

const mapState = (state) => ({
    isNavigate: state.navigation.isNavigate,
});

export default connect(mapState)(HeaderHoc);