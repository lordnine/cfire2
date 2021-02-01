import React from 'react';
import { StyleSheet, Image, TouchableWithoutFeedback, View, Text } from 'react-native';
import { Divider } from 'react-native-elements';
import bigCardStyles from './bigCardStyles';
import adjustableStyleFunctions from '../../styles/adjustableStyleFunctions';
import burgerlogo from '../../assets/images/burgerlogo.png';
import shoppinglogo from '../../assets/images/shoppinglogo.png';
import supplieslogo from '../../assets/images/supplieslogo.png';
import scissorslogo from '../../assets/images/scissorslogo.png';
import locationlogo from '../../assets/images/locationlogo.png';
 
class BigCard extends React.Component {
    render() {
        const { item } = this.props;

        const crdContainer = [bigCardStyles.card, bigCardStyles.shadow];
        const touchableContainer = [bigCardStyles.wrappedContainer, bigCardStyles.cardStyles]
        const categoryLogo = [burgerlogo, shoppinglogo, supplieslogo, scissorslogo];

        return (
            <View style={crdContainer}>
                <TouchableWithoutFeedback>

                  <View style={touchableContainer}>

                  {/* Render company image at the top of the card */}
                    <View style={bigCardStyles.imageContainer}> 
                        <Image source={item.img} style={bigCardStyles.imageResizeContainer} resizeMode='cover' />     
                    </View>

                    <Divider style={adjustableStyleFunctions.transparentDivider('1%')}/>

                    
                   
                   {/* Deal Description */}
                    <View style={bigCardStyles.bigCardContainer}>
                    <View style={{justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
                    <Text style={bigCardStyles.companyTitle}>{item.companyName} </Text> 
                    <Image source={categoryLogo[item.category]} resizeMode='contain' style={{tintColor: 'black', width: 15, height: 15}}/></View>
                      
                    <View style={{justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
                    <Image source={locationlogo} resizeMode='contain' style={{tintColor: 'cornflowerblue', height: 11, width: 11}}  />
                      <Text numberOfLines={1} style={bigCardStyles.description}><Text  style={bigCardStyles.locationTitle}>Address: {item.address}</Text></Text> 
                      </View>
                      <Divider style={{height: 10}}/>
                      <Text style={bigCardStyles.description}><Text style={bigCardStyles.subTitle}>Deal: </Text>{item.title}</Text>
                      <Text style={bigCardStyles.description}><Text style={bigCardStyles.subTitle}>Code: </Text>This page or a valid Student ID</Text>
                    </View>
                    
                    
                  </View>

                </TouchableWithoutFeedback>
            </View>
        );
    }
}






const styles = StyleSheet.create({

  });


  export default BigCard;