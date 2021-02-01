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


export default class WelcomeScreen extends React.Component {


    render() {
      return (
        <View style={containers.frameContainer}>

          {/* logo and spacing*/}
          <Divider style={adjustableStyleFunctions.transparentDivider('10%')} />
          <Image style={adjustableStyleFunctions.imgSize('13%','13%')}  resizeMode='contain' source={logo}/>

          <Text style={{fontSize: 24, fontWeight: '600', color: 'white'}}>campfire</Text>

          <Divider style={adjustableStyleFunctions.transparentDivider('5%')} />
          
          <View style={{height: '36%', width: 340}}>
          <ScrollView style={{backgroundColor: '#25284f', width: '100%', borderRadius: 4}} horizontal disableIntervalMomentum={true} showsHorizontalScrollIndicator={false}   scrollEventThrottle={200}
  decelerationRate="fast"
  pagingEnabled>
          <View style={{backgroundColor: '#25284f', height: '100%', width: 340, justifyContent: 'center', alignItems: 'center'}}>
 
            <Text style={{fontSize: 21, fontWeight: '600', color: 'white'}}>What's Up</Text>
            <Divider style={{height: '2%'}}></Divider>
            <Text style={{fontSize: 18, fontWeight: '500', color: 'white', textAlign: 'center', marginHorizontal: '4%'}}>Looking for great deals in your college town?</Text>

            

          </View>
          <View style={{backgroundColor: '#25284f', height: '100%', width: 340, justifyContent: 'center', alignItems: 'center'}}>
 
 <Text style={{fontSize: 21, fontWeight: '600', color: 'white'}}>Sign In</Text>
 <Divider style={{height: '3%'}}></Divider>
 <Text style={{fontSize: 18, fontWeight: '500', color: 'white', textAlign: 'center', marginHorizontal: '4%'}}>And get connected with local small businesses</Text>

 

</View>
          </ScrollView>
          </View>
          
          
          <Divider style={adjustableStyleFunctions.transparentDivider('2%')} />





          {/* Top Button */}
          <View style={{flexDirection: 'column', width: '96%', alignItems: 'space-between', justifyContent: 'space-between'}}>
         
         
          <Button
              title="Get Started"
              buttonStyle={[buttons.mainButton, buttons.inverseMinimalistButton]}
              titleStyle={text.inverseMinimalistButtonText}
              onPress={() => this.props.navigation.navigate('Drawer')}
            />

            <Divider style={adjustableStyleFunctions.transparentDivider('1.5%')}></Divider>




            <Button
              title="Learn More"
              buttonStyle={[buttons.mainButton, buttons.minimalistButton]}
              titleStyle={text.minimalistButtonText}
              onPress={() => this.props.navigation.navigate('Home')}
            />

          {/* Bottom button - reversed color */}

   
        </View>

        </View>
      );
    }
}

const styles = StyleSheet.create({


});

