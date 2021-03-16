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

        const crdContainer = [cardStyles.card, cardStyles.shadow];
        const imgContainer = [cardStyles.imageContainer, cardStyles.horizontalStyles, cardStyles.shadow
        ];
        const backgroundStyles = [ cardStyles.regBackground];

        const categoryLogo = [burgerlogo, shoppinglogo, supplieslogo, scissorslogo];

        const categoryColor = ['#485063', '#039be5', '#009688', '#ff99cc'];

        return (
            <View style={crdContainer}>

              {/* Top portion of the card - contains company name and color currently */}
              <TouchableOpacity style={cardStyles.touchableContainer} onPress={() => this.props.navigation.navigate('Card', { key: this.props.key})}>
                <View style={[imgContainer, backgroundStyles]}>
                  <View style={cardStyles.companyNameContainer}>
                    <Text style={cardStyles.companyNameText}>{this.props.storeName}</Text>
                    <Text style={cardStyles.dealText}>{this.props.dealBlurb}</Text>
                  </View>

                  <View style={cardStyles.dateContainer}>
                    <Text style={cardStyles.dateText}>{this.props.time}d</Text>
                  </View>

                  <View style={cardStyles.categoryContainer} onPress={() => this.props.navigation.navigate('Card', { key: this.props.key})}>
                    <Image style={[cardStyles.categoryImage, /*{tintColor: categoryColor[this.props.categoryID]}*/]} source={categoryLogo[this.props.categoryID]} resizeMode='contain'></Image>
                  </View>

                  <TouchableOpacity style={cardStyles.qrContainer} onPress={() => this.props.navigation.navigate('Card', { element: this.props.key})}>
                   {/*<Text style={cardStyles.qrImage}>QR</Text> */}
                    <Image style={cardStyles.qrImage}source={qrlogo} resizeMode='contain'></Image>   
                  </TouchableOpacity>

                  <View style={cardStyles.shareContainer}>
                    <Image style={{height: '100%', width: '100%', tintColor: `#8095ed`}} source={sharelogo} resizeMode='contain'></Image>
                  </View>

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