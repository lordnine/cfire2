import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
} from 'react-native';
import CategoryCard from '../../components/categoryCard';
import categories from '../../constants/categories';
import categoryScreenStyles from './categoryScreenStyles';


export default class CategoryScreen extends React.Component {

  renderArticles = ({item, index}) => {
    return (
      <View style={categoryScreenStyles.articleContainer}>
        <CategoryCard item={item} navigation={this.props.navigation}/>
      </View>
    );
  }
  render() {
    return(
      
      <View style={categoryScreenStyles.listContainer}>
   

     {/* Render the cards in a list */}  
      <FlatList
        data={categories}
        numColumns={2}
        renderItem={this.renderArticles}
        >
      </FlatList>

      </View>
      
    );
  }
}



const styles = StyleSheet.create({

 
});