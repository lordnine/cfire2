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



class Card extends React.Component {
    render() {
        const { navigation, dealBlurb, storeName, categoryID, key, time} = this.props;

        const crdContainer = [cardStyles.card, cardStyles.shadow];
        const imgContainer = [cardStyles.imageContainer, cardStyles.horizontalStyles, cardStyles.shadow
        ];
        const backgroundStyles = [ cardStyles.regBackground];
        const colorStyles = [cardStyles.regStuff];

        const categoryLogo = [burgerlogo, shoppinglogo, supplieslogo, scissorslogo];


        return (
            <View style={crdContainer}>

              {/* Top portion of the card - contains company name and color currently */}
              <TouchableOpacity style={cardStyles.touchableContainer} onPress={() => this.props.navigation.navigate('Card', { key: this.props.key})}>
                <View style={[imgContainer, backgroundStyles]}>
                  <View style={cardStyles.companyNameContainer}>
                    <Text style={colorStyles}>{this.props.storeName}</Text>
                  </View>

                  <View style={cardStyles.dealContainer}>
                    <Text style={cardStyles.dealText}>{this.props.dealBlurb}</Text>
                  </View>

                  <View style={cardStyles.dateContainer}>
                    <Text style={cardStyles.dateText}>{this.props.time}d</Text>
                  </View>

                  <View style={cardStyles.categoryContainer} onPress={() => this.props.navigation.navigate('Card', { key: item.key})}>
                    <Image style={cardStyles.categoryImage} source={categoryLogo[this.props.categoryID]} resizeMode='contain'></Image>
                  </View>

                  <TouchableOpacity style={cardStyles.qrContainer} onPress={() => this.props.navigation.navigate('Card', { element: item})}>
                    <Image style={cardStyles.qrImage}source={qrlogo} resizeMode='contain'></Image>
                  </TouchableOpacity>

                </View>
              </TouchableOpacity>

              {/* Bottom portion of card - contains description of deal */}
             
             {/* 
              <TouchableOpacity onPress = {() => this.props.navigation.navigate('Card',{ key: item.key })}>
                <View style={cardStyles.cardDescription}>
                    <Text numberOfLines={2} style={cardStyles.cardTitle}>{item.title}</Text>
                    <Text style={cardStyles.cardCTA}>{item.cta}</Text>
                </View>
              </TouchableOpacity>
            */}

            </View>
        );
    }
}






const styles = StyleSheet.create({
  });


  export default Card;