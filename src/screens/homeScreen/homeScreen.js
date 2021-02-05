import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
} from 'react-native';
import Card from '../../components/card';
import articles from '../../constants/articles';
import homeScreenStyles from './homeScreenStyles';

export default class HomeScreen extends React.Component {


    /* Render function for the flat list  */
    renderArticles = ({item, index}) => {
      return (
        <View style={homeScreenStyles.articleContainer}>
          <Card item={item} navigation={this.props.navigation}/>
        </View>
      );
    }


    render() {
      return(
        
        <View style={homeScreenStyles.listContainer}>
     

       {/* Render the cards in a list */}  
        <FlatList
          data={articles}
          numColumns={1}
          renderItem={this.renderArticles}
          style={{}}
          keyExtractor={item => item.key.toString()}
          showsVerticalScrollIndicator={false}
          >
        </FlatList>

        </View>
        
      );
    }
}


const styles = StyleSheet.create({

});

