import React from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';
import { db } from '../../utils/firebase';
import { FlatList } from 'react-native';
import DealsList from '../../components/dealsList/dealsList';

var dealsRef = db.collection("deals");

export default class StoresListScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deals: []
    };
  }

  componentDidMount() {
    dealsRef.get()
      .then((querySnapshot) => {
        const dealsData = [];
        querySnapshot.forEach((doc) => {
          dealsData.push((doc.data().dealText));
          this.setState({ deals: dealsData });
        });
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  }

  render() {
    return (
      <View>
        <DealsList
          navigation={this.props.navigation}
          deals={this.state.deals}
        />
      </View>
    );
  }

}


