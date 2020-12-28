import React from 'react';
import { withNavigation } from 'react-navigation';
import { StyleSheet, Dimensions, Image, TouchableWithoutFeedback, View, Text, TouchableOpacity } from 'react-native';



class Card extends React.Component {
    render() {
        const { navigation, item, horizontal, full, style, ctaColor, imageStyle, food, key} = this.props;


        const crdContainer = [styles.card, styles.shadow, style];
        const imgContainer = [styles.imgContainer,
            horizontal ? styles.horizontalStyles : styles.verticalStyles,
            styles.shadow
        ];

        const colorStyles = [
          item.food ? styles.foodStuff : styles.regStuff,
        ];

        const backgroundStyles = [
          item.food ? styles.foodBackground : styles.regBackground,
        ];


        return (
            <View row={horizontal} card flex style={crdContainer}>

                <TouchableWithoutFeedback onPress={() => navigation.navigate('Pro')}>
                  <View flex style={[imgContainer, backgroundStyles]}>
                    <Text style={colorStyles}>{item.companyName}</Text>
                    {/*     <Image source={item.img} style={imageStyles} />  */} 
                  </View>
                </TouchableWithoutFeedback>

              <TouchableOpacity onPress = {() => navigation.navigate('Card',{ key: item.key })} style={{activeOpacity: .3}}>
                <View flex space='between' style={styles.cardDescription}>
                    {/*    <Text size={14} style={styles.cardName}>{item.companyName}</Text>     */} 
                    <Text size={14} numberOfLines={2} style={styles.cardTitle}>{item.title}</Text>
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
      height:'40%',
      width: '100%'
    },
    foodBackground:{
      backgroundColor: '#ff6600',
    },
    regBackground:{
      backgroundColor: '#551A8B',
    },
    foodStuff: {
      fontSize: 25,
      fontWeight: '800',
      color: 'white',
      paddingLeft: '4%',
      paddingRight: '4%',
      paddingBottom: '2%',
    },
    regStuff: {
      fontSize: 25,
      fontWeight: '800',
      color: 'white',
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
      paddingBottom: 8
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
      paddingBottom: '2%',
    },
    horizontalImage: {
      width: 'auto',
      height: '100%',
      width: '100%',
    },
    horizontalStyles: {
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
      height: 200,
      justifyContent: 'space-between',
    },
    verticalStyles: {
      borderBottomRightRadius: 0,
      borderBottomLeftRadius: 0,
      height: 110,
      flex: 1,
      justifyContent: 'flex-end',
      backgroundColor: 'rgba(66,202,253,.3)',
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


  export default withNavigation(Card);