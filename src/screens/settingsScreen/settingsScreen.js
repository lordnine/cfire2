import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image
} from 'react-native';
import { Divider } from 'react-native-elements';
import settingsScreenStyles from './settingsScreenStyles';

export default class SettingsScreen extends React.Component {



    render() {

      /* gets card key from route */

      return (

        <View style={{width: '100%', height: '100%', alignItems: 'center'}}>
          <Divider style={{height: '4%'}}/>
            <Text style={{fontSize: 28, fontWeight: '600'}}>Settings</Text>

        </View>

      );
    }
}



const styles = StyleSheet.create({

 
});

