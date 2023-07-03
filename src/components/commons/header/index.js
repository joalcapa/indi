import PropTypes from 'prop-types';
import useHeader from '../../../hooks/useHeader';
import './index.css';

const Header = (props) => (
    <div className='header-container'>
        <div className='podcaster-link' onClick={props.onDashboard}>
            Podcaster
        </div>
    </div>
);

Header.propTypes = {
    onDashboard: PropTypes.func,
};

Header.defaultProps = {
    onDashboard: () => {},
};

const HeaderHoc = () => {
    const hook = useHeader();
    return <Header {...hook} />;
};

export default HeaderHoc;