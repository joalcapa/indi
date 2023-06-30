import axios from 'axios';

const apiCall = async (config) => {
    try {
        const response = await axios(config);
        return Promise.resolve(JSON.parse(response.data.contents));
    } catch (error) {
    }
};

export default apiCall;