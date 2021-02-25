import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
} from 'react-native';
import Card from '../../components/card';
import homeScreenStyles from './homeScreenStyles';
import { db } from '../../utils/firebase.js';


let itemsRef = db.ref('/Deals');

export default class HomeScreen extends React.Component {
  
  state = {
    items: []
  };
  componentDidMount() {
    itemsRef.on('value', snapshot => {
      let data = snapshot.val();
      let items = Object.values(data);
      this.setState({ items });
    });
  }
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
             data={this.state.items}
             numColumns={1}
             renderItem={this.renderArticles}
             showsVerticalScrollIndicator={false}
             keyExtractor={item => item.key.toString()}

         /*    data={articles}
             numColumns={1}
             renderItem={this.renderArticles}
             keyExtractor={item => item.key.toString()}
             showsVerticalScrollIndicator={false}

         */
             >
           </FlatList>

        </View>
        
      );
    }
}


const styles = StyleSheet.create({

});

