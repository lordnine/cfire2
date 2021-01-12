import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
} from 'react-native';
import Card from '../../components/card';
import articles from '../../constants/articles';
import homeStyles from './homeStyles';

export default class HomeScreen extends React.Component {

  /*

  * I think this is an old version of react - previously could take out top navigator

  static navigationOptions = ({navigation}) => {
    return{
    headerStyle: {
      backgroundColor: '#000437',
      height: 64,
      shadowColor: '#000437',
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 4,
      shadowOpacity: 0.15,
      elevation: 3,
    },
    headerTitle: (
      <Image source={require('../../assets/images/logo.png')} style={{height: 36, width: 36, paddingBottom: 8}} resizeMode='contain'/>
      ),
      headerLeft: <Button title='back' style={{ paddingLeft: 15}} onPress={() => navigation.goBack()}>
      </Button>,
    };
  };

  */


    /* Render function for the flat list  */
    renderArticles = ({item, index}) => {
      return (
        <View style={homeStyles.articleContainer}>
          <Card item={item} navigation={this.props.navigation}/>
        </View>
      );
    }


  /*  

    * For adjusting UI if necessary adds (vertically) space between cards
    * Must add a seperator function to the flatlist
  
    renderSeparator = () => { 
      return(
        <View style={{backgroundColor: 'red', height: 0}}/>
      );
    }     
  */

    render() {
      return(
        
        <View style={homeStyles.listContainer}>
     

       {/* Render the cards in a list */}  
        <FlatList
          data={articles}
          numColumns={2}
          renderItem={this.renderArticles}
          style={{}}
          >
        </FlatList>

        </View>
        
      );
    }
}


const styles = StyleSheet.create({

});

