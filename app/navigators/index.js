/**
 * @format
 * @flow
 */

import { createSwitchNavigator } from 'react-navigation'

import AuthNavigator from './AuthNavigator'

export default createSwitchNavigator(
  {
    Auth: AuthNavigator,
  },
  {
    initialRouteName: 'Auth',
  },
)
