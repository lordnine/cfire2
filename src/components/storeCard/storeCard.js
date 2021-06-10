import React from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';
import { db } from '../../utils/firebase';
import { FlatList } from 'react-native';

// functional component that renders a store preview card in a list of stores
export default class StoreCard extends React.Component {

  navigateToStoreDealsList = () => {
    
  }

  render() {
    return (
      <View>
        <Text>
          {this.props.storeName}
        </Text>
      </View>
    );
  }

}


