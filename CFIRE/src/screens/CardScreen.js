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
import articles from '../constants/articles';
import BigCard from '../components/BigCard';
import { StackRouter } from 'react-navigation';

export default class CardScreen extends React.Component {
    static navigationOptions = {
      title: 'Campfire',
      header: null,
    };

    

    

    render() {


      return (
        <View style={styles.frameContainer}>

            <BigCard item={articles[this.props.navigation.getParam('key','Sorry, something went wrong! Please try again!')]}/>

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
