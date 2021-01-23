import React from 'react';
import {
  View,
  StyleSheet,
  Image
} from 'react-native';
import logo from '../../assets/images/logo.png';
import { Button, Divider} from 'react-native-elements';
import buttons from '../../styles/buttons';
import text from '../../styles/text';
import customStyles from '../../styles/customStyles';
import containers from '../../styles/containers';

export default class WelcomeScreen extends React.Component {
    static navigationOptions = {
      title: 'Campfire',
      header: null,
    };

    render() {
      return (
        <View style={containers.frameContainer}>
     
          {/* logo and spacing*/}
          <Divider style={customStyles.transparentDivider('10%')} />
          <Image style={customStyles.imgSize('13%','13%')}  resizeMode='contain' source={logo}/>
          <Divider style={customStyles.transparentDivider('45%')} />

          {/* Top Button */}
          <Button
              title="LEARN MORE"
              buttonStyle={[buttons.mainButton, buttons.minimalistButton]}
              titleStyle={text.minimalistButtonText}
              onPress={() => this.props.navigation.navigate('CreateAccount')}
            />

          <Divider style={customStyles.transparentDivider('3%')} />

          {/* Bottom button - reversed color */}
          <Button
              title="GET STARTED"
              buttonStyle={[buttons.mainButton, buttons.inverseMinimalistButton]}
              titleStyle={text.inverseMinimalistButtonText}
              onPress={() => this.props.navigation.navigate('Home')}
            />

        </View>
      );
    }
}

const styles = StyleSheet.create({


});

