import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Image,
  ImagePropTypes,
} from 'react-native';
import Card from '../../components/card';
import articles from '../../constants/articles';
import { Button } from 'react-native-elements';

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
      <Image source={require('../../assets/images/logo.png')} style={{height: 36, width: 36, paddingBottom: 8}} resizeMode='contain'/>
      ),
      headerLeft: <Button title='back' style={{ paddingLeft: 15}} onPress={() => navigation.goBack()}>
      </Button>,
    };
  };

    renderArticles = ({item, index}) => {
      return (
        <View style={{width: '48%', padding: '0%', marginHorizontal: '1%', marginBottom: '0%'}}>
          <Card item={item} navigation={this.props.navigation}/>
        </View>
      );
    }

  /*  renderSeparator = () => { 
      return(
        <View style={{backgroundColor: 'red', height: 0}}/>
      );
    }     

*/

    render() {
      return(
        
        <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', paddingHorizontal: '2%'}}>
          <FlatList
          data={articles}
          numColumns={2}
     /*     ItemSeparatorComponent={this.renderSeparator}  */
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

