/**
 * @format
 * @flow
 */

import * as t from './actionTypes'
import * as api from './api'

export function registerAuthListener(callback: (user: ?t.User) => void) {
  return dispatch => {
    api.registerAuthListener(user => {
      dispatch(t.registerAuthListener(user || null))
      callback(user)
    })
  }
}

export function unregisterAuthListener() {
  return dispatch => {
    api.unregisterAuthListener()
    dispatch(t.unregisterAuthListener())
  }
}
