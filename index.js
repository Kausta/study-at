/**
 * @format
 * @flow
 */

import Reactotron from 'reactotron-react-native'

import { AppRegistry } from 'react-native'
import 'config/ReactotronConfig'
import App from './App'
import { name as appName } from './app.json'

Reactotron.log('Reactotron Connected!')

AppRegistry.registerComponent(appName, () => App)
