import axios from 'axios';

const apiCall = async (config) => {
    try {
        const response = await axios(config);
        return Promise.resolve(response.data);
    } catch (error) {
    }
};

export default apiCall;