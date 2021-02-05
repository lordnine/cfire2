import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
} from 'react-native';
import CategoryCard from '../../components/categoryCard';
import categories from '../../constants/categories';
import articles from '../../constants/articles';
import categoryScreenStyles from './categoryScreenStyles';
import { SearchBar } from 'react-native-elements';
import Card from '../../components/card';


export default class CategoryScreen extends React.Component {

  state = { 
    search: '',
    data: categories,
    filteredData: [],
  };

  updateSearch = (search) => {
    this.setState({ search });

    let filteredData = this.filterList(this.state.data)

    this.setState({filteredData: filteredData});
  };

  filterList(list) {
    return list.filter(
      (listItem) => 
          listItem.name
            .toLowerCase()
            .includes(this.state.search.toLowerCase())
    );
  }


  renderArticles = ({item, index}) => {
    return (
      <View style={categoryScreenStyles.articleContainer}>
        <CategoryCard item={item} navigation={this.props.navigation}/>
      </View>
    );
  }


  render() {
    const { search } = this.state;
    return(
      
      <View style={{height: '100%', width: '100%'}}>
        <SearchBar 
          inputStyle={{backgroundColor: 'black'}}
          searchIcon={{ size: 24 }}
          containerStyle={{backgroundColor: 'white', width: '100%', borderRadius: 10}}
          placeholder='Type here...'
          onChangeText={this.updateSearch}
          value={search}
        />

      <View style={categoryScreenStyles.listContainer}>
    <FlatList
        data={(this.state.filteredData.length > 0 ? this.state.filteredData : this.state.data)}
        numColumns={2}
        renderItem={this.renderArticles}
        >
    </FlatList>



     {/* Render the cards in a list */}  
      <FlatList
        data={categories}
        numColumns={2}
        renderItem={this.renderArticles}
        >
      </FlatList>
      {/*   {this.filterList(articles).map((item, key) => (
            <View style={categoryScreenStyles.articleContainer}>
                <Card item={item} navigation={this.props.navigation}/>
            </View>
        ))}

        */}
      </View>
      </View>
    );
  }
}



const styles = StyleSheet.create({

 
});