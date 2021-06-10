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
import { TouchableOpacity } from 'react-native';
import StoresList from '../../components/storesList';

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
        storeData.push((doc.data()));
        this.setState({stores: storeData})
      });
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
    });
  }

  render(){
    return (
      <StoresList
        navigation={this.props.navigation}
        stores={this.state.stores}
      />
    );
  }
}


