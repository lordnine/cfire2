
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
    //firstName: '',
    //lastName:'',
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
      this.setState({password1 : '', password2: '', email: ''});
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
      <View style={[suggestedSchoolScreenStyles.genericGreyContainer, {width: '100%'}]}>

          {/* LOGO */}
       {/*   <Divider style={adjustableStyleFunctions.transparentDivider('5%')} />
          <Image style={[adjustableStyleFunctions.imgSize('8%','10%'), {tintColor: '#8426E6'}]}  
          resizeMode='contain' 
          source={logo}/>
          
          <Divider style={adjustableStyleFunctions.transparentDivider('3%')} />
*/} 
          {/* INPUT CONTAINER AND BUTTONS */}
          <View style={[suggestedSchoolScreenStyles.inputContainer,{height: '100%', justifyContent: 'flex-start', alignItems: 'center'}]}>

          <Divider style={adjustableStyleFunctions.transparentDivider('6%')} />
          {/* HEADER */}
          <View style={{alignItems: 'center'}}>
          <Divider style={adjustableStyleFunctions.transparentDivider('2%')} />
          <Text style={suggestedSchoolScreenStyles.mainTitle}>Create Account</Text>
          <Divider style={adjustableStyleFunctions.transparentDivider('5%')} />
          </View> 

          <Divider style={adjustableStyleFunctions.transparentDivider('1%')}/>
          <View style={{height: '78%'}}>

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

            <Text style={suggestedSchoolScreenStyles.inputTitle}>Confirm Password</Text>
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
                

                {/* RIGHT BUTTON */}
                <View style={[suggestedSchoolScreenStyles.buttonWidth, {alignItems: 'center'}]}>
                  <Button
                    title="Sign up"
                    buttonStyle={[suggestedSchoolScreenStyles.button, buttons.learnMoreMinimalistInverseButton, {borderRadius: 34, width: 160}]}
                    titleStyle={text.learnMoreInverseMinimalistButtonText}
                    onPress={this.handleSubmit}
                  />
                </View>

              </View>


              <View style={suggestedSchoolScreenStyles.buttonContainer}>


              <View style={[suggestedSchoolScreenStyles.buttonWidth]}>

                  <Button
                    title="Log in"
                    buttonStyle={[suggestedSchoolScreenStyles.button, buttons.learnMoreMinimalistButton, {borderColor: 'transparent'}]}
                    titleStyle={[text.learnMoreMinimalistButtonText, {color: 'black', fontSize: 16, textDecorationLine: 'underline'}]}
                    onPress={() => this.props.navigation.navigate('Login')}
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