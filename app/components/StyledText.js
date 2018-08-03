/** ***********************************************************************
 *
 * Caner Korkmaz
 * __________________
 *
 *  Copyright [2018] Caner Korkmaz
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Caner Korkmaz and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Caner Korkmaz
 * and its suppliers and may be covered by U.S. and Foreign Patents,
 * patents in process, and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Caner Korkmaz.
 */

import React from 'react'
import { fontFamily } from 'theme'
import { Text } from 'native-base'

type Props = {
  style?: any,
}
const defaultProps: Props = {
  style: {},
}
export const RegularText = (props: Props) => {
  const { style = {}, ...rest } = props
  return <Text {...rest} style={[style, { fontFamily: fontFamily.regular }]} />
}
RegularText.defaultProps = defaultProps

export const LightText = (props: Props) => {
  const { style = {}, ...rest } = props
  return <Text {...rest} style={[style, { fontFamily: fontFamily.light }]} />
}
LightText.defaultProps = defaultProps

export const BoldText = (props: Props) => {
  const { style = {}, ...rest } = props
  return <Text {...rest} style={[style, { fontFamily: fontFamily.bold }]} />
}
BoldText.defaultProps = defaultProps
