import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Button
} from 'react-native';
import Card from '../../components/card';
import articles from '../../constants/articles';
import specificCategoryScreenStyles from './specificCategoryScreenStyles';
import { db } from '../../utils/firebase';

export default class SpecificCategoryScreen extends React.Component {


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
    const { check } = this.props.route.params;

    db.collection("deals").where("categoryID", "==", check).get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {

          if(doc.exists){
            dealBlurb = doc.data().dealBlurb;
            time = doc.data().time;
            storeID = doc.data().storeID.toString();
            storeName = doc.data().storeName;
            categoryID = doc.data().categoryID;
            id = doc.data().key;
            temp.push({
              dealBlurb: dealBlurb,
              time: time,
              storeName: storeName,
              categoryID: categoryID,
              id: id
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
        <View style={specificCategoryScreenStyles.articleContainer}>
          <Card dealBlurb={item.dealBlurb} 
          time={item.time} storeName={item.storeName} 
          categoryID={item.categoryID} 
          navigation={this.props.navigation}
          id={item.id}
          />
        </View>
      );
    }

 


    render() {
      const {check} = this.props.route.params;
    
      return(
        
        <View style={specificCategoryScreenStyles.listContainer}>

          <FlatList
             data={this.state.items}
             numColumns={1}
             renderItem={this.renderArticles}
             showsVerticalScrollIndicator={false}
             keyExtractor={(item,index) => item.id}
             >
           </FlatList>

        </View>
        
      );
    }
}



const styles = StyleSheet.create({

});

