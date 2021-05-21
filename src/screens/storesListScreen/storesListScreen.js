import React from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';
import { Divider } from 'react-native-elements';
import articles from '../../constants/articles';
import BigCard from '../../components/bigCard';
import adjustableStyleFunctions from '../../styles/adjustableStyleFunctions';
import { db } from '../../utils/firebase';
import { FlatList } from 'react-native';

var storesRef = db.collection("stores");

export default class StoresListScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      stores: []
    };
  }

  componentDidMount(){
    storesRef.get()
    .then((querySnapshot) => {
      const storeData = [];
      querySnapshot.forEach((doc) => {
        storeData.push((doc.data().storeName));
        this.setState({stores: storeData})
      });
      console.log(this.state.stores[0]);
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
    });
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.state.stores}
          renderItem={({item}) => <Text>{item}</Text>}
        />
      </View>
      
    );
  }

}


