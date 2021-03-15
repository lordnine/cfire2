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


export default class CardScreen extends React.Component {
  



    render() {

      /* gets card key from route */
      const { element } = this.props.route.params;

      return (

        <View style={cardScreenStyles.cardScreenContainer}>


            {/* renders BigCard component with key */}
          <Text>Big Card should go here</Text>

        </View>

      );
    }
}



const styles = StyleSheet.create({

 
});

