import axios from 'axios';
import { xmlToJson } from '../utils';

const apiCall = async (config) => {
    try {
        const { isXml = false } = config;
        const response = await axios(config);

        let payload = '{}';
        if (isXml) {
            payload = xmlToJson(response.data);
        } else {
            payload = JSON.parse(response.data.contents);
        }

        return Promise.resolve(payload);
    } catch (error) {
        throw error;
    }
};

export default apiCall;