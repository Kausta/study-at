/**
 * @format
 * @flow
 */

import React, { Component } from 'react'
import { Provider as StoreProvider } from 'react-redux'
import { Provider as PaperProvider } from 'react-native-paper'

import App from 'App'
import store from 'redux-store/store'

type Props = {}
type State = {}
export default class AppWithStore extends Component<Props, State> {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <StoreProvider store={store}>
        <PaperProvider>
          <App />
        </PaperProvider>
      </StoreProvider>
    )
  }
}
