
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


//adds the information provided by user to suggestedSchools in DB
let addItem = (school, email) => {
    db.ref('/suggestedSchools').push({
        schoolName: school,
        email: email,
    });
  };


export default class suggestedSchoolScreen extends React.Component {

  state = {
    schoolName: '',
    email: '',
  };


  handleSubmit = () => {
      addItem(this.state.schoolName, this.state.email);
      this.state.schoolName = '';
      this.state.email = '';
  };

  render() {
    return (
      <View style={suggestedSchoolScreenStyles.genericGreyContainer}>

          {/* LOGO */}
          <Divider style={adjustableStyleFunctions.transparentDivider('5%')} />
          <Image style={[adjustableStyleFunctions.imgSize('8%','10%'), {tintColor: '#000437'}]}  
          resizeMode='contain' 
          source={logo}/>

          {/* HEADER */}
          <Divider style={adjustableStyleFunctions.transparentDivider('9.5%')} />
          <Text style={suggestedSchoolScreenStyles.mainTitle}>Help Us Grow</Text>
          <Divider style={adjustableStyleFunctions.transparentDivider('1.5%')} />
 

          {/* INPUT CONTAINER AND BUTTONS */}
          <View style={suggestedSchoolScreenStyles.inputContainer}>

            {/* SCHOOL NAME INPUT */}
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

              <Divider style={adjustableStyleFunctions.transparentDivider('7.5%')} />
              
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
              <Divider style={adjustableStyleFunctions.transparentDivider('10%')} />

              {/* BUTTON CONTAINER */}
              <View style={suggestedSchoolScreenStyles.buttonContainer}>

                {/* LEFT BUTTON */}
                <View style={suggestedSchoolScreenStyles.buttonWidth}>
                  <Button
                    title="Get Started"
                    buttonStyle={[suggestedSchoolScreenStyles.button, buttons.minimalistButton]}
                    titleStyle={text.minimalistButtonText}
                    onPress={() => this.props.navigation.navigate('Drawer')}
                  />
                </View>

                {/* RIGHT BUTTON */}
                <View style={suggestedSchoolScreenStyles.buttonWidth}>
                  <Button
                    title="Submit"
                    buttonStyle={[suggestedSchoolScreenStyles.button, buttons.inverseMinimalistButton]}
                    titleStyle={text.inverseMinimalistButtonText}
                    onPress={this.handleSubmit}
                  />
                </View>

              </View>

          </View>

        </View>

    );
  }
}