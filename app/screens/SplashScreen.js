/**
 * @format
 * @flow
 */

import React from 'react'
import { StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { Spinner } from 'native-base'
import { Container, Content } from 'components'

import { actions } from 'modules/auth'

type Props = {}
type State = {}
@connect(
  state => ({
    auth: state.auth,
  }),
  {
    dispatchRegisterAuthListener: (callback: (user: any) => void) =>
      actions.registerAuthListener(callback),
  },
)
export default class SplashScreen extends React.Component<Props, State> {
  componentDidMount() {
    this.props.dispatchRegisterAuthListener(() => {
      this.props.navigation.navigate(this.props.auth.isLoggedIn ? 'Home' : 'Auth')
    })
  }

  render() {
    return (
      <Container>
        <Content style={styles.content}>
          <Spinner />
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
})
