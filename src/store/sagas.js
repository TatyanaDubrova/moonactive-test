import { all } from 'redux-saga/effects';

import { sagas as common } from './common';

/**
 *  root saga
 */
export default function* saga() {
    yield all([
        ...common()
    ])
}
