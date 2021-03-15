import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text
} from 'react-native';
import Card from '../../components/card';
import homeScreenStyles from './homeScreenStyles';
import { db } from '../../utils/firebase';

var dealRef = db.collection("deals");

export default class HomeScreen extends React.Component {
  
  state={
    items: []
  };
  componentDidMount() {
    var dealBlurb = '';
    var time = '';
    var storeID = '0';
    var storeName = '';
    var categoryID = '';
    var temp = [];
    var key = "1";

    db.collection("deals").get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {

          if(doc.exists){
            dealBlurb = doc.data().dealBlurb;
            time = doc.data().time;
            storeID = doc.data().storeID.toString();
            storeName = doc.data().storeName;
            categoryID = doc.data().categoryID;
            key = doc.data().key;
            temp.push({
              dealBlurb: dealBlurb,
              time: time,
              storeName: storeName,
              categoryID: categoryID,
              key: key
            });
            this.setState({items: temp});

          } 
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
  }
    /* Render function for the flat list  */
   
   
    renderArticles = ({item, index}) => {

    return (
        <View style={homeScreenStyles.articleContainer}>
          <Card dealBlurb={item.dealBlurb} 
          time={item.time} storeName={item.storeName} 
          categoryID={item.categoryID} 
          navigation={this.props.navigation}/>
        </View>
      );
    }

 


    render() {
    
      return(
        
        <View style={homeScreenStyles.listContainer}>

          <FlatList
             data={this.state.items}
             numColumns={1}
             renderItem={this.renderArticles}
             showsVerticalScrollIndicator={false}
             keyExtractor={(item,index) => item.key}
             >
           </FlatList>

        </View>
        
      );
    }
}


const styles = StyleSheet.create({

});

