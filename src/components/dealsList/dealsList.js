import React from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';
import { db } from '../../utils/firebase';
import { FlatList } from 'react-native';

export default class DealsList extends React.Component {

  componentDidMount() {
    // storesRef.get()
    //   .then((querySnapshot) => {
    //     const storeData = [];
    //     querySnapshot.forEach((doc) => {
    //       storeData.push((doc.data().storeName));
    //       this.setState({ stores: storeData })
    //     });
    //     console.log(this.state.stores[0]);
    //   })
    //   .catch((error) => {
    //     console.log("Error getting documents: ", error);
    //   });
  }

  render() {
    return (
      <View>
        <Text>
          Deals
        </Text>
      </View>
    );
  }

}


