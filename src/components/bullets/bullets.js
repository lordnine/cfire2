
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


class Bullets extends React.Component {
    render() {
        const { colorOne, colorTwo} = this.props;
        return (

                <View style={{flexDirection: 'row', paddingBottom: 6}} >
                    <Text style={{fontSize: 50, fontWeight: '700', color: colorOne}}>.</Text>
                    <Text style={{fontSize: 50, fontWeight: '700', color: colorTwo}}>.</Text>
                </View>

        );
    }
}


    const styles = StyleSheet.create({
    
    });


  export default Bullets;
