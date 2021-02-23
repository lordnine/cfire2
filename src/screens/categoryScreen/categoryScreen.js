import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
} from 'react-native';
import CategoryCard from '../../components/categoryCard';
import categories from '../../constants/categories';
import articles from '../../constants/articles';
import categoryScreenStyles from './categoryScreenStyles';
import { SearchBar, Divider } from 'react-native-elements';
import Card from '../../components/card';
import adjustableStyleFunctions from '../../styles/adjustableStyleFunctions';
import { db } from '../../utils/firebase.js';

let itemsRef = db.ref('/Deals');

export default class CategoryScreen extends React.Component {

  state = { 
    search: '',
    data: articles,
    items: [],
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
      <View>
      <Text style={{marginLeft: 2, fontSize: 28, fontWeight: '700'}}> Categories </Text>
      <FlatList
        data={categories}
        numColumns={2}
        renderItem={this.renderArticles}
        scrollEnabled={false}
        >
      </FlatList>
      </View>
    );

    const noResultsFound = (
      <Text style={{fontSize: 18, fontWeight: '600', textAlign: 'center'}}> No Deals Found </Text>
    );
    return(
      
      <View style={{height: '100%', width: '100%', backgroundColor: '#e6e6e6'}}>

        <Divider style={adjustableStyleFunctions.transparentDivider('2.5%')} />

        <SearchBar 
          inputStyle={{backgroundColor: '#d6dbe0'}}
          inputContainerStyle={{backgroundColor: '#d6dbe0'}}
          searchIcon={{ size: 24 }}
          containerStyle={{width: '98%', backgroundColor: '#e4e6eb', borderBottomColor: 'transparent', borderTopColor: 'transparent', marginHorizontal: '1%'}}
          placeholder='Search'
          onChangeText={this.updateSearch}
          value={search}
        />


      <Divider style={adjustableStyleFunctions.transparentDivider('1%')} />

      {!this.state.noData && this.state.noResults ? noResultsFound : null}  


      <View style={categoryScreenStyles.listContainer}>


      {!this.state.noData && !this.state.noResults ? searchFlatList : null }


      
     {/* Render the cards in a list */}  
      
        {this.state.noData ? categoryFlatList : null }
      </View>
      </View>
    );
  }
}



const styles = StyleSheet.create({

 
});