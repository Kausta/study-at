/**
 * @format
 * @flow
 */

import firebase from 'react-native-firebase'
import * as t from './actionTypes'

let authSubscriber

export function registerAuthListener(callback: (user: ?t.User) => void) {
  if (authSubscriber) {
    authSubscriber()
  }
  authSubscriber = firebase.auth().onAuthStateChanged(callback)
}
export function unregisterAuthListener() {
  if (authSubscriber) {
    authSubscriber()
  }
}
