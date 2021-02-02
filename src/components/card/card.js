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
        const { navigation, item, horizontal, full, style, ctaColor, imageStyle, food, key} = this.props;

        const crdContainer = [cardStyles.card, cardStyles.shadow];
        const imgContainer = [cardStyles.imageContainer,
            horizontal ? cardStyles.horizontalStyles : cardStyles.verticalStyles,
            cardStyles.shadow
        ];
        const backgroundStyles = [
          item.food ? cardStyles.foodBackground : cardStyles.regBackground,
        ];
        const colorStyles = [
          item.food ? cardStyles.foodStuff : cardStyles.regStuff,
        ];

        const categoryLogo = [burgerlogo, shoppinglogo, supplieslogo, scissorslogo];


        return (
            <View style={crdContainer}>

              {/* Top portion of the card - contains company name and color currently */}
              <TouchableOpacity style={cardStyles.touchableContainer} onPress={() => this.props.navigation.navigate('Card', { key: item.key})}>
                <View style={[imgContainer, backgroundStyles]}>
                  <View style={cardStyles.comapnyNameContainer}>
                    <Text style={colorStyles}>{item.companyName}</Text>
                  </View>

                  <View style={cardStyles.dealContainer}>
                    <Text style={cardStyles.dealText}>{item.deal}</Text>
                  </View>

                  <View style={cardStyles.dateContainer}>
                    <Text style={cardStyles.dateText}>{item.date}d</Text>
                  </View>

                  <View style={cardStyles.categoryContainer} onPress={() => this.props.navigation.navigate('Card', { key: item.key})}>
                    <Image style={cardStyles.categoryImage} source={categoryLogo[item.category]} resizeMode='contain'></Image>
                  </View>

                  <TouchableOpacity style={cardStyles.qrContainer} onPress={() => this.props.navigation.navigate('Card', { key: item.key})}>
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