import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import CategoryCard from '../../components/categoryCard';
import categories from '../../constants/categories';
import articles from '../../constants/articles';
import categoryScreenStyles from './categoryScreenStyles';
import { SearchBar, Divider } from 'react-native-elements';
import Card from '../../components/card';
import adjustableStyleFunctions from '../../styles/adjustableStyleFunctions';
import { db } from '../../utils/firebase';

export default class CategoryScreen extends React.Component {

  state = { 
    search: '',
    data: articles,
    items: [],
    filteredData: [],
    noData: true,
    noResults: true,
    categories: [],
  };

  componentDidMount() {
    var categoryName = '';
    var categoryColor = '';
    var temp = [];
    var key = "1";

    db.collection("categories").get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {

          if(doc.exists){
            categoryName = doc.data().categoryName;
            categoryColor = doc.data().categoryColor;
            key = doc.data().key;
            temp.push({
              categoryName: categoryName,
              categoryColor: categoryColor,
              key: key,
            });
            this.setState({categories: temp});

          } 
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    })
    .finally(() => {
      
    });
  }
  
  // HANDLE SEARCH
  updateSearch = (search) => {
    this.setState({ search });
    let tempData = this.filterList(search);
    search.length > 0 ? this.setState({noData: false}) : this.setState({noData: true});
    tempData.length > 0 ? this.setState({noResults: false}) : this.setState({noResults: true});
    this.setState({filteredData: tempData});
  };

  // FILTER BY SEARCH
  filterList (search) {
    return articles.filter(
      (item) => 
          item.companyName.toLowerCase().includes(search.toLowerCase())
    );
  }

  // RENDER THE CATEGORIES
  renderCategories = ({item, index}) => {
    return (
      <View style={categoryScreenStyles.articleContainer}>
        <CategoryCard item={item} categoryName={item.categoryName} categoryColor={item.categoryColor} id={item.key} navigation={this.props.navigation}/>
      </View>
    );
  }

  // RENDER THE CARDS DURING SEARCH
  renderCards = ({item, index}) => {
    return (
      <View style={categoryScreenStyles.articleContainer}>
        <Card item={item} navigation={this.props.navigation}/>
      </View>
    );
  }

  

  render() {

    const { search } = this.state;

    // THE FLATLIST RETURNED WHEN SEARCHED
    const searchFlatList = (
      <FlatList
          data={this.state.noData ? this.state.data : this.state.filteredData}
          numColumns={2}
          renderItem={this.renderCards}
          >
       </FlatList>
    );

    // FLATLIST FOR CATEGORIES
    const categoryFlatList = (
      <View>
        <Text style={categoryScreenStyles.categoryTitle}> Categories </Text>
        <FlatList
          data={this.state.categories}
          numColumns={2}
          renderItem={this.renderCategories}
          scrollEnabled={false}
          >
        </FlatList>
      </View>
    );

    // TEXT DISPLAYED IF NO RESULTS
    const noResultsFound = (
      <Text style={categoryScreenStyles.noResults}> No Deals Found </Text>
    );

    return(
      
      <View style={categoryScreenStyles.basicGreyBackground}>

        <Divider style={adjustableStyleFunctions.transparentDivider('2.5%')} />

        {/* SEARCH BAR */}
        <SearchBar 
          inputStyle={{backgroundColor: '#e0e0e0'}}
          inputContainerStyle={{backgroundColor: '#e0e0e0'}}
          searchIcon={{ size: 24 }}
          containerStyle={categoryScreenStyles.searchBarContainer}
          placeholder='Search'
          onChangeText={this.updateSearch}
          value={search}
        />

        <Divider style={adjustableStyleFunctions.transparentDivider('1%')} />

        {/* CONDITIONALLY RENDER NO RESULTS FOUND */}
        {!this.state.noData && this.state.noResults ? noResultsFound : null}  

        {/* RENDER CATEGORIES OR SEARCHED CARDS */}
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