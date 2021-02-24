
import React from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image
} from 'react-native';
import {
  Button, Divider,
} from 'react-native-elements';
import logo from '../../assets/images/logo.png';
import containers from '../../styles/containers';
import suggestedSchoolScreenStyles from './suggestedSchoolScreenStyles';
import buttons from '../../styles/buttons';
import text from '../../styles/text';
import adjustableStyleFunctions from '../../styles/adjustableStyleFunctions';
import { db } from '../../utils/firebase';


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

  handleSuggestion = () => {
    // TODO: handle invalid emails, previously used emails here
    // TODO: password requirements

  }
  


    handleSubmit = () => {
        addItem(this.state.schoolName, this.state.email);
        this.state.schoolName = '';
        this.state.email = '';
    };

  render() {
    return (
      <View style={{width: '100%', height: '100%', backgroundColor: '#e6e6e6', alignItems: 'center', }}>
        <Divider style={adjustableStyleFunctions.transparentDivider('8%')} />
        <Image style={[adjustableStyleFunctions.imgSize('10%','10%'), {tintColor: '#000437', marginTop: '1%'}]}  resizeMode='contain' source={logo}/>
          <Divider style={adjustableStyleFunctions.transparentDivider('.5%')} />
          <Text style={suggestedSchoolScreenStyles.campfireTitle}>Help Us Grow</Text>
          <Divider style={adjustableStyleFunctions.transparentDivider('8%')} />

            
            
            
            <View style={suggestedSchoolScreenStyles.inputContainer}>
            <Text style={suggestedSchoolScreenStyles.inputTitle}>School Name</Text>
            <Divider style={{ height: 4, backgroundColor: 'transparent' }} />
              <TextInput
                style={[suggestedSchoolScreenStyles.inputText, {backgroundColor: '#25284f', height: 40, fontSize: 14, borderRadius: 4, paddingLeft: 10}]}
                maxLength={35}
                placeholder="College University"
                placeholderTextColor="white"
                autoCapitalize="none"
                spellCheck={false}
                value={this.state.schoolName}
                onChangeText={newSchoolName => this.setState({ schoolName: newSchoolName })}
              />
              <Divider style={{ height: 18, backgroundColor: 'transparent' }} />
              <Text style={suggestedSchoolScreenStyles.inputTitle}>School Email</Text>
              <Divider style={{ height: 4, backgroundColor: 'transparent' }} />
              <TextInput
                style={[suggestedSchoolScreenStyles.inputText, {backgroundColor: '#25284f', height: 40, fontSize: 14, borderRadius: 4, paddingLeft: 10}]}
                maxLength={40}
                placeholder="first.last@college.edu"
                placeholderTextColor="white"
                autoCapitalize="none"
                spellCheck={false}
                value={this.state.email}
                onChangeText={newEmail => this.setState({ email: newEmail })}
              />

              <Divider style={{ height: '10%', backgroundColor: 'transparent' }} />

        <View style={suggestedSchoolScreenStyles.buttonContainer}>
        <View style={suggestedSchoolScreenStyles.buttonWidth}>
            <Button
              title="Get Started"
              buttonStyle={[suggestedSchoolScreenStyles.button, buttons.minimalistButton]}
              titleStyle={text.minimalistButtonText}
              onPress={() => this.props.navigation.navigate('Drawer')}
            />
              </View>
            <View style={suggestedSchoolScreenStyles.buttonWidth}>
            <Button
              title="Submit"
              buttonStyle={[suggestedSchoolScreenStyles.button, buttons.inverseMinimalistButton]}
              titleStyle={text.inverseMinimalistButtonText}
              onPress={this.handleSubmit}
            />
            </View>
            {/* TODO: some kind of loading spinner... use redux or state if you're lazy */}

            </View>
        </View>








          </View>

    );
  }
}

/* const mapDispatchToProps = dispatch => ({
  createAccount: (email, password) => createUser(email, password),
});
*/


const styles = StyleSheet.create({
  frameContainer: containers.frameContainer,
  formContainer: {
    height: '40%',
    marginTop: '18%'
  },
  logoContainer: {
    height: 160,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  logo: {
    resizeMode: 'contain',
    height: 100,
  },
  input: text.minimalistButtonText,
  button: buttons.minimalistButton,
  textContainer: {
    alignItems: 'center',
  },
});


/*
export default connect(null, mapDispatchToProps)(suggestedSchoolScreen);
*/