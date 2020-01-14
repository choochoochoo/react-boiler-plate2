import { applyMiddleware, createStore, combineReducers } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import { composeWithDevTools } from 'redux-devtools-extension'

import * as reducers from './reducers'

const rootReducers = combineReducers({
    ...reducers
})

const logger = createLogger()

const store = createStore(
    rootReducers,
    composeWithDevTools(applyMiddleware(thunk, promise, logger))
)

export default store
