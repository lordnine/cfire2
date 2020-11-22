import React from 'react';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';
import { StyleSheet, Dimensions, Image, TouchableWithoutFeedback, View, Text, TouchableOpacity } from 'react-native';



class Card extends React.Component {
    render() {
        const { navigation, item, horizontal, full, style, ctaColor, imageStyle} = this.props;

        const imageStyles = [
            full ? styles.fullImage : styles.horizontalImage,
            imageStyle
        ];
        const crdContainer = [styles.card, styles.shadow, style];
        const imgContainer = [styles.imgContainer,
            horizontal ? styles.horizontalStyles : styles.verticalStyles,
            styles.shadow
        ];

        return (
            <View row={horizontal} card flex style={crdContainer}>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('Pro')}>
                    <View flex style={imgContainer}>
                        <Image source={item.img} style={imageStyles} />
                    </View>
                </TouchableWithoutFeedback>
            <TouchableOpacity onPress = {() => navigation.navigate('CreateAccount')} style={{activeOpacity: .3}}>
                <View flex space='between' style={styles.cardDescription}>
                        <Text size={14} style={styles.cardTitle}>{item.title}</Text>
                        <Text size={10} style={styles.cardCTA}>{item.cta}</Text>
                    </View>
                </TouchableOpacity>
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
    cardTitle: {
      flex: 1,
      flexWrap: 'wrap',
      paddingBottom: 6
    },
    cardDescription: {
      padding: 6
    },
    imgContainer: {
      borderRadius: 10,
      elevation: 1,
      overflow: 'hidden',
      height: 120,
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
    },
    verticalStyles: {
      borderBottomRightRadius: 0,
      borderBottomLeftRadius: 0
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
      elevation: 4,
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


  export default withNavigation(Card);