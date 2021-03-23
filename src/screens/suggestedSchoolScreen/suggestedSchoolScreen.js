
import React from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import {
  Button, Divider,
} from 'react-native-elements';


import suggestedSchoolScreenStyles from './suggestedSchoolScreenStyles';
import loginFlowStyles from '../../styles/commonScreenStyles/loginFlowStyles';
import buttons from '../../styles/buttons';
import text from '../../styles/text';

import { db } from '../../utils/firebase';

var suggestedSchoolRef = db.collection("suggestedSchools");


export default class suggestedSchoolScreen extends React.Component {

  state = {
    schoolName: '',
    email: '',
    firstName: '',
    processSubmit: false,
    
  };


  handleSubmit = () => {
      suggestedSchoolRef.doc(this.state.schoolName).set({
        schoolName: this.state.schoolName,
        email: this.state.email,
        firstName: this.state.firstName,
      });
      this.setState({schoolName: '', email: '', firstName: ''});
      this.setState({processSubmit: true});
  };


  render() {
    const handleAwait = (
          <View style={loginFlowStyles.alertContainer}>
            <Text style={loginFlowStyles.successText}> WE'LL REACH OUT SOON! </Text>
          </View>
    );

    const activeButton = (
      <View style={loginFlowStyles.twoButtonWidth}>
        <Button
            title="Register"
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
            title="Register"
            onPress={this.handleSubmit}
            disabled={true}
            disabledStyle={[buttons.mainButton, buttons.learnMoreMinimalistInverseButton, loginFlowStyles.disabledButton]}
            disabledTitleStyle={text.learnMoreInverseMinimalistButtonText}
        />
      </View>
    );

    return (
      <View style={loginFlowStyles.genericWhiteContainer}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>


        <View style={loginFlowStyles.primaryContainer}>

          {/* HEADER */}
          <Divider style={loginFlowStyles.headingDivider} />
          <Text style={loginFlowStyles.mainTitle}>Help Us Grow</Text>
          <Divider style={loginFlowStyles.mainContentDivider} />

          {/* INPUT CONTAINER AND BUTTONS */}
          <View style={loginFlowStyles.inputContainer}>

            <Text style={loginFlowStyles.inputTitle}>First Name</Text>
            <Divider style={loginFlowStyles.inputTitleDivider} />
            <TextInput
                style={loginFlowStyles.inputStyle}
                maxLength={35}
                placeholder="First"
                placeholderTextColor="white"
                autoCapitalize="none"
                spellCheck={false}
                value={this.state.firstName}
                onChangeText={newFirstName => this.setState({ firstName: newFirstName })}
            />

            <Divider style={loginFlowStyles.inputDivider} />


            <Text style={loginFlowStyles.inputTitle}>School Name</Text>
            <Divider style={loginFlowStyles.inputTitleDivider} />
              <TextInput
                style={loginFlowStyles.inputStyle}
                maxLength={35}
                placeholder="College University"
                placeholderTextColor="white"
                autoCapitalize="none"
                spellCheck={false}
                value={this.state.schoolName}
                onChangeText={newSchoolName => this.setState({ schoolName: newSchoolName })}
            />

              <Divider style={loginFlowStyles.inputDivider} />
              
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
              <Divider style={loginFlowStyles.buttonDivider} />

              {/* BUTTON CONTAINER */}
              <View style={loginFlowStyles.twoButtonContainer}>

                {/* LEFT BUTTON */}
                <View style={loginFlowStyles.twoButtonWidth}>
                  <Button
                    title="School List"
                    buttonStyle={[buttons.mainButton, buttons.learnMoreMinimalistButton]}
                    titleStyle={text.learnMoreMinimalistButtonText}
                    onPress={() => this.props.navigation.navigate('CreateAccount')}
                  />
                </View>

                {/* RIGHT BUTTON */}
                {(this.state.firstName && this.state.schoolName && this.state.email) ? activeButton : inactiveButton}

              </View>
              <Divider style={loginFlowStyles.alertDivider} />
              {/* CONDITIONALLY RENDER UPON COMPLETION */}
              {this.state.processSubmit ? handleAwait : null}
            </View>
        
          </View>

          </TouchableWithoutFeedback>
        </View>

    );
  }
}