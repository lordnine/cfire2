
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
import { db } from '../../utils/firebase';

var suggestedSchoolRef = db.collection("suggestedSchools");


export default class suggestedSchoolScreen extends React.Component {

  state = {
    schoolName: '',
    email: '',
    firstName: '',
    lastName: '',
    processSubmit: false
  };


  handleSubmit = () => {
    if(this.state.schoolName){
      suggestedSchoolRef.doc(this.state.schoolName).set({
        schoolName: this.state.schoolName,
        email: this.state.email,
        firstName: this.state.firstName,
        lastName: this.state.lastName
      });
      this.setState({schoolName: '', email: '', firstName: '', lastName: ''});
      this.setState({processSubmit: true});
    }
  };


  render() {
    const handleAwait = (
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color: 'darkcyan', fontWeight: '700'}}> SUBMITTED! </Text>
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
          {/* HEADER */}
          <View style={{alignItems: 'center'}}>
          <Divider style={adjustableStyleFunctions.transparentDivider('3%')} />
          <Text style={suggestedSchoolScreenStyles.mainTitle}>Help Us Grow</Text>
          <Divider style={adjustableStyleFunctions.transparentDivider('1.5%')} />
          </View> 

          <Divider style={adjustableStyleFunctions.transparentDivider('5%')}/>
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

            <Text style={suggestedSchoolScreenStyles.inputTitle}>School Name</Text>
            <Divider style={adjustableStyleFunctions.transparentDivider('1.5%')} />
              <TextInput
                style={suggestedSchoolScreenStyles.inputText}
                maxLength={35}
                placeholder="College University"
                placeholderTextColor="white"
                autoCapitalize="none"
                spellCheck={false}
                value={this.state.schoolName}
                onChangeText={newSchoolName => this.setState({ schoolName: newSchoolName })}
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
              <Divider style={adjustableStyleFunctions.transparentDivider('6.5%')} />
              {/* BUTTON CONTAINER */}
              <View style={suggestedSchoolScreenStyles.buttonContainer}>

                {/* LEFT BUTTON */}
                <View style={suggestedSchoolScreenStyles.buttonWidth}>
                  <Button
                    title="Skip"
                    buttonStyle={[buttons.mainButton, buttons.learnMoreMinimalistButton]}
                    titleStyle={text.learnMoreMinimalistButtonText}
                    onPress={() => this.props.navigation.navigate('Drawer')}
                  />
                </View>

                {/* RIGHT BUTTON */}
                <View style={suggestedSchoolScreenStyles.buttonWidth}>
                  <Button
                    title="Submit"
                    buttonStyle={[buttons.mainButton, buttons.learnMoreMinimalistInverseButton]}
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