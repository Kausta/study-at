/**
 * @format
 * @flow
 */

import React from 'react'
import { StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import theme from 'theme'

import { Container, Content } from 'components'
import { Logo } from '../components'

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
        <Content style={styles.container}>
          <Logo />
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.background_color,
    paddingHorizontal: theme.normalize(40),
  },
})
