
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Divider } from 'react-native-elements'
import adjustableStyleFunctions from '../../styles/adjustableStyleFunctions';
import carouselElementStyles from './carouselElementStyles';

import collegelogo from '../../assets/images/college.png';
import couponLogo from '../../assets/images/coupon.png';

class CarouselElement extends React.Component {
    render() {
        const { width, isCollege } = this.props;
        const { elementTitle, elementSubTitle} = this.props;



        return (

                <View style={[carouselElementStyles.carouselElement, {width: this.props.width}]}>
                    <Divider style={adjustableStyleFunctions.transparentDivider('15%')}/>
                    <Image source={(this.props.isCollege ? collegelogo : couponLogo)} resizeMode='contain' style={{width: '22%', height: '20%', tintColor: 'white'}}/> 
                    <Divider style={adjustableStyleFunctions.transparentDivider('12%')}/>
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
