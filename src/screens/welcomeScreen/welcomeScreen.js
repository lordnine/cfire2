import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions
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
import loginFlowStyles from '../../styles/commonScreenStyles/loginFlowStyles';

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



<Divider style={adjustableStyleFunctions.transparentDivider('12%')} />


          <View style={[welcomeScreenStyles.carouselContainer, {width: Dimensions.get('window').width * .9}]}>
            <ScrollView style={welcomeScreenStyles.carouselStyle} 
              horizontal 
              disableIntervalMomentum={true} 
              showsHorizontalScrollIndicator={false}   
              scrollEventThrottle={200}
              decelerationRate="fast"
              pagingEnabled
              onMomentumScrollEnd={(data) => this.handleScrollEnd(data)}          
              >
                <CarouselElement elementTitle="College Student?" elementSubTitle='Join us and start saving today'
                width={Dimensions.get('window').width * .9}
                isCollege={true}
                />
                <CarouselElement elementTitle="Fire Sales" elementSubTitle='And deals in your college town'
                width={Dimensions.get('window').width * .9}
                isCollege={false}
                />
            </ScrollView>
            {renderBullets}

            <Divider style={adjustableStyleFunctions.transparentDivider('4%')} />
            <View style={[loginFlowStyles.twoButtonContainer,{width: '90%'}]}>

{/* LEFT BUTTON */}
<View style={loginFlowStyles.twoButtonWidth}>
  <Button
    title="Learn More"
    buttonStyle={[buttons.mainButton, buttons.minimalistButton]}
    titleStyle={text.minimalistButtonText}
    onPress={() => this.props.navigation.navigate('Learn')}
  />
</View>

{/* RIGHT BUTTON */}

<View style={loginFlowStyles.twoButtonWidth}>
  <Button
    title="Create Account"
    buttonStyle={[buttons.mainButton, buttons.inverseMinimalistButton]}
    titleStyle={text.inverseMinimalistButtonText}
    onPress={() => this.props.navigation.navigate('CreateAccount')}
  />
</View>



</View>

<Divider style={adjustableStyleFunctions.transparentDivider('4%')} />

          </View>

          <Divider style={adjustableStyleFunctions.transparentDivider('2%')} />

              <Divider style={adjustableStyleFunctions.transparentDivider('9%')}/>

          
          
        </View>

      );
    }
}

const styles = StyleSheet.create({


});

