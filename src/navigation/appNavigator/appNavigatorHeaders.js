import React from 'react';
import { Image } from 'react-native';
import logo from '../../assets/images/logo.png';

import appNavigatorStyles from './appNavigatorStyles';
import { CAMPFIRE_PRIMARY } from '../../styles/colors';


function PurpleLogo() {
  return (
    <Image style={appNavigatorStyles.purpleLogo} resizeMode='contain' source={logo}/>
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

};

export default appNavigatorHeaders;