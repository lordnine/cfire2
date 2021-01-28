import React from 'react';
import { 
  StyleSheet,  
  TouchableWithoutFeedback, 
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
              <TouchableOpacity style={{height: '100%'}} onPress={() => this.props.navigation.navigate('Card', { key: item.key})}>
                <View style={[imgContainer, backgroundStyles]}>
                  <View style={{width: '100%', height:'94%', alignItems:'center', justifyContent: 'center', position: 'absolute'}}>
                    <Text style={colorStyles}>{item.companyName}</Text>
                  </View>

                  <View style={{width: '100%', height:'100%', alignItems:'flex-start', justifyContent: 'flex-end', position: 'absolute'}}>
                    <Text style={{color: 'white', marginLeft: '4.5%', fontSize: 12, fontWeight: '600', marginBottom: '4%'}}>{item.deal}</Text>
                  </View>

                  <View style={{width: '100%', height:'100%', alignItems:'flex-end', justifyContent: 'flex-start', position: 'absolute'}}>
                    <Text style={{color: 'white', marginRight: '4.5%', fontSize: 12, fontWeight: '600', marginTop: '4%'}}>{item.date}d</Text>
                  </View>

                  <View style={{width: '100%', height: '100%', justifyContent: 'flex-start', alignItems: 'center' , position: 'absolute'}} onPress={() => this.props.navigation.navigate('Card', { key: item.key})}>
                    <Image style={{height: '9%', flexWrap: 'nowrap', marginTop: '4%', marginRight: '84%'}}source={categoryLogo[item.category]} resizeMode='contain'></Image>
                  </View>

                  <TouchableOpacity style={{width: '100%', height: '100%', justifyContent: 'flex-end', alignItems: 'center' , position: 'absolute'}} onPress={() => this.props.navigation.navigate('Card', { key: item.key})}>
                    <Image style={{height: '12%', flexWrap: 'nowrap', marginBottom: '4.5%', marginLeft: '80%'}}source={qrlogo} resizeMode='contain'></Image>
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