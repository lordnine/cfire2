import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
} from 'react-native';
import Card from '../../components/card';
import articles from '../../constants/articles';
import specificCategoryScreenStyles from './specificCategoryScreenStyles';

export default class SpecificCategoryScreen extends React.Component {


    
    /* Render function for the flat list  */
    renderArticles = ({item, index}, check) => {
      if(item.category==check){
        return (
          <View style={specificCategoryScreenStyles.articleContainer}>
            <Card item={item} navigation={this.props.navigation}/>
          </View>
        );
      }
    }



    render() {
      const { check } = this.props.route.params;
      return(
        
        <View style={specificCategoryScreenStyles.listContainer}>
     

       {/* Render the cards in a list */}  
        <FlatList
          data={articles}
          numColumns={2}
          renderItem={(item) => this.renderArticles(item, check)}
          style={{}}
          >
        </FlatList>

        </View>
        
      );
    }
}


const styles = StyleSheet.create({

});

