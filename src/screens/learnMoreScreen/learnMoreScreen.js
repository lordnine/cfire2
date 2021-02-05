

import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  FlatList
} from 'react-native';
import { Divider, Button } from 'react-native-elements';
import logo from '../../assets/images/logo.png';
import adjustableStyleFunctions from '../../styles/adjustableStyleFunctions';
import categories from '../../constants/categories.js';
import learnMoreScreenStyles from './learnMoreScreenStyles.js';
import CategoryCard from '../../components/categoryCard';
import buttons from '../../styles/buttons.js';
import text from '../../styles/text.js';
import pulldownbar from '../../assets/images/pulldownbar.png';

export default class LearnMoreScreen extends React.Component {






    renderArticles = ({item, index}) => {
        return (
          <View style={learnMoreScreenStyles.articleContainer}>
            <CategoryCard item={item} navigation={this.props.navigation} disabled={true}/>
          </View>
        );
      }

    render() {

      /* gets card key from route */

      return (
        <View style={{height: '100%', justifyContent: 'flex-end', backgroundColor: '#000437'}}>
        <View style={{width: '100%', height: '95%', backgroundColor: 'white', alignItems: 'center', borderRadius:12}}>
            <Image style={[adjustableStyleFunctions.imgSize('8%','10%'), {tintColor: '#000437', marginTop: '1%'}]}  resizeMode='contain' source={logo}/>
            <View style={{alignItems: 'center', height: '60%'}}>
            <Text style={{color: 'grey', fontSize: 26, fontWeight: '700'}}> A New Way To Save </Text>
            <Divider style={adjustableStyleFunctions.transparentDivider('2%')}></Divider>

            <View style={{width: '92%', height: '64%', backgroundColor:'#e6e6e6', borderRadius: 18}}>
                <View style={{marginHorizontal: '1.5%', marginVertical: '1%'}}>
                 <FlatList
                    data={categories}
                    numColumns={2}
                    renderItem={this.renderArticles}
                    scrollEnabled={false}
                 >
                </FlatList>
                </View>
            </View>
            <Divider style={adjustableStyleFunctions.transparentDivider('1.5%')}></Divider>
                <View style={{width: '90%', alignText: 'flex-start', marginTop: '3%'}}>
                    <Text style={{marginHorizontal: '2%', fontWeight: '600', fontSize: 15, textAlign:'justify'}}>
                        Get connected with small businesses near your campus through exclusive offerings and limited time sales. Don't miss out on an opportunity to save some cash. The best part? It's absolutely free to use! Just sign up with your college email address and start saving today.
                    </Text>
                    <Divider style={adjustableStyleFunctions.transparentDivider('8%')}></Divider>
                    <Text style={{marginLeft: '2%', fontWeight: '600', fontSize: 15, textAlign: 'justify'}}>
                        Don't see your school on our list? Click the link below and we'll get in touch. And sorry for any delays - we're new to this.
                    </Text>
                </View>
                <View style={learnMoreScreenStyles.buttonContainer}>
         
              
         <View style={learnMoreScreenStyles.buttonWidth}>
              <Button
                title="New School"
                buttonStyle={[buttons.mainButton, buttons.learnMoreMinimalistButton]}
                titleStyle={text.learnMoreMinimalistButtonText}
               />
             </View>
             
             
             
             <View style={learnMoreScreenStyles.buttonWidth}>
               <Button
                 title="Get Started"
                 buttonStyle={[buttons.mainButton, buttons.learnMoreMinimalistInverseButton]}
                 titleStyle={text.learnMoreInverseMinimalistButtonText}
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



const styles = StyleSheet.create({

 
});