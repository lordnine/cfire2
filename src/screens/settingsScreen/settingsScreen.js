import React from 'react';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';
import { Divider, Button } from 'react-native-elements';

import { setAuthed } from '../../actions/userActions';
import { connect } from 'react-redux';

import settingsScreenStyles from './settingsScreenStyles';
import adjustableStyleFunctions from '../../styles/adjustableStyleFunctions';



class SettingsScreen extends React.Component {



    render() {

      /* gets card key from route */

      return (

        <View style={{width: '100%', height: '100%', alignItems: 'center'}}>
          <Divider style={{height: '4%'}}/>
            <Text style={{fontSize: 28, fontWeight: '600', color: 'grey'}}>Settings</Text>
            <Divider style={adjustableStyleFunctions.transparentDivider('60%')}/>
            <Button title="logout" onPress={()=> this.props.setAuthed(false)} buttonStyle={{backgroundColor: 'black', borderRadius: 6}}/>
        </View>

      );
    }
}

const mapDispatchToProps = {
  setAuthed
};

export default connect(null, mapDispatchToProps)(SettingsScreen);

const styles = StyleSheet.create({

 
});

