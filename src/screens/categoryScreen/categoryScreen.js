import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text
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
    data: articles,
    filteredData: [],
    noData: true,
    noResults: true,
  };

  updateSearch = (search) => {
    this.setState({ search });
    let tempData = this.filterList(search);
    search.length > 0 ? this.setState({noData: false}) : this.setState({noData: true});
    tempData.length > 0 ? this.setState({noResults: false}) : this.setState({noResults: true});
    this.setState({filteredData: tempData});
  };

  filterList (search) {
    return articles.filter(
      (item) => 
          item.companyName.toLowerCase().includes(search.toLowerCase())
    );
  }


  renderArticles = ({item, index}) => {
    return (
      <View style={categoryScreenStyles.articleContainer}>
        <CategoryCard item={item} navigation={this.props.navigation}/>
      </View>
    );
  }

  renderSecondary = ({item, index}) => {
  return (
    <View style={categoryScreenStyles.articleContainer}>
      <Card item={item} navigation={this.props.navigation}/>
    </View>
  );
}

  

  render() {
    const { search } = this.state;
    const searchFlatList = (
          <FlatList
          data={this.state.noData ? this.state.data : this.state.filteredData}
          numColumns={2}
          renderItem={this.renderSecondary}
          >
       </FlatList>);

    const categoryFlatList = (
      <FlatList
        data={categories}
        numColumns={2}
        renderItem={this.renderArticles}
        >
      </FlatList>
    );

    const noResultsFound = (
      <Text> No Deals Found </Text>
    );
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
    
      {!this.state.noData && !this.state.noResults ? searchFlatList : null }


      {!this.state.noData && this.state.noResults ? noResultsFound : null}
     {/* Render the cards in a list */}  
      
        {this.state.noData ? categoryFlatList : null }
      </View>
      </View>
    );
  }
}



const styles = StyleSheet.create({

 
});