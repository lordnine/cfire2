
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

export default class suggestedSchoolScreen extends React.Component {

  state = {
    schoolName: '',
    email: '',
  };

  handleSuggestion = () => {
    // TODO: handle invalid emails, previously used emails here
    // TODO: password requirements

  }

  render() {
    return (
      <View style={styles.frameContainer}>
        <Divider style={adjustableStyleFunctions.transparentDivider('10%')} />
          <Image style={adjustableStyleFunctions.imgSize(40,40)}  resizeMode='contain' source={logo}/>

          <Text style={suggestedSchoolScreenStyles.campfireTitle}>Add a School</Text>

          <Divider style={adjustableStyleFunctions.transparentDivider('5%')} />
        <View style={styles.formContainer}>
          <View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Your School"
                placeholderTextColor="white"
                autoCapitalize="none"
                spellCheck={false}
                value={this.state.username}
                onChangeText={newUsername => this.setState({ username: newUsername })}
              />
              <Divider style={{ height: 10, backgroundColor: 'transparent' }} />
              <TextInput
                style={styles.input}
                placeholder="College Email"
                placeholderTextColor="white"
                autoCapitalize="none"
                spellCheck={false}
                value={this.state.email}
                onChangeText={newEmail => this.setState({ email: newEmail })}
              />
            </View>
            <Divider style={{ height: 25, backgroundColor: 'transparent' }} />

            <View style={suggestedSchoolScreenStyles.buttonContainer}>
            <View style={suggestedSchoolScreenStyles.buttonWidth}>
            <Button
              title="Submit"
              buttonStyle={[buttons.mainButton, buttons.minimalistButton]}
              titleStyle={text.minimalistButtonText}
              onPress={this.handleSuggestion}
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
    height: 500,
    justifyContent: 'space-around',
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