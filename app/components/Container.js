/**
 * @format
 * @flow
 */

import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'

type Props = {
  children: any,
}
export default (props: Props) => {
  const { children } = props
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
