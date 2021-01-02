import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from '../screens/loginScreen';
import WelcomeScreen from '../screens/welcomeScreen';
import CreateAccountScreen from '../screens/createAccountScreen';
import HomeScreen from '../screens/homeScreen';
import CardScreen from '../screens/cardScreen';
import MainTabNavigator from '../navigation/MainTabNavigator';

export default createStackNavigator(
  {
    Welcome: WelcomeScreen,
    CreateAccount: CreateAccountScreen,
    Login: LoginScreen,
    Home: HomeScreen,
    Card: CardScreen,
  },
  {
    initialRouteName: 'Welcome',
  },

);
