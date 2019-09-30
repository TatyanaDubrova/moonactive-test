import { applyMiddleware,  createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import commonReducers from './reducers'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
    commonReducers(),
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)
