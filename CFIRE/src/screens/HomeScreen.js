import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Image,
  ImagePropTypes,
} from 'react-native';
import Card from '../components/Card';
import articles from '../constants/articles';
import { connect } from 'react-redux';
import { CAMPFIRE_RED } from '../styles/colors.js';
import { Button } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

export default class HomeScreen extends React.Component {

  static navigationOptions = ({navigation}) => {
    return{
    headerStyle: {
      backgroundColor: '#000437',
      height: 64,
      shadowColor: '#000437',
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 4,
      shadowOpacity: 0.15,
      elevation: 3,
    },
    headerTitle: (
      <Image source={require('../assets/images/logo.png')} style={{height: 36, width: 36, paddingBottom: 8}} resizeMode='contain'/>
      ),
      headerLeft: <Button title='back' style={{ paddingLeft: 15}} onPress={() => navigation.goBack()}>
      </Button>,
      headerRight: <Button title='filter | sort' style={{fontColor: 'white', paddingRight: 15}} onPress={() => navigation.navigate('CreateAccount')}>
      </Button>,
    };
  };

    renderArticles = ({item, index}) => {
      return (
        <View style={{width: '48%', padding: '0%', marginHorizontal: '1%', marginBottom: '0%'}}>
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

