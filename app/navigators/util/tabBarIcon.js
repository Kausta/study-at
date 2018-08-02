import * as React from 'react'
import { Platform } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const namePrefix = Platform.OS === 'ios' ? 'ios-' : 'md-'

type Props = {
  tintColor: string,
}
const tabBarIcon = name => {
  const transformedName = namePrefix + name
  return ({ tintColor }: Props) => (
    <Icon
      style={{ backgroundColor: 'transparent' }}
      name={transformedName}
      color={tintColor}
      size={24}
    />
  )
}

export default tabBarIcon
