import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import { Divider} from 'react-native-elements';
import articles from '../../constants/articles';
import BigCard from '../../components/bigCard';
import cardScreenStyles from './cardScreenStyles';
import adjustableStyleFunctions from '../../styles/adjustableStyleFunctions';
import { db } from '../../utils/firebase.js';

let itemsRef = db.ref('/Deals');

export default class CardScreen extends React.Component {
  

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

    render() {

      /* gets card key from route */
      const { element } = this.props.route.params;

      return (

        <View style={cardScreenStyles.cardScreenContainer}>


            {/* renders BigCard component with key */}
            <BigCard item={element}/>

        </View>

      );
    }
}



const styles = StyleSheet.create({

 
});

