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
import imgArray from '../../constants/imgArray';

class BigCard extends React.Component {
    render() {
        const { id, storeName, categoryID, address, dealText, imgLink} = this.props;

        const crdContainer = [bigCardStyles.card, bigCardStyles.shadow];
        const touchableContainer = [bigCardStyles.wrappedContainer, bigCardStyles.cardStyles]
        const categoryLogo = [burgerlogo, shoppinglogo, supplieslogo, scissorslogo];

        return (
            <View style={crdContainer}>
                <TouchableWithoutFeedback>

                  <View style={touchableContainer}>

                  {/* Render company image at the top of the card */}
                    <View style={bigCardStyles.imageContainer}> 
                        <Image source={{uri: this.props.imgLink }} style={bigCardStyles.imageResizeContainer} resizeMode='cover' />     
                    </View>

                    <Divider style={adjustableStyleFunctions.transparentDivider('1%')}/>

                    
                   
                   {/* Deal Description */}
                    <View style={bigCardStyles.bigCardContainer}>
                  
                     <View style={bigCardStyles.titleContainer}>
                       <Text style={bigCardStyles.companyTitle}>{this.props.storeName} </Text> 
                        <Image source={categoryLogo[this.props.categoryID]} resizeMode='contain' style={bigCardStyles.categoryLogo}/>
                      </View>
                   
                      <View style={bigCardStyles.locationContainer}>
                        <Image source={locationlogo} resizeMode='contain' style={bigCardStyles.locationLogo}  />
                        <Text numberOfLines={1} style={bigCardStyles.description}><Text  style={bigCardStyles.locationTitle}>Address: {this.props.address}</Text></Text> 
                      </View>

                      <Divider style={adjustableStyleFunctions.transparentDivider('7%')}/>
                
                      <Text style={bigCardStyles.description}><Text style={bigCardStyles.subTitle}>Deal: </Text>{this.props.dealText}</Text>
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