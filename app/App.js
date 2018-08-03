/**
 * @format
 * @flow
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import Reactotron from 'reactotron-react-native'
import RootNavigator from 'navigators'

import { actions } from 'modules/auth'

type Props = {}
type State = {}
@connect(
  state => ({
    auth: state.auth,
  }),
  {
    dispatchUnregisterAuthListener: () => actions.unregisterAuthListener(),
  },
)
export default class App extends Component<Props, State> {
  constructor() {
    super()
    this.state = {}
  }

  componentDidMount() {
    Reactotron.log('Initialized app')
  }

  componentWillUnmount() {
    this.props.dispatchUnregisterAuthListener()
  }

  render() {
    return <RootNavigator />
  }
}
