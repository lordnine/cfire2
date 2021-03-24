
import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import { Divider } from 'react-native-elements';
import bulletsStyles from './bulletsStyles';

import bulletlogo from '../../assets/images/bullet.png';


class Bullets extends React.Component {
    render() {
        const { colorOne, colorTwo} = this.props;
        return (

                <View style={{flexDirection: 'row', paddingTop: 20, paddingRight: 2, justifyContent: 'flex-start'}} >
                    <Image source={bulletlogo} resizeMode='contain' style={{tintColor: colorOne, width: 10, height: 10}} />
                    <Divider style={{width: 8, backgroundColor: 'transparent'}}/>
                    <Image source={bulletlogo} resizeMode='contain' style={{tintColor: colorTwo, width: 10, height: 10}} />
                </View>

        );
    }
}


    const styles = StyleSheet.create({
    
    });


  export default Bullets;
