/**
 * @format
 * @flow
 */

/* eslint import/no-extraneous-dependencies: 0 */

if (__DEV__) {
  const Reactotron = require('reactotron-react-native').default // eslint-disable-line global-require

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
}
