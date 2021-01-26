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

export default class CardScreen extends React.Component {
    static navigationOptions = {
      title: 'Campfire',
      header: null,
    };


    render() {

      /* gets card key from route */
      const { key } = this.props.route.params;

      return (

        <View style={cardScreenStyles.cardScreenContainer}>

            <Divider style={adjustableStyleFunctions.transparentDivider('0.5%')}/>

            {/* renders BigCard component with key */}
            <BigCard item={articles[key]}/>

        </View>

      );
    }
}



const styles = StyleSheet.create({

 
});

