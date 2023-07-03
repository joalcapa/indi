import PropTypes from 'prop-types';
import Header from '../components/commons/header';

const BaseScene = (props) => {
    const { Child, stackProps } = props;
    return (
        <>
            <Header />
            <Child {...stackProps} />
        </>
    );
};

BaseScene.propTypes = {
    stackProps: PropTypes.shape({}),
    Child: PropTypes.any,
};

BaseScene.defaultProps = {
    stackProps: {},
    Child: <></>,
};

export default (Child) => (props) => (
    <BaseScene Child={Child} stackProps={props} />
);