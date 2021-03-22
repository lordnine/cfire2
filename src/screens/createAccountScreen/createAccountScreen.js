
import React from 'react';
import {
  Text,
  View,
  TextInput,
  Image
} from 'react-native';
import {
  Button, 
  Divider,
} from 'react-native-elements';


import createAccountScreenStyles from './createAccountScreenStyles';
import loginFlowStyles from '../../styles/commonScreenStyles/loginFlowStyles';
import buttons from '../../styles/buttons';
import text from '../../styles/text';

import { auth } from '../../utils/firebase';

export default class CreateAccountScreen extends React.Component {

  state = {
    password1: '',
    password2: '',
    email: '',
    processSubmit: null
  };


  handleSubmit = () => {
    if(this.state.password1 == this.state.password2){
      const email = this.state.email;
      const password = this.state.password1;
      auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        this.setState({processSubmit: true});
        this.props.navigation.navigate('Login');
        var user = userCredential.user;
        this.setState({password1 : '', email: ''});
      })
      .catch((error) => {
        this.setState({processSubmit: false});
      });
      this.setState({password1 : '', password2: '', email: ''});
    }
    else(
      this.setState({processSubmit: false})
    )
  };



  render() {
    const handleProcessed = (
          <View style={loginFlowStyles.alertContainer}>
          <Text style={loginFlowStyles.successText}> ADDED! </Text>
          </View>
    );

    const handleProblem = (
      <View style={loginFlowStyles.alertContainer}>
        <Text style={loginFlowStyles.errorText}> INVALID EMAIL OR PASSWORD </Text>
      </View>
    );

    const inactiveButton = (
      <View style={loginFlowStyles.buttonWidth}>
      <Button
        title="Sign up"
        onPress={this.handleSubmit}
        disabled={true}
        disabledStyle={[buttons.mainButton, buttons.learnMoreMinimalistInverseButton, loginFlowStyles.disabledButton]}
        disabledTitleStyle={text.learnMoreInverseMinimalistButtonText}
      />
    </View>

    );

    const activeButton = (
      <View style={loginFlowStyles.buttonWidth}>
      <Button
        title="Sign up"
        buttonStyle={[buttons.mainButton, buttons.learnMoreMinimalistInverseButton]}
        titleStyle={text.learnMoreInverseMinimalistButtonText}
        onPress={this.handleSubmit}
      />
    </View>

    );

    
    return (
      <View style={loginFlowStyles.genericWhiteContainer}>

        <View style={loginFlowStyles.primaryContainer}>

          {/* HEADER */}
          <Divider style={loginFlowStyles.headingDivider} />
          <Text style={loginFlowStyles.mainTitle}>Create Account</Text>
          <Divider style={loginFlowStyles.mainContentDivider} />

          {/* TEXT INPUTS AND BUTTONS */}
          <View style={loginFlowStyles.inputContainer}>

              {/* SCHOOL EMAIL */}
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

              {/* PASSWORD 1 */}
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

              <Divider style={loginFlowStyles.inputDivider} />

              {/* PASSWORD 2 */}
              <Text style={loginFlowStyles.inputTitle}>Confirm Password</Text>
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
                  onChangeText={newPassword => this.setState({ password2: newPassword })}
              />

              <Divider style={loginFlowStyles.buttonDivider} />


              {/* BUTTON CONTAINER */}
              <View style={loginFlowStyles.buttonContainer}>
                    {/* CONDITIONALLY RENDER SIGN UP BUTTON */}
                    {(this.state.password1 && this.state.password2 && this.state.email) ? activeButton : inactiveButton}
              </View>

              <View style={loginFlowStyles.buttonContainer}>
                <View style={loginFlowStyles.buttonWidth}>

                    {/* LOG IN BUTTON */}
                    <Button
                      title="Log in"
                      buttonStyle={[buttons.mainButton, buttons.learnMoreMinimalistButton, createAccountScreenStyles.loginButton]}
                      titleStyle={[text.learnMoreMinimalistButtonText, createAccountScreenStyles.loginButtonText]}
                      onPress={() => this.props.navigation.navigate('Login')}
                    />

                </View>
              </View>

              <Divider style={loginFlowStyles.alertDivider} />

                  {/* CONDITIONALLY RENDER ERROR OR SUCCESS */}
                  { this.state.processSubmit == null ? null : this.state.processSubmit ? handleProcessed : handleProblem}

            </View>

          </View>

      </View>

    );
  }
}