/**
 * @format
 * @flow
 */

import Reactotron from 'reactotron-react-native'

const REACTOTRON_URL = '192.168.137.1'
const setupReactotron = () => {
  Reactotron.configure({
    name: 'Study @',
    host: REACTOTRON_URL || 'localhost',
  })
    .useReactNative()
    .connect()
}
setupReactotron()
