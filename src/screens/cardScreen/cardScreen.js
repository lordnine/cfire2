import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import { Divider} from 'react-native-elements';
import articles from '../../constants/articles';
import BigCard from '../../components/bigCard';
import cardStyles from './cardStyles';
import customStyles from '../../styles/customStyles';

export default class CardScreen extends React.Component {
    static navigationOptions = {
      title: 'Campfire',
      header: null,
    };


    render() {

      const { key } = this.props.route.params;
      return (

        <View style={cardStyles.cardScreenContainer}>

            <Divider style={customStyles.transparentDivider('0.5%')}/>

            <BigCard item={articles[key]}/>

        </View>

      );
    }
}



const styles = StyleSheet.create({

 
});

