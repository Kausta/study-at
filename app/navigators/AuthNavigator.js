/**
 * @format
 * @flow
 */

import { Platform } from 'react-native'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { SignIn, SignUp } from 'modules/auth/scenes'
import tabBarIcon from './util/tabBarIcon'

/* eslint-disable prettier/prettier */
const createTabNavigator = Platform.OS === 'ios'
  ? createBottomTabNavigator
  : createMaterialBottomTabNavigator
/* eslint-enable prettier/prettier */

const SignInStack = createStackNavigator(
  {
    SignIn: {
      screen: SignIn,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: 'SignIn',
  },
)

const SignUpStack = createStackNavigator(
  {
    SignUp: {
      screen: SignUp,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: 'SignUp',
  },
)

export default createTabNavigator(
  {
    SignInTab: {
      screen: SignInStack,
      navigationOptions: {
        title: 'Sign In',
        tabBarIcon: tabBarIcon('log-in'),
        tabBarColor: '#3F51B5',
      },
    },
    SignUpTab: {
      screen: SignUpStack,
      title: 'Sign Up',
      navigationOptions: {
        title: 'Sign In',
        tabBarIcon: tabBarIcon('person-add'),
        tabBarColor: '#009688',
      },
    },
  },
  {
    initialRouteName: 'SignInTab',
    shifting: true,
    swipeEnabled: true,
  },
)
