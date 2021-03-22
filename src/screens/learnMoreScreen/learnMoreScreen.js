

import React from 'react';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';
import { Divider, Button } from 'react-native-elements';

import loginFlowStyles from '../../styles/commonScreenStyles/loginFlowStyles';
import learnMoreScreenStyles from './learnMoreScreenStyles.js';
import buttons from '../../styles/buttons.js';
import text from '../../styles/text.js';


export default class LearnMoreScreen extends React.Component {


    render() {

      return (

          <View style={loginFlowStyles.genericWhiteContainer}>
            
            <View style={loginFlowStyles.primaryContainer}>
              
              {/* HEADING */}
              <Divider style={loginFlowStyles.headingDivider} />
              <Text style={loginFlowStyles.mainTitle}> A New Way To Save </Text>
              <Divider style={loginFlowStyles.mainContentDivider} />

              {/* MAIN TEXT */}
              <View style={loginFlowStyles.inputContainer}>

                <Text style={learnMoreScreenStyles.bodyText}>
                    Get connected with small businesses near your campus through exclusive offerings and limited time sales. Don't miss out on an opportunity to save some cash. The best part? It's free! Just sign up with your college email address and start saving today.
                </Text>

                <Divider style={loginFlowStyles.buttonDivider}/>

                <Text style={learnMoreScreenStyles.bodyText}>
                    Don't see your school on our list? Click the link below and we'll get in touch. And sorry for any delays - we're new to this.
                </Text>

                <Divider style={loginFlowStyles.buttonDivider}></Divider>

                {/* BUTTONS */}
                <View style={loginFlowStyles.twoButtonContainer}>
         
                    <View style={loginFlowStyles.twoButtonWidth}>
                      <Button
                        title="New School"
                        buttonStyle={[buttons.mainButton, buttons.learnMoreMinimalistButton]}
                        titleStyle={text.learnMoreMinimalistButtonText}
                        onPress={() => this.props.navigation.navigate('SuggestedSchool')}
                        />
                    </View>
          
                    <View style={loginFlowStyles.twoButtonWidth}>
                      <Button
                        title="Get Started"
                        buttonStyle={[buttons.mainButton, buttons.learnMoreMinimalistInverseButton]}
                        titleStyle={text.learnMoreInverseMinimalistButtonText}
                        onPress={() => this.props.navigation.navigate('CreateAccount')}
                        />
                    </View>

                </View>

              </View>

            </View>
            
          </View>

      );
    }
}



const styles = StyleSheet.create({

 
});