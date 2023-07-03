import { useParams, useNavigate, useLocation } from 'react-router-dom';

const useNavigation = (props = {}) => {
    const { startNavigate = () => {}} = props;
    const params = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    const navigateCustom = (path = '') => {
        if (path) {
            if (location.pathname != path) {
                startNavigate();
            }
            
            setTimeout(() => {
                navigate(path);
            }, 100);
        }
    };

    return {
        navigate: navigateCustom,
        params,
    };
};

export default useNavigation;