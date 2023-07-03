import { useNavigate } from 'react-router-dom';

const useHeader = () => {
    const navigate = useNavigate();

    const onDashboard = () => {
        navigate('/');
    };

    return {
        onDashboard,
    };
};

export default useHeader;