/**
 * @format
 * @flow
 */

import { createStackNavigator } from 'react-navigation'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { SignIn, SignUp } from 'modules/auth/scenes'
import tabBarIcon from './util/tabBarIcon'

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

export default createMaterialBottomTabNavigator(
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
  },
)
