import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import AuthNavigator from './AuthNavigator';
import AuthLoadingScreen from '../screens/authLoadingScreen';
import HomeDrawerNavigator from './HomeDrawerNavigator';

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    Auth: AuthNavigator,
    Main: MainTabNavigator,
    Drawer: HomeDrawerNavigator
  },
  {
    initialRouteName: 'AuthLoading',
  },
));
