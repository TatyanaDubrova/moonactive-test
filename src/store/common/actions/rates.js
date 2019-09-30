import {REQUEST, RATES} from '../../../constants/actions';

export const getRates = (query = {}) => ({
    type: `${REQUEST}_${RATES}`,
    query,
});
