import React from 'react';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';
import { StyleSheet, Dimensions, Image, TouchableWithoutFeedback, View, Text, TouchableOpacity } from 'react-native';



class BigCard extends React.Component {
    render() {
        const { navigation, item, horizontal, full, style, ctaColor, imageStyle} = this.props;

        const crdContainer = [styles.card, styles.shadow, style];
        const imgContainer = [styles.imgContainer,
            horizontal ? styles.horizontalStyles : styles.verticalStyles,
            styles.shadow
        ];


        return (
            <View row={horizontal} card flex style={crdContainer}>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('Pro')}>
                    <View flex style={[imgContainer]}>
                      <Text style={{fontSize: 40, fontWeight: '800', color: 'white'}}>{item.companyName}</Text>
                       {/*     <Image source={item.img} style={imageStyles} />  */} 
                    </View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}






const styles = StyleSheet.create({
    card: {
      backgroundColor: 'white',
      marginVertical: 12,
      borderWidth: 0,
      minHeight: 114,
      marginBottom: 16,
      borderRadius: 10,
      flex: 1,
      height:'30%',
      width: '100%'
    },
    foodBackground:{
      backgroundColor: 'white',
    },
    regBackground:{
      backgroundColor: 'white',
    },
    foodStuff: {
      fontSize: 25,
      fontWeight: '800',
      color: 'rgba(156,137,184,1)',
      paddingLeft: '4%',
      paddingRight: '4%',
      paddingBottom: '2%',
    },
    regStuff: {
      fontSize: 25,
      fontWeight: '800',
      color: 'rgba(10,10,253,.6)',
      paddingLeft: '4%',
      paddingRight: '4%',
      paddingTop: '2%',
      paddingBottom: '2%',
    },
    cardName: {
      flex: 1,
      flexWrap: 'wrap',
      paddingBottom: 2,
      fontWeight: "800",
    },
    cardTitle: {
      flex: 1,
      flexWrap: 'nowrap',
      paddingBottom: 6
    },
    cardDescription: {
      padding: 6,
      height: 90,
      flex: 1,
      flexWrap: 'nowrap',
    },
    imgContainer: {
      borderRadius: 10,
      elevation: 1,
      overflow: 'hidden',
      height: 130,
    },
    image: {
      // borderRadius: 3,
    },
    horizontalImage: {
      width: 'auto',
      height: '100%',
      width: '100%',
    },
    horizontalStyles: {
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
      height: 90,
    },
    verticalStyles: {
      borderBottomRightRadius: 0,
      borderBottomLeftRadius: 0,
      height: 90,
      flex: 1,
      justifyContent: 'flex-start',
      backgroundColor: 'rgba(66,202,253,.3)',
      paddingTop: '10%',
      alignItems: 'center'
      
      },
    fullImage: {
      height: '100%',
      width: '100%',
      resizeMode: 'cover'
    },
    shadow: {
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 4,
      shadowOpacity: 0.15,
      elevation: 3,
    },
    newStyle: {
      height: '100%',
      width: '100%',
      resizeMode: 'cover'
    },
    cardCTA: {
      color: 'cornflowerblue'
    }
  });


  export default withNavigation(BigCard);