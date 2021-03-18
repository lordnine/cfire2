

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

export default class LearnMoreScreen extends React.Component {

    // RENDER THE CATEGORIES
    renderCategories = ({item, index}) => {
        return (
          <View style={learnMoreScreenStyles.articleContainer}>
            <CategoryCard item={item} navigation={this.props.navigation} disabled={true}/>
          </View>
        );
      }

    render() {


      return (

        <View style={learnMoreScreenStyles.blueBackground}>
          <View style={learnMoreScreenStyles.whiteBackground}>
            <Divider style={adjustableStyleFunctions.transparentDivider('4%')} />
             <Divider style={adjustableStyleFunctions.transparentDivider('8%')} />
            <View style={learnMoreScreenStyles.bottomContent}>
              <Text style={learnMoreScreenStyles.mainTitle}> A New Way To Save </Text>
              <Divider style={adjustableStyleFunctions.transparentDivider('2%')} />
            {/* 
              <View style={learnMoreScreenStyles.flatListBackground}>
                <View style={learnMoreScreenStyles.flatListContainer}>
                  <FlatList
                    data={categories}
                    numColumns={2}
                    renderItem={this.renderCategories}
                    scrollEnabled={false}
                    >
                  </FlatList>
                </View>
              </View>
*/}

              <Divider style={adjustableStyleFunctions.transparentDivider('3%')}></Divider>

              <View style={learnMoreScreenStyles.textContainer}>
                <Text style={learnMoreScreenStyles.bodyText}>
                    Get connected with small businesses near your campus through exclusive offerings and limited time sales. Don't miss out on an opportunity to save some cash. The best part? It's free! Just sign up with your college email address and start saving today.
                </Text>
                <Divider style={adjustableStyleFunctions.transparentDivider('6%')}></Divider>
                <Text style={learnMoreScreenStyles.bodyText}>
                    Don't see your school on our list? Click the link below and we'll get in touch. And sorry for any delays - we're new to this.
                </Text>
              </View>

              <Divider style={adjustableStyleFunctions.transparentDivider('6%')}></Divider>
                <View style={learnMoreScreenStyles.buttonContainer}>
         
                    <View style={learnMoreScreenStyles.buttonWidth}>
                      <Button
                        title="New School"
                        buttonStyle={[buttons.mainButton, buttons.learnMoreMinimalistButton]}
                        titleStyle={text.learnMoreMinimalistButtonText}
                        onPress={() => this.props.navigation.navigate('SuggestedSchool')}
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