import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image
} from 'react-native';
import common from '../../styles/common';
import { Button, Divider} from 'react-native-elements';
import articles from '../../constants/articles';
import BigCard from '../../components/bigCard';

export default class CardScreen extends React.Component {
    static navigationOptions = {
      title: 'Campfire',
      header: null,
    };


    render() {

      const { key } = this.props.route.params;
      console.log(key);
      return (
        <View style={styles.redContainer}>
            <Divider style={{height: '1.5%'}}/>
            <BigCard item={articles[key]}/>

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

  frameContainer: common.redContainer,

  redContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    paddingHorizontal: '3%'
  },
});

