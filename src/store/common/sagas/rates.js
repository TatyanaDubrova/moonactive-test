import { put, takeLatest, call } from 'redux-saga/effects'

import { REQUEST, RATES, SUCCESS, FAIL } from '../../../constants/actions'
import { getLatestRates as getRatesApi } from '../../../api'

export function* getRates({ query }) {
    try {
        const queryString = Object.entries(query)
            .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`).join('&');
        const rates = yield call(getRatesApi, queryString)

        yield put({ type: `${SUCCESS}_${RATES}`, rates })
    } catch(error) {
        yield put({ type: `${FAIL}_${RATES}`, error })
    }

}

export default function ratesSaga() {
    return [
        takeLatest(`${REQUEST}_${RATES}`, getRates)
    ]
}
