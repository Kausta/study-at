/**
 * @format
 * @flow
 */

import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'

import { Container } from 'components'

type Props = {}
type State = {}
@connect(
  state => ({
    auth: state.auth,
  }),
  {},
)
export default class SignUp extends React.Component<Props, State> {
  constructor() {
    super()
    this.state = {}
  }

  componentDidMount() {}

  render() {
    return (
      <Container>
        <View style={styles.container}>
          <Text style={styles.welcome}>Sign Up!</Text>
        </View>
      </Container>
    )
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
