import React from 'react';
import { 
  StyleSheet,   
  View, 
  Text, 
  TouchableOpacity ,
  Image
} from 'react-native';
import cardStyles from './cardStyles';
import qrlogo from '../../assets/images/qr_code.png';
import burgerlogo from '../../assets/images/burgerlogo.png';
import shoppinglogo from '../../assets/images/shoppinglogo.png';
import supplieslogo from '../../assets/images/supplieslogo.png';
import scissorslogo from '../../assets/images/scissorslogo.png';
import sharelogo from '../../assets/images/sharelogo.png';



class Card extends React.Component {
    render() {

        const { navigation, dealBlurb, storeName, categoryID, key, time} = this.props;

        const categoryLogo = [burgerlogo, shoppinglogo, supplieslogo, scissorslogo];

        return (
            <View style={[cardStyles.card, cardStyles.shadow]}>
              <TouchableOpacity style={{height: '100%'}} onPress={() => this.props.navigation.navigate('Card', { element: this.props.id})}>

                <View style={cardStyles.wrappingContainer}>

                  <View style={cardStyles.barContainer}>

                    <View style={cardStyles.leftTopIconContainer} >
                        <Image style={cardStyles.cardIcon} source={categoryLogo[this.props.categoryID]} resizeMode='contain'></Image>
                    </View>

                    <View style={cardStyles.rightTopIconContainer}>
                        <Text style={cardStyles.dateText}>{this.props.time}d</Text>
                    </View>
                    
                  </View>


                  <View style={cardStyles.companyNameContainer}>
                    <Text style={cardStyles.companyNameText}>{this.props.storeName}</Text>
                    <Text style={cardStyles.dealText}>{this.props.dealBlurb}</Text>
                  </View>

                  <View style={cardStyles.barContainer}>

                    <View style={cardStyles.leftBottomIconContainer}>
                      <Image style={cardStyles.cardIcon} source={sharelogo} resizeMode='contain'></Image>
                    </View>

                    <View style={cardStyles.rightTopIconContainer}>
                      <TouchableOpacity style={cardStyles.qrTouchable} 
                      onPress={() => this.props.navigation.navigate('Card', { element: this.props.id})}>
                        <Image style={cardStyles.cardIcon}source={qrlogo} resizeMode='contain'></Image>   
                      </TouchableOpacity>
                    </View>


                  </View>

                </View>

              </TouchableOpacity>
            </View>
        );
    }
}






const styles = StyleSheet.create({
  });


  export default Card;