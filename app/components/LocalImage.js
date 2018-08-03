/**
 * @format
 * @flow
 */

import React from 'react'
import FastImage from 'react-native-fast-image'

type Props = {
  source: any,
  style?: any,
}
const LocalImage = (props: Props) => {
  const { source, style, ...otherProps } = props
  return <FastImage source={source} style={style} {...otherProps} />
}
LocalImage.defaultProps = {
  style: {},
}
export default LocalImage
