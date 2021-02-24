
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import bulletsStyles from './bulletsStyles';


class Bullets extends React.Component {
    render() {
        const { colorOne, colorTwo} = this.props;
        return (

                <View style={{flexDirection: 'row', paddingBottom: 6}} >
                    <Text style={[bulletsStyles.bulletFont, {color: colorOne}]}>.</Text>
                    <Text style={[bulletsStyles.bulletFont, {color: colorTwo}]}>.</Text>
                </View>

        );
    }
}


    const styles = StyleSheet.create({
    
    });


  export default Bullets;
