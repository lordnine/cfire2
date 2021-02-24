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

  state = {
    carouselOne: true,
    carouselTwo: false,
  };


  handleScrollEnd = (data) => {
    if(data.nativeEvent.contentOffset.x > 0){
      this.setState({carouselTwo: true, carouselOne: false});
    }
    else{
      this.setState({carouselOne: true, carouselTwo: false});
    }
  };


    render() {
     const displayOne = (
        <View style={{flexDirection: 'row', paddingBottom: 6}}>
        <Text style={{fontSize: 50, fontWeight: '700', color: 'white'}}>.</Text>
        <Text style={{fontSize: 50, fontWeight: '700', color: '#526578'}}>.</Text>
        </View>
      );

      const displayTwo = (
        <View style={{flexDirection: 'row', paddingBottom: 6,}}>
        <Text style={{fontSize: 50, fontWeight: '700', color: '#526578'}}>.</Text>
        <Text style={{fontSize: 50, fontWeight: '700', color: 'white'}}>.</Text>
        </View>
      );
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
            pagingEnabled
            onMomentumScrollEnd={(data) => this.handleScrollEnd(data)}
            
            >

              <View style={welcomeScreenStyles.carouselElement}>
                  <Divider style={adjustableStyleFunctions.transparentDivider('20%')} />
                  <Text style={welcomeScreenStyles.elementTitle}>What's Up</Text>
                  <Divider style={adjustableStyleFunctions.transparentDivider('2%')} />
                  <Text style={welcomeScreenStyles.elementSubTitle}>Looking for great deals in your college town?</Text>
              </View>
          
          
              <View style={welcomeScreenStyles.carouselElement}>
                  <Divider style={adjustableStyleFunctions.transparentDivider('20%')} />
                  <Text style={welcomeScreenStyles.elementTitle}>Sign In</Text>
                  <Divider style={adjustableStyleFunctions.transparentDivider('2%')} />
                  <Text style={welcomeScreenStyles.elementSubTitle}>And get connected with local small businesses</Text>
              </View>

          </ScrollView>
          {this.state.carouselOne ? displayOne : displayTwo}
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

