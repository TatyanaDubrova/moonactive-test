import { RATES, REQUEST, FAIL, SUCCESS } from '../../../constants/actions';

export const INITIAL_STATE = {
    rates: [],
    base: 'USD',
    date: '',
    loading: false,
    error: null,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case `${REQUEST}_${RATES}`:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case `${SUCCESS}_${RATES}`:
            return {
                ...state,
                rates: action.rates.rates,
                base: action.rates.base,
                date: action.rates.date,
                loading: false,
                error: null,
            };

        case `${FAIL}_${RATES}`:
            return {
                ...state,
                error: action.error,
                loading: false,
            };

        default:
            return state;
    }
}
