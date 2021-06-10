import React from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';
import { FlatList } from 'react-native';

export default class DealsList extends React.Component {

  renderDealCard = ({ item, index }) => {
    console.log(JSON.stringify(item));
    return (
      <Text>
        {item}
      </Text>
    )
  };

  render() {
    return (
      <View>
        <FlatList
          data={this.props.deals}
          renderItem={this.renderDealCard}
        />
      </View>
    );
  }
}


