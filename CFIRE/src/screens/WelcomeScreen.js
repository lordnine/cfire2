import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image
} from 'react-native';
import common from '../styles/common';
import logo from '../assets/images/logo.png';
import { Button, Divider} from 'react-native-elements';

export default class WelcomeScreen extends React.Component {
    static navigationOptions = {
      title: 'Campfire',
      header: null,
    };

    render() {
      return (
        <View style={styles.frameContainer}>
          <Divider style={{ height: 80, backgroundColor: 'transparent' }} />
          <Image style={{ width: 50, height: 50,resizeMode: 'contain'}} source={logo}/>
          <Divider style={{ height: 170, backgroundColor: 'transparent' }} />
          <View style={{alignItems:'left'}}>
          <Text style={styles.megaText}>Get connected.</Text>
          <Text style={styles.subtitleText}>Find the best deals in your community today.</Text>
          </View>
          <Divider style={{height: 30, backgroundColor: 'transparent'}}/>
          <Button
              title="SIGN UP"
              buttonStyle={styles.button}
              titleStyle={{ fontWeight: 'bold', color: 'white' }}
              onPress={() => this.props.navigation.navigate('CreateAccount')}
            />
           <Divider style={{ height: 18, backgroundColor: 'transparent' }} />
          <Button
              title="LOG IN"
              buttonStyle={styles.inverseButton}
              titleStyle={{ fontWeight: 'bold', color: '#FE5F54'}}
              onPress={() => this.props.navigation.navigate('Home')}
            />
        </View>
      );
    }
}

const styles = StyleSheet.create({

  text: {
    fontSize: 38,
    color: 'white',
    fontWeight: '400'
  },

  input: common.minimalistInput,
  button: common.minimalistButton,
  textContainer: {
    alignItems: 'center',
  },

  titleText: common.titleText,
  text: {
    ...common.text,
    ...common.textLink,
  },

  megaText: common.megaText,
  
  subtitleText: common.subtitleText,

  inverseButton: common.inverseMinimalistButton,

  frameContainer: common.redContainer
});

