
import React from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';
import {
  Button, Image, Divider,
} from 'react-native-elements';
import logo from '../../assets/images/logo.png';
import containers from '../../styles/containers';
import suggestedSchoolScreenStyles from './suggestedSchoolScreenStyles';
import buttons from '../../styles/buttons';
import text from '../../styles/text';
import adjustableStyleFunctions from '../../styles/adjustableStyleFunctions';
import { db } from '../../utils/firebase';
import { NativeAppEventEmitter } from 'react-native';


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
    };

  render() {
    return (
      <View style={styles.frameContainer}>
        <Divider style={adjustableStyleFunctions.transparentDivider('10%')} />
        <Image style={adjustableStyleFunctions.imgSize(40,40)}  resizeMode='contain' source={logo}/>
          <Divider style={adjustableStyleFunctions.transparentDivider('4%')} />
          <Text style={suggestedSchoolScreenStyles.campfireTitle}>Suggest Your School</Text>
          <Divider style={adjustableStyleFunctions.transparentDivider('4%')} />
        <View style={styles.formContainer}>
          <View>
            <View style={styles.inputContainer}>
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
              <Divider style={{ height: 12, backgroundColor: 'transparent' }} />
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
            </View>



            <Divider style={{ height: 25, backgroundColor: 'transparent' }} />



            <Divider style={adjustableStyleFunctions.transparentDivider('4%')} />
            <View style={suggestedSchoolScreenStyles.buttonContainer}>
            <View style={suggestedSchoolScreenStyles.buttonWidth}>
            <Button
              title="Submit"
              buttonStyle={[buttons.mainButton, buttons.minimalistButton]}
              titleStyle={text.minimalistButtonText}
              onPress={this.handleSubmit}
            />
            </View>
            {/* TODO: some kind of loading spinner... use redux or state if you're lazy */}
            <View style={suggestedSchoolScreenStyles.buttonWidth}>
            <Button
              title="Get Started"
              buttonStyle={[buttons.mainButton, buttons.inverseMinimalistButton]}
              titleStyle={text.inverseMinimalistButtonText}
              onPress={() => this.props.navigation.navigate('Drawer')}
            />
            </View>
            </View>





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