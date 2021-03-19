
import React from 'react';
import {
  Text,
  View,
  TextInput,
  ActivityIndicator
} from 'react-native';
import {
  Button, Divider,
} from 'react-native-elements';
import suggestedSchoolScreenStyles from './suggestedSchoolScreenStyles';
import buttons from '../../styles/buttons';
import text from '../../styles/text';
import adjustableStyleFunctions from '../../styles/adjustableStyleFunctions';
import { auth } from '../../utils/firebase';
import loginFlowStyles from '../../styles/loginFlowStyles';



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
        // ...
      })
      .catch((error) => {
        console.log("an error occurred");
        this.setState({processSubmit: false})
      })
    }
  };


  render() {
    const handleAwait = (
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
           <ActivityIndicator size="large" color='#a854Fd'/>
          </View>
    );

    const handleError = (
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
       <Text style={{color: 'red', fontWeight: '700'}}>AN ERROR OCCURRED</Text>
      </View>
);

    const activeButton = (
      <View style={suggestedSchoolScreenStyles.buttonWidth}>
        <Button
            title="Sign In"
            buttonStyle={[suggestedSchoolScreenStyles.button, buttons.learnMoreMinimalistInverseButton]}
            titleStyle={text.learnMoreInverseMinimalistButtonText}
            onPress={this.handleSubmit}
        />
      </View>
    );

    const inactiveButton = (
      <View style={suggestedSchoolScreenStyles.buttonWidth}>
        <Button
            title="Sign In"
            buttonStyle={[suggestedSchoolScreenStyles.button, buttons.learnMoreMinimalistInverseButton]}
            titleStyle={text.learnMoreInverseMinimalistButtonText}
            onPress={this.handleSubmit}
            disabled={true}
            disabledStyle={[suggestedSchoolScreenStyles.button, buttons.learnMoreMinimalistInverseButton, {opacity: .55}]}
            disabledTitleStyle={text.learnMoreInverseMinimalistButtonText}
        />
      </View>
    );

    return (
      <View style={loginFlowStyles.genericWhiteContainer}>

          {/* INPUT CONTAINER AND BUTTONS */}
          <View style={loginFlowStyles.primaryContainer}>
          <Divider style={adjustableStyleFunctions.transparentDivider('8%')} />
          {/* HEADER */}
          <Text style={suggestedSchoolScreenStyles.mainTitle}>Login</Text>
          <Divider style={adjustableStyleFunctions.transparentDivider('6%')} />
          
          <View style={loginFlowStyles.inputContainer}>
            {/* SCHOOL NAME INPUT */}
              {/* SCHOOL EMAIL */}
              <Text style={loginFlowStyles.inputTitle}>School Email</Text>
              <Divider style={adjustableStyleFunctions.transparentDivider('1.5%')} />
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
              
              <Divider style={adjustableStyleFunctions.transparentDivider('4%')} />
              
              <Text style={loginFlowStyles.inputTitle}>Password</Text>
              <Divider style={adjustableStyleFunctions.transparentDivider('1.5%')} />
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


              <Divider style={adjustableStyleFunctions.transparentDivider('6.5%')} />
              {/* BUTTON CONTAINER */}
              <View style={loginFlowStyles.twoButtonContainer}>

                {/* LEFT BUTTON */}
                <View style={loginFlowStyles.twoButtonWidth}>
                  <Button
                    title="Skip"
                    buttonStyle={[suggestedSchoolScreenStyles.button, buttons.learnMoreMinimalistButton]}
                    titleStyle={text.learnMoreMinimalistButtonText}
                    onPress={() => this.props.navigation.navigate('Drawer')}
                  />
                </View>

                {/* RIGHT BUTTON */}
                {(this.state.password1 && this.state.email) ? activeButton : inactiveButton}

              </View>
              <Divider style={adjustableStyleFunctions.transparentDivider('3.5%')} />
                      {this.state.processSubmit ? handleAwait : this.state.processSubmit == null ? null : handleError}
              </View>
          </View>

        </View>

    );
  }
}