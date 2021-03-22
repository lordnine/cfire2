
import React from 'react';
import {
  Text,
  View,
  TextInput,
  ActivityIndicator
} from 'react-native';
import {
  Button, 
  Divider,
} from 'react-native-elements';

import loginScreenStyles from './loginScreenStyles';
import loginFlowStyles from '../../styles/commonScreenStyles/loginFlowStyles';
import buttons from '../../styles/buttons';
import text from '../../styles/text';
import { CAMPFIRE_SECONDARY } from '../../styles/colors';

import { auth } from '../../utils/firebase';

export default class LoginScreen extends React.Component {

  state = {
    password1: '',
    email: '',
    processSubmit: null
  };


  handleSubmit = () => {
    if(this.state.password1 && this.state.email){
      this.setState({processSubmit: true});
      const email = this.state.email;
      const password = this.state.password1;
      auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        this.setState({password1 : '', email: ''});
        var user = userCredential.user;
        this.props.navigation.navigate('Drawer');
        this.setState({processSubmit: null})
        this.setState({password1 : '', email: ''});
      })
      .catch((error) => {
        this.setState({processSubmit: false})
      })
    }
  };


  render() {

    //display spinner
    const handleAwait = (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size="large" color={CAMPFIRE_SECONDARY}/>
        </View>
    );

    //display error
    const handleError = (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color: 'red', fontWeight: '700'}}>AN ERROR OCCURRED</Text>
        </View>
    );

    //display pressable button
    const activeButton = (
      <View style={loginFlowStyles.twoButtonWidth}>
        <Button
            title="Sign In"
            buttonStyle={[buttons.mainButton, buttons.learnMoreMinimalistInverseButton]}
            titleStyle={text.learnMoreInverseMinimalistButtonText}
            onPress={this.handleSubmit}
        />
      </View>
    );

    //display disabled button
    const inactiveButton = (
      <View style={loginFlowStyles.twoButtonWidth}>
        <Button
            title="Sign In"
            onPress={this.handleSubmit}
            disabled={true}
            disabledStyle={[buttons.mainButton, buttons.learnMoreMinimalistInverseButton, loginFlowStyles.disabledButton]}
            disabledTitleStyle={text.learnMoreInverseMinimalistButtonText}
        />
      </View>
    );

    return (
      <View style={loginFlowStyles.genericWhiteContainer}>

        <View style={loginFlowStyles.primaryContainer}>

          {/* HEADER */}
          <Divider style={loginFlowStyles.headingDivider} />
          <Text style={loginFlowStyles.mainTitle}>Login</Text>
          <Divider style={loginFlowStyles.mainContentDivider} />
          

          {/* INPUT CONTAINER */}
          <View style={loginFlowStyles.inputContainer}>

              <Text style={loginFlowStyles.inputTitle}>School Email</Text>
              <Divider style={loginFlowStyles.inputTitleDivider} />
              <TextInput
                style={loginFlowStyles.inputStyle}
                maxLength={40}
                placeholder="first.last@college.edu"
                placeholderTextColor="white"
                autoCapitalize="none"
                spellCheck={false}
                value={this.state.email}
                onChangeText={newEmail => this.setState({ email: newEmail })}
              />
              
              <Divider style={loginFlowStyles.inputDivider} />
              
              <Text style={loginFlowStyles.inputTitle}>Password</Text>
              <Divider style={loginFlowStyles.inputTitleDivider} />
                <TextInput
                  style={loginFlowStyles.inputStyle}
                  maxLength={35}
                  placeholder="Password"
                  placeholderTextColor="white"
                  autoCapitalize="none"
                  spellCheck={false}
                  value={this.state.schoolName}
                  secureTextEntry={true}
                  onChangeText={newPassword => this.setState({ password1: newPassword })}
              />

              <Divider style={loginFlowStyles.buttonDivider} />

              {/* BUTTON CONTAINER */}
              <View style={loginFlowStyles.twoButtonContainer}>

                {/* LEFT BUTTON */}
                <View style={loginFlowStyles.twoButtonWidth}>
                  <Button
                    title="Skip"
                    buttonStyle={[buttons.mainButton, buttons.learnMoreMinimalistButton]}
                    titleStyle={text.learnMoreMinimalistButtonText}
                    onPress={() => this.props.navigation.navigate('Drawer')}
                  />
                </View>

                {/* CONDITIONALLY RENDER RIGHT BUTTON */}
                {(this.state.password1 && this.state.email) ? activeButton : inactiveButton}

              </View>

              {/* ALERT OR SPINNER */}
              <Divider style={loginFlowStyles.alertDivider} />
              {this.state.processSubmit ? handleAwait : this.state.processSubmit == null ? null : handleError}

            </View>

          </View>

        </View>

    );
  }
}