import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/native';

import logo from '../../assets/images/logo.png';
import drawerlogo from '../../assets/images/drawerlogo.png';

import appNavigatorStyles from './appNavigatorStyles';
import { CAMPFIRE_PRIMARY } from '../../styles/colors';

function PurpleLogo() {
  return (
    <Image style={appNavigatorStyles.purpleLogo} resizeMode='contain' source={logo}/>
  );
}

function DrawerBurger () {
  const navigation = useNavigation();
  return(
    <TouchableOpacity style={appNavigatorStyles.burgerContainer} 
    onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
        <Image source={drawerlogo} style={appNavigatorStyles.burgerStyles} resizeMode='contain' />
    </TouchableOpacity> 
  );
}

  function HomeHeader() {
    return (
      <Image style={appNavigatorStyles.homeHeader} resizeMode='contain' source={logo}/>
    );
  }

const appNavigatorHeaders ={

    loginFlowHeader: {
        headerTitle: (() => <PurpleLogo />),
        headerTintColor: CAMPFIRE_PRIMARY,
        headerBackTitleVisible: false,
        headerStyle: {
          backgroundColor: 'white',
          shadowColor: 'transparent',
        },
        headerLeftContainerStyle: {
          marginLeft: 8
        }
      },

      drawerHeader: {
        headerTitle: (() => <HomeHeader />),
        headerLeft: null,
        headerRight: (() => <DrawerBurger />),
        headerStyle: {
          backgroundColor: CAMPFIRE_PRIMARY,
          shadowColor: CAMPFIRE_PRIMARY,
        },
      },

      purpleHeader: {
        headerTitle: (() => <HomeHeader />),
        headerTintColor: 'white',
        headerBackTitleVisible: false,
        headerRight: null,
        headerStyle: {
          backgroundColor: CAMPFIRE_PRIMARY,
        },
        headerLeftContainerStyle: {
          marginLeft: 8
        }
      }

};

export default appNavigatorHeaders;