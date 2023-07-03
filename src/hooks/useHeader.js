import useNavigation from './useNavigation';

const useHeader = (props = {}) => {
    const { isNavigate } = props;
    const { navigate } = useNavigation(props);

    const onDashboard = () => {
        navigate('/');
    };

    return {
        onDashboard,
        isNavigate,
    };
};

export default useHeader;