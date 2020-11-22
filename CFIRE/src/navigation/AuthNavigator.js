import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from '../screens/LoginScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import CreateAccountScreen from '../screens/CreateAccountScreen';
import VerifyEmailScreen from '../screens/VerifyEmailScreen';
import HomeScreen from '../screens/HomeScreen';

export default createStackNavigator(
  {
    Welcome: WelcomeScreen,
    CreateAccount: CreateAccountScreen,
    Login: LoginScreen,
    VerifyEmail: VerifyEmailScreen,
    Home: HomeScreen,
  },
  {
    initialRouteName: 'Welcome',
  },
);
