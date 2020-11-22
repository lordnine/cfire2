import React from 'react';
import {
  View,
  StyleSheet,
  FlatList
} from 'react-native';
import Card from '../components/Card';
import articles from '../constants/articles';
import { connect } from 'react-redux';


class HomeScreen extends React.Component {
    static navigationOptions = {
      title: 'Home',
    };

    renderArticles = ({item, index}) => {
      return (
        <View style={{width: '48%', padding: '0%', marginHorizontal: '1%'}}>
        <Card item={item} />
          </View>
      );
    }

    render() {
      return(
        <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', paddingHorizontal: '2%'}}>
          <FlatList
          data={articles}
          numColumns={2}
          renderItem={this.renderArticles}
          style={{}}
          >
          </FlatList>
        </View>
      );
    }
}



const styles = StyleSheet.create({

});


export default(HomeScreen);