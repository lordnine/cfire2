
import React from 'react';
import {
  Text,
  View,
  TextInput,
  Image
} from 'react-native';
import {
  Button, Divider,
} from 'react-native-elements';
import logo from '../../assets/images/logo.png';
import suggestedSchoolScreenStyles from './suggestedSchoolScreenStyles';
import buttons from '../../styles/buttons';
import text from '../../styles/text';
import adjustableStyleFunctions from '../../styles/adjustableStyleFunctions';
import { auth } from '../../utils/firebase';



export default class CreateAccountScreen extends React.Component {

  state = {
    password1: '',
    password2: '',
    email: '',
    firstName: '',
    lastName:'',
    processSubmit: false
  };


  handleSubmit = () => {
    if(this.state.password1 == this.state.password2){
      const email = this.state.email;
      const password = this.state.password1;
      auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
      this.setState({password1 : '', password2: '', email: '', firstName: '', lastName: ''});
      this.setState({processSubmit: true});
    }
  };


  render() {
    const handleAwait = (
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color: 'darkcyan', fontWeight: '700'}}> ADDED! </Text>
          </View>
    );
    return (
      <View style={[suggestedSchoolScreenStyles.genericGreyContainer, {justifyContent: 'center'}]}>

          {/* LOGO */}
       {/*   <Divider style={adjustableStyleFunctions.transparentDivider('5%')} />
          <Image style={[adjustableStyleFunctions.imgSize('8%','10%'), {tintColor: '#8426E6'}]}  
          resizeMode='contain' 
          source={logo}/>
          
          <Divider style={adjustableStyleFunctions.transparentDivider('3%')} />
*/} 
          {/* INPUT CONTAINER AND BUTTONS */}
          <View style={[suggestedSchoolScreenStyles.inputContainer,{height: '90%', justifyContent: 'flex-start', alignItems: 'center'}]}>

          <Divider style={adjustableStyleFunctions.transparentDivider('3%')} />
          <Image style={[adjustableStyleFunctions.imgSize('10%','10%'), {tintColor: '#8426E6'}]}  
          resizeMode='contain' 
          source={logo}/>
          {/* HEADER */}
          <View style={{alignItems: 'center'}}>
          <Divider style={adjustableStyleFunctions.transparentDivider('3%')} />
          <Text style={suggestedSchoolScreenStyles.mainTitle}>Create an Account</Text>
          <Divider style={adjustableStyleFunctions.transparentDivider('1.5%')} />
          </View> 

          <Divider style={adjustableStyleFunctions.transparentDivider('1%')}/>
          <View style={{height: '78%'}}>
            {/* SCHOOL NAME INPUT */}
            <Text style={suggestedSchoolScreenStyles.inputTitle}>First Name</Text>
            <Divider style={adjustableStyleFunctions.transparentDivider('1.5%')} />
            <TextInput
                style={suggestedSchoolScreenStyles.inputText}
                maxLength={35}
                placeholder="First"
                placeholderTextColor="white"
                autoCapitalize="none"
                spellCheck={false}
                value={this.state.firstName}
                onChangeText={newFirstName => this.setState({ firstName: newFirstName })}
            />

              <Divider style={adjustableStyleFunctions.transparentDivider('4%')} />

            <Text style={suggestedSchoolScreenStyles.inputTitle}>Last Name</Text>
            <Divider style={adjustableStyleFunctions.transparentDivider('1.5%')} />
            <TextInput
                style={suggestedSchoolScreenStyles.inputText}
                maxLength={35}
                placeholder="Last"
                placeholderTextColor="white"
                autoCapitalize="none"
                spellCheck={false}
                value={this.state.lastName}
                onChangeText={newLastName => this.setState({ lastName: newLastName })}
            />

              <Divider style={adjustableStyleFunctions.transparentDivider('4%')} />
              
              {/* SCHOOL EMAIL */}
              <Text style={suggestedSchoolScreenStyles.inputTitle}>School Email</Text>
              <Divider style={adjustableStyleFunctions.transparentDivider('1.5%')} />
              <TextInput
                style={suggestedSchoolScreenStyles.inputText}
                maxLength={40}
                placeholder="first.last@college.edu"
                placeholderTextColor="white"
                autoCapitalize="none"
                spellCheck={false}
                value={this.state.email}
                onChangeText={newEmail => this.setState({ email: newEmail })}
              />


<Divider style={adjustableStyleFunctions.transparentDivider('4%')} />

<Text style={suggestedSchoolScreenStyles.inputTitle}>Password</Text>
<Divider style={adjustableStyleFunctions.transparentDivider('1.5%')} />
  <TextInput
    style={suggestedSchoolScreenStyles.inputText}
    maxLength={35}
    placeholder="Password"
    placeholderTextColor="white"
    autoCapitalize="none"
    spellCheck={false}
    value={this.state.schoolName}
    secureTextEntry={true}
    onChangeText={newPassword => this.setState({ password1: newPassword })}
/>



<Divider style={adjustableStyleFunctions.transparentDivider('4%')} />

<Text style={suggestedSchoolScreenStyles.inputTitle}>Re-Enter Password</Text>
<Divider style={adjustableStyleFunctions.transparentDivider('1.5%')} />
  <TextInput
    style={suggestedSchoolScreenStyles.inputText}
    maxLength={35}
    placeholder="Password"
    placeholderTextColor="white"
    autoCapitalize="none"
    spellCheck={false}
    value={this.state.schoolName}
    secureTextEntry={true}
    onChangeText={newPassword => this.setState({ password2: newPassword })}
/>



              <Divider style={adjustableStyleFunctions.transparentDivider('6.5%')} />
              {/* BUTTON CONTAINER */}
              <View style={suggestedSchoolScreenStyles.buttonContainer}>

                {/* LEFT BUTTON */}
                <View style={suggestedSchoolScreenStyles.buttonWidth}>
                  <Button
                    title="Get Started"
                    buttonStyle={[suggestedSchoolScreenStyles.button, buttons.learnMoreMinimalistButton]}
                    titleStyle={text.learnMoreMinimalistButtonText}
                    onPress={() => this.props.navigation.navigate('Login')}
                  />
                </View>

                {/* RIGHT BUTTON */}
                <View style={suggestedSchoolScreenStyles.buttonWidth}>
                  <Button
                    title="Submit"
                    buttonStyle={[suggestedSchoolScreenStyles.button, buttons.learnMoreMinimalistInverseButton]}
                    titleStyle={text.learnMoreInverseMinimalistButtonText}
                    onPress={this.handleSubmit}
                  />
                </View>

              </View>
              <Divider style={adjustableStyleFunctions.transparentDivider('3.5%')} />
                      {this.state.processSubmit ? handleAwait : null}
              </View>

          </View>

        </View>

    );
  }
}