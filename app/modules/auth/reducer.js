/**
 * @format
 * @flow
 */

import * as t from './actionTypes'

type stateType = {
  user: ?t.User,
  isLoggedIn: boolean,
}
const initialState: stateType = {
  user: null,
  isLoggedIn: false,
}

export default (state: stateType = initialState, action) => {
  switch (action.type) {
    case t.REGISTER_AUTH_LISTENER:
      return {
        ...state,
        user: action.user,
        isLoggedIn: !!action.user,
      }
    case t.UNREGISTER_AUTH_LISTENER:
      return state
    default:
      return state
  }
}
