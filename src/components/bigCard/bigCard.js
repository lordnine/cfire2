import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Dimensions, Image, TouchableWithoutFeedback, View, Text, TouchableOpacity } from 'react-native';
import { Divider } from 'react-native-elements';
import bigCardStyles from './bigCardStyles';
import customStyles from '../../styles/customStyles';
 
class BigCard extends React.Component {
    render() {
        const { navigation, item, horizontal, full, style, ctaColor, imageStyle} = this.props;

        const crdContainer = [bigCardStyles.card, bigCardStyles.shadow];
        const imgContainer = [bigCardStyles.imgContainer, bigCardStyles.cardStyles]


        return (
            <View style={crdContainer}>
                <TouchableWithoutFeedback>
                    <View style={imgContainer}>
                    <View style={bigCardStyles.imageContainer}> 
                    <Image source={item.img} style={bigCardStyles.imageResizeContainer} resizeMode='cover' />     
                       </View>
                       <Divider style={customStyles.transparentDivider('1%')}/>
                       <Text style={bigCardStyles.companyTitle}>{item.companyName}</Text>
                       <View style={bigCardStyles.bigCardContainer}>
                      <Text style={bigCardStyles.description}><Text style={bigCardStyles.subTitle}>Location: </Text></Text>
                      <Text style={bigCardStyles.description}><Text style={bigCardStyles.subTitle}>Deal: </Text>{item.title}</Text>
                      <Text style={bigCardStyles.description}><Text style={bigCardStyles.subTitle}>Code: </Text>This page or a valid Student ID</Text>
                      </View>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}






const styles = StyleSheet.create({

  });


  export default BigCard;