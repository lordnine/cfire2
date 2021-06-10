import React from 'react';
import {
  View,
  StyleSheet,
  Text,
	Button
} from 'react-native';
import { db } from '../../utils/firebase';
import { FlatList } from 'react-native';
import StoreCard from '../storeCard/storeCard';
import { TouchableOpacity } from 'react-native';

// functional component to render a list of store cards. 
export default class StoresList extends React.Component {
	navigateToStoreDealsList = (navigation, storeName) => {
		const routeParams = { store: storeName };
		navigation.navigate('StoreDeals', routeParams);
	}

	renderStoreCard = ( {item, index} ) => {
			return (
				<TouchableOpacity onPress={() => this.navigateToStoreDealsList(this.props.navigation, item.storeName)}>
					<StoreCard
						storeName={item.storeName}
					/>
				</TouchableOpacity>
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


