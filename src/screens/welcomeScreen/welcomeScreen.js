import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image
} from 'react-native';
import common from '../../styles/common';
import logo from '../../assets/images/logo.png';
import { Button, Divider} from 'react-native-elements';
import buttons from '../../styles/buttons';
import text from '../../styles/text';
import customStyles from '../../styles/customStyles';

export default class WelcomeScreen extends React.Component {
    static navigationOptions = {
      title: 'Campfire',
      header: null,
    };

    render() {
      return (
        <View style={styles.frameContainer}>
          <Divider style={customStyles.transparentDivider('10%')} />
          <Image style={{ width: 55, height: 55,}}  resizeMode='contain' source={logo}/>
          <Divider style={customStyles.transparentDivider('45%')} />
          <Button
              title="LEARN MORE"
              buttonStyle={buttons.minimalistButton}
              titleStyle={text.minimalistButtonText}
              onPress={() => this.props.navigation.navigate('CreateAccount')}
            />
           <Divider style={{ height: 18, backgroundColor: 'transparent' }} />
          <Button
              title="GET STARTED"
              buttonStyle={buttons.inverseMinimalistButton}
              titleStyle={text.inverseMinimalistButtonText}
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

