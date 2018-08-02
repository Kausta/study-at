/**
 * @format
 * @flow
 */

import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

import R from 'ramda'
import ramdash from 'ramdash'

import Reactotron from 'reactotron-react-native'

import reducers from './rootReducer'

const _ = ramdash(R) // Import the root reducer

let middlewares = [thunk]

if (process.env.NODE_ENV !== 'production' && process.env.TEST !== 'true') {
  const logger = createLogger({
    collapsed: true,
    stateTransformer: state =>
      _.mapValues(state, reducer => {
        if (reducer.toJS) {
          return reducer.toJS()
        }

        return reducer
      }),
    logger: Reactotron,
  })

  middlewares = [...middlewares, logger]
}

const rootReducer = combineReducers(reducers)
const store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store
