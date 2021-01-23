import React from 'react';
import { 
  StyleSheet,  
  TouchableWithoutFeedback, 
  View, 
  Text, 
  TouchableOpacity 
} from 'react-native';
import cardStyles from './cardStyles';



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


        return (
            <View style={crdContainer}>

              {/* Top portion of the card - contains company name and color currently */}
              <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Card', { key: item.key})}>
                <View flex style={[imgContainer, backgroundStyles]}>
                    <Text style={colorStyles}>{item.companyName}</Text>
                </View>
              </TouchableWithoutFeedback>

              {/* Bottom portion of card - contains description of deal */}
              <TouchableOpacity onPress = {() => this.props.navigation.navigate('Card',{ key: item.key })}>
                <View style={cardStyles.cardDescription}>
                    <Text numberOfLines={2} style={cardStyles.cardTitle}>{item.title}</Text>
                    <Text style={cardStyles.cardCTA}>{item.cta}</Text>
                </View>
              </TouchableOpacity>


            </View>
        );
    }
}






const styles = StyleSheet.create({
  });


  export default Card;