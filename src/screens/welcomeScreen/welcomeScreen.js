import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity
} from 'react-native';
import logo from '../../assets/images/logo.png';
import { Button, Divider} from 'react-native-elements';
import buttons from '../../styles/buttons';
import text from '../../styles/text';
import adjustableStyleFunctions from '../../styles/adjustableStyleFunctions';
import containers from '../../styles/containers';
import { ScrollView } from 'react-native-gesture-handler';
import welcomeScreenStyles from './welcomeScreenStyles.js';


export default class WelcomeScreen extends React.Component {


    render() {
      return (
        <View style={containers.frameContainer}>

          {/* logo and spacing*/}
          <Divider style={adjustableStyleFunctions.transparentDivider('10%')} />
          <Image style={adjustableStyleFunctions.imgSize('13%','13%')}  resizeMode='contain' source={logo}/>

          <Text style={welcomeScreenStyles.campfireTitle}>campfire</Text>

          <Divider style={adjustableStyleFunctions.transparentDivider('5%')} />
          
        <View style={welcomeScreenStyles.carouselContainer}>
           
          <ScrollView style={welcomeScreenStyles.carouselStyle} 
            horizontal 
            disableIntervalMomentum={true} 
            showsHorizontalScrollIndicator={false}   
            scrollEventThrottle={200}
            decelerationRate="fast"
            pagingEnabled>

              <View style={welcomeScreenStyles.carouselElement}>
                  <Text style={welcomeScreenStyles.elementTitle}>What's Up</Text>
                  <Divider style={adjustableStyleFunctions.transparentDivider('2%')} />
                  <Text style={welcomeScreenStyles.elementSubTitle}>Looking for great deals in your college town?</Text>
              </View>
          
          
              <View style={welcomeScreenStyles.carouselElement}>
                  <Text style={welcomeScreenStyles.elementTitle}>Sign In</Text>
                  <Divider style={adjustableStyleFunctions.transparentDivider('2%')} />
                  <Text style={welcomeScreenStyles.elementSubTitle}>And get connected with local small businesses</Text>
              </View>

          </ScrollView>

        </View>


          <Divider style={adjustableStyleFunctions.transparentDivider('2%')} />



          {/* Top Button */}
          <View style={welcomeScreenStyles.buttonContainer}>
         
              
          <View style={welcomeScreenStyles.buttonWidth}>
               <Button
                 title="Learn More"
                 buttonStyle={[buttons.mainButton, buttons.minimalistButton]}
                 titleStyle={text.minimalistButtonText}
                 onPress={() => this.props.navigation.navigate('Learn')}
                />
              </View>
              
              
              
              <View style={welcomeScreenStyles.buttonWidth}>
                <Button
                  title="Get Started"
                  buttonStyle={[buttons.mainButton, buttons.inverseMinimalistButton]}
                  titleStyle={text.inverseMinimalistButtonText}
                  onPress={() => this.props.navigation.navigate('Drawer')}
                />
              </View>




          {/* Bottom button - reversed color */}

   
          </View>

        </View>
      );
    }
}

const styles = StyleSheet.create({


});

