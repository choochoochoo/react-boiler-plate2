import { applyMiddleware, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import { composeWithDevTools } from 'redux-devtools-extension'

import reducers from './reducers'

const logger = createLogger()

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunk, promise, logger))
)

export default store
