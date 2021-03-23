import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
} from 'react-native';
import logo from '../../assets/images/logo.png';
import { Button, Divider} from 'react-native-elements';
import buttons from '../../styles/buttons';
import text from '../../styles/text';
import adjustableStyleFunctions from '../../styles/adjustableStyleFunctions';
import containers from '../../styles/containers';
import { ScrollView } from 'react-native-gesture-handler';
import welcomeScreenStyles from './welcomeScreenStyles.js';
import CarouselElement from '../../components/carouselElement';
import Bullets from '../../components/bullets';


export default class WelcomeScreen extends React.Component {

    //sets the bullets to default colors 
    state = {
      carouselOne: 'white',
      carouselTwo: 'black',
    };

    //changes the color of the carousel bullets depending upon user input
    handleScrollEnd = (data) => {
      if(data.nativeEvent.contentOffset.x > 0){
        this.setState({carouselOne: 'black', carouselTwo: 'white'});
      }
      else{
        this.setState({carouselOne: 'white', carouselTwo: 'black'});
      }
    };

    render() {

    //renders the bullets that appear in the carousel
     const renderBullets = (
        <Bullets colorOne={this.state.carouselOne} colorTwo={this.state.carouselTwo}/>
      );

      return (

        <View style={containers.frameContainer}>

          {/* logo and spacing*/}
          <Divider style={adjustableStyleFunctions.transparentDivider('10%')} />
          <Image style={adjustableStyleFunctions.imgSize('13%','13%')}  resizeMode='contain' source={logo}/>
          <Text style={welcomeScreenStyles.campfireTitle}>campfire</Text>
          <Divider style={adjustableStyleFunctions.transparentDivider('5%')} />

        {/* Carousel */}  
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
                <CarouselElement elementTitle="What's Up" elementSubTitle='Looking for great deals in your college town?'/>
                <CarouselElement elementTitle="Sign In" elementSubTitle='And get connected with local businesses'/>
            </ScrollView>
            {renderBullets}
          </View>

          <Divider style={adjustableStyleFunctions.transparentDivider('2%')} />

          {/* BUTTONS */}
          <View style={welcomeScreenStyles.buttonContainer}>
    
          {/* LEFT BUTTON */}
            <View style={welcomeScreenStyles.buttonWidth}>
               <Button
                 title="Learn More"
                 buttonStyle={[buttons.mainButton, buttons.minimalistButton]}
                 titleStyle={text.minimalistButtonText}
                 onPress={() => this.props.navigation.navigate('Learn')}
                />
            </View>  

                {/* RIGHT BUTTON - REVERSED COLOR */}
            <View style={welcomeScreenStyles.buttonWidth}>
                <Button
                  title="Get Started"
                  buttonStyle={[buttons.mainButton, buttons.inverseMinimalistButton]}
                  titleStyle={text.inverseMinimalistButtonText}
                  onPress={() => this.props.navigation.navigate('CreateAccount')}
                />
            </View>
          
          </View>
        </View>

      );
    }
}

const styles = StyleSheet.create({


});

