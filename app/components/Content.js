/**
 * @format
 * @flow
 */

import React from 'react'
import { StyleSheet } from 'react-native'
import { Content } from 'native-base'

type Props = {
  children: any,
  style: any,
}
export default (props: Props) => {
  const { children, style, ...contentProps } = props
  return (
    <Content contentContainerStyle={[styles.container, style]} {...contentProps}>
      {children}
    </Content>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
