import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/commons/header';
import actionNavigation from '../state/actions/navigation';

const mapDispatch = {
    startNavigate: actionNavigation.startNavigate,
    endNavigate: actionNavigation.endNavigate,
};

const BaseScene = connect(null, mapDispatch)((props) => {
    const { Child, stackProps, endNavigate } = props;

    useEffect(() => {
        let isUpdateNavigationState = true;

        if (isUpdateNavigationState) {
            setTimeout(endNavigate, 100);
        }

        return () => {
            isUpdateNavigationState = false;
        }
    }, []);

    return (
        <>
            <Header
                startNavigate={props.startNavigate}
                endNavigate={props.endNavigate}
            />
            <Child 
                {...stackProps}
                startNavigate={props.startNavigate}
                endNavigate={props.endNavigate}
            />
        </>
    );
});

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