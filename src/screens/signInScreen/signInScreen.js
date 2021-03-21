import React, { useContext } from 'react';
import {
  Button
} from 'react-native';
import { connect } from 'react-redux';
import { auth } from '../../utils/firebase.js'
import { setAuthed } from '../../actions/userActions'
const username = 'jacksonherrick8@gmail.com';
const password = 'admin1234';

class SignInScreen extends React.Component {
    
  buttonPress = () => {
    console.log("\n ***NEW BUTTON PRESS***")
    console.log(this.props.authed);
    this.props.setAuthed(true);
    console.log('BEEP');
    console.log(this.props.authed);
    auth.signInWithEmailAndPassword(username, password)
      .then(() => {
        console.log('logged in!');
      })
      .catch((error) => {
        console.log('login failed!');
      });
  }
  render() {
    return (
        <Button title="Press Me" onPress={this.buttonPress}></Button>
    );
  }
}

mapStateToProps = (state) => {
  console.log("SIGN IN SCREEN STATE:" + JSON.stringify(state));
  return {
    authed: state.user.authed
  };
};

const mapDispatchToProps = {
  setAuthed
};



export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);
