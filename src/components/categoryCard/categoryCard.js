import React from 'react';
import { 
  StyleSheet,   
  View, 
  Text, 
  TouchableOpacity ,
  Image
} from 'react-native';
import categoryCardStyles from './categoryCardStyles';
import qrlogo from '../../assets/images/qr_code.png';
import burgerlogo from '../../assets/images/burgerlogo.png';
import shoppinglogo from '../../assets/images/shoppinglogo.png';
import supplieslogo from '../../assets/images/supplieslogo.png';
import scissorslogo from '../../assets/images/scissorslogo.png';




class CategoryCard extends React.Component {
    render() {
        const { item, name, key} = this.props;

        const crdContainer = [categoryCardStyles.card, categoryCardStyles.shadow];
        const imgContainer = [categoryCardStyles.imageContainer,
          categoryCardStyles.horizontalStyles,
          categoryCardStyles.shadow
        ];
      const backgroundStyles = [
        categoryCardStyles.foodBackground
      ];
      const colorStyles = [
        categoryCardStyles.foodStuff
      ];


        return (
          <View style={crdContainer}>

          <TouchableOpacity style={categoryCardStyles.touchableContainer}>
            <View style={[imgContainer, backgroundStyles]}>
              <View style={categoryCardStyles.categoryNameContainer}>
                <Text style={colorStyles}>{item.name}</Text>
              </View>


            </View>
          </TouchableOpacity>


        </View>
        );
    }
}






const styles = StyleSheet.create({
  });


  export default CategoryCard;