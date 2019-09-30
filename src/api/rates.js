import axios from 'axios';

export const getLatestRates = async (query) => {
    try {
        const response = await axios.get(`https://api.exchangeratesapi.io/latest?${query}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};
