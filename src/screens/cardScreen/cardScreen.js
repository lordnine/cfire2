import React from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';
import { Divider} from 'react-native-elements';
import articles from '../../constants/articles';
import BigCard from '../../components/bigCard';
import cardScreenStyles from './cardScreenStyles';
import adjustableStyleFunctions from '../../styles/adjustableStyleFunctions';
import { db } from '../../utils/firebase';

var dealRef = db.collection("deals");


export default class CardScreen extends React.Component {

  componentDidMount() {
    const { element } = this.props.route.params;
    var primaryDeal = dealRef.doc(element.toString())
    primaryDeal.get().then((doc) => {
    var dealBlurb = doc.data().dealBlurb;
    var dealText = doc.data().dealText;
    var address = doc.data().address;
    var categoryID = doc.data().categoryID;
    var storeName = doc.data().storeName
    this.setState({dealBlurb: dealBlurb, key: element, dealText: dealText, address: address, categoryID: categoryID, storeName: storeName });
    }
    ).catch((error) => {
      console.log("Error getting documents: ", error);
  });
  }

  state ={
    dealBlurb: '',
    key: '',
    dealText: '',
    address: '',
    categoryID: '',
    storeName: '',
  };

    render() {
      const { element } = this.props.route.params;
      /* gets card key from route */
      return (
        <View style={cardScreenStyles.cardScreenContainer}>

            {/* renders BigCard component with key */}
          <BigCard storeName={this.state.storeName} dealBlurb={this.state.dealBlurb} key={element} dealText={this.state.dealText} address={this.state.address} categoryID={this.state.categoryID} />

        </View>

      );
    }
}



const styles = StyleSheet.create({

 
});

