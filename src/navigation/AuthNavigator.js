import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from '../screens/LoginScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import CreateAccountScreen from '../screens/CreateAccountScreen';
import VerifyEmailScreen from '../screens/VerifyEmailScreen';
import HomeScreen from '../screens/HomeScreen';
import CardScreen from '../screens/CardScreen';
import MainTabNavigator from '../navigation/MainTabNavigator';

export default createStackNavigator(
  {
    Welcome: WelcomeScreen,
    CreateAccount: CreateAccountScreen,
    Login: LoginScreen,
    VerifyEmail: VerifyEmailScreen,
    Home: HomeScreen,
    Card: CardScreen,
  },
  {
    initialRouteName: 'Welcome',
  },

);
