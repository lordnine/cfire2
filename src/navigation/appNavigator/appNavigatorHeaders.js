import React from 'react';
import { Image } from 'react-native';
import logo from '../../assets/images/logo.png';

import appNavigatorStyles from './appNavigatorStyles';
import { CAMPFIRE_PRIMARY } from '../../styles/colors';


function BeginHeader() {
  return (
    <Image style={appNavigatorStyles.beginHeader} resizeMode='contain' source={logo}/>
  );
}


const appNavigatorHeaders ={
    headerOne: {
        headerTitle: (() => <BeginHeader />),
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