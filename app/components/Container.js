/**
 * @format
 * @flow
 */

import React from 'react'
import { StyleSheet } from 'react-native'
import { Container } from 'native-base'

type Props = {
  children: any,
}
export default (props: Props) => {
  const { children } = props
  return <Container style={styles.container}>{children}</Container>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
