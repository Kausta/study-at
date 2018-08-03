/**
 * @format
 * @flow
 */

import FireUser from 'react-native-firebase/lib/modules/auth/User'

export const REGISTER_AUTH_LISTENER = 'auth/REGISTER_AUTH_LISTENER'
export const UNREGISTER_AUTH_LISTENER = 'auth/UNREGISTER_AUTH_LISTENER'

export type User = FireUser

export function registerAuthListener(user: ?User) {
  return {
    type: REGISTER_AUTH_LISTENER,
    user,
  }
}

export function unregisterAuthListener() {
  return { type: UNREGISTER_AUTH_LISTENER }
}
