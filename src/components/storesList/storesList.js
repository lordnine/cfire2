import React from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';
import { db } from '../../utils/firebase';
import { FlatList } from 'react-native';
import StoreCard from '../storeCard/storeCard';

// functional component to render a list of store cards. 
export default class StoresList extends React.Component {
	navigateToStoreDealsList = (navigation, storeName) => {
		routeParams = { store: storeName };
		navigation.navigate('StoreDealsScreen', routeParams);
	}

	renderStoreCard = ( {item, index} ) => {
			return (
				<StoreCard
					storeName = {item.storeName}
				/>
			)
	};

	render() {
		return (
			<View>
				<FlatList
						data = {this.props.stores} 
						renderItem = {this.renderStoreCard}
				/>	
			</View>
		);
	}

}


