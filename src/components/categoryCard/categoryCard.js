import React from 'react';
import { 
  StyleSheet,   
  View, 
  Text, 
  TouchableOpacity ,
} from 'react-native';
import categoryCardStyles from './categoryCardStyles';





class CategoryCard extends React.Component {
    render() {
        const { item, name, key, disabled} = this.props;

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

          <TouchableOpacity disabled={disabled} style={categoryCardStyles.touchableContainer} onPress={() => this.props.navigation.navigate('Specific', { check: item.key})}>
            <View style={[imgContainer, {backgroundColor: item.color}]}>
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