/**
 * @format
 * @flow
 */

import React from 'react'
import { StyleSheet, View } from 'react-native'
import { LocalImage, BoldText } from 'components'
import * as theme from 'theme'

type Props = {
  style?: any,
}
const Logo = (props: Props) => {
  const { style, ...otherProps } = props
  return (
    <View style={[styles.container, style]} {...otherProps}>
      <View>
        <LocalImage
          source={require('assets/logo.png')}
          style={styles.headingImage}
          resizeMode="contain"
        />
      </View>
      <BoldText style={styles.header}>Study @</BoldText>
    </View>
  )
}
Logo.defaultProps = {
  style: {},
}
export default Logo

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headingImage: {
    width: theme.normalize(128),
    height: theme.normalize(128),
  },
  header: {
    marginTop: theme.normalize(20),
    fontSize: theme.normalize(24),
    marginBottom: theme.normalize(50),
  },
})
