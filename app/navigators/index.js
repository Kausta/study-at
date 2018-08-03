/**
 * @format
 * @flow
 */

import { createSwitchNavigator } from 'react-navigation'

import SplashScreen from 'screens/SplashScreen'
import AuthNavigator from './AuthNavigator'

export default createSwitchNavigator(
  {
    Splash: SplashScreen,
    Auth: AuthNavigator,
  },
  {
    initialRouteName: 'Splash',
  },
)
