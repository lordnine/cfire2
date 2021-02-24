
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Divider } from 'react-native-elements'
import adjustableStyleFunctions from '../../styles/adjustableStyleFunctions';
import carouselElementStyles from './carouselElementStyles';


class CarouselElement extends React.Component {
    render() {
        const { elementTitle, elementSubTitle} = this.props;



        return (

                <View style={carouselElementStyles.carouselElement}>
                    <Divider style={adjustableStyleFunctions.transparentDivider('22%')} />
                    <Text style={carouselElementStyles.elementTitle}>{ elementTitle }</Text>
                    <Divider style={adjustableStyleFunctions.transparentDivider('2%')} />
                    <Text style={carouselElementStyles.elementSubTitle}>{ elementSubTitle }</Text>
                </View>

        );
    }
}


    const styles = StyleSheet.create({
    
    });


  export default CarouselElement;
