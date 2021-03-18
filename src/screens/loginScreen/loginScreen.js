
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



export default class LoginScreen extends React.Component {

  state = {
    password1: '',
    email: '',
    processSubmit: false
  };


  handleSubmit = () => {
    if(this.state.password1 && this.state.email){
      console.log('why hello there');
      const email = this.state.email;
      const password = this.state.password1;
      auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        this.setState({password1 : '', email: ''});
        this.setState({processSubmit: true});
        var user = userCredential.user;
        this.props.navigation.navigate('Drawer');
        // ...
      })
      .catch((error) => {
        console.log("an error occurred");
      })
      this.setState({password1 : '', email: ''});
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
          <Text style={suggestedSchoolScreenStyles.mainTitle}>Login</Text>
          <Divider style={adjustableStyleFunctions.transparentDivider('8.5%')} />
          </View> 

          <Divider style={adjustableStyleFunctions.transparentDivider('1%')}/>
          <View style={{height: '78%'}}>
            {/* SCHOOL NAME INPUT */}
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




              <Divider style={adjustableStyleFunctions.transparentDivider('6.5%')} />
              {/* BUTTON CONTAINER */}
              <View style={suggestedSchoolScreenStyles.buttonContainer}>

                {/* LEFT BUTTON */}
                <View style={suggestedSchoolScreenStyles.buttonWidth}>
                  <Button
                    title="Skip"
                    buttonStyle={[suggestedSchoolScreenStyles.button, buttons.learnMoreMinimalistButton]}
                    titleStyle={text.learnMoreMinimalistButtonText}
                    onPress={() => this.props.navigation.navigate('Drawer')}
                  />
                </View>

                {/* RIGHT BUTTON */}
                <View style={suggestedSchoolScreenStyles.buttonWidth}>
                  <Button
                    title="Sign In"
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