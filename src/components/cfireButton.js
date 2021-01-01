import React from 'react';
import { withNavigation } from 'react-navigation';
import { View, Button, StyleSheet, TouchableOpacity, Text} from 'react-native';

const CfireButton = ({title}) => (
    <TouchableOpacity 
    activeOpacity={.7}
    style={styles.cfireButtonContainer} 
    >
        <Text style={styles.cfireButtonText}>{title}</Text>
    </TouchableOpacity>
);

export default CfireButton;
const styles = StyleSheet.create({
    cfireButtonContainer: {
        elevation: 8,
        backgroundColor: "#009688",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12
    },

    cfireButtonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
        alignSelf: 'center',
        textTransform: 'uppercase'
    }


});