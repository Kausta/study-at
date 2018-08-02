/**
 * @format
 * @flow
 */

import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import Reactotron from 'reactotron-react-native'
import RootNavigator from 'navigators'

type Props = {}
type State = {
  isLoading: boolean,
}
@connect(
  state => ({
    auth: state.auth,
  }),
  {},
)
export default class App extends Component<Props, State> {
  constructor() {
    super()
    this.state = {
      isLoading: true,
    }
  }

  componentDidMount() {
    this.setState({ isLoading: false })
    Reactotron.log('Initialized app')
  }

  render() {
    const { isLoading } = this.state
    if (isLoading) {
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>Loading...</Text>
        </View>
      )
    }

    return <RootNavigator />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})
