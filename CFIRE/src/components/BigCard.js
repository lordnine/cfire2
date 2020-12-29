import React from 'react';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';
import { StyleSheet, Dimensions, Image, TouchableWithoutFeedback, View, Text, TouchableOpacity } from 'react-native';
import { Divider } from 'react-native-elements';
 
class BigCard extends React.Component {
    render() {
        const { navigation, item, horizontal, full, style, ctaColor, imageStyle} = this.props;

        const crdContainer = [styles.card, styles.shadow];


        return (
            <View style={crdContainer}>
                <TouchableWithoutFeedback>
                    <View flex style={[styles.imgContainer, styles.cardStyles]}>
                    <View style={styles.imageContainer}>
                {/*   <View style={{backgroundColor: 'blue', height: '100%'}}></View>      */}      
                    <Image source={item.img} style={{width: '100%', height: '100%'}} resizeMode='cover' />     
                       </View>
                       <Divider style={{height: '1%'}}/>
                       <Text style={{fontSize: 30, fontWeight: '800', color: 'black'}}>{item.companyName}</Text>
                       <View style={{width: '96%', alignItems: 'flex-start', justifyContent: 'flex-start', paddingHorizontal: '2%'}}>
                      <Text style={styles.description}><Text style={styles.subTitles}>Location: </Text></Text>
                      <Text style={styles.description}><Text style={styles.subTitles}>Deal: </Text>{item.title}</Text>
                      <Text style={styles.description}><Text style={styles.subTitles}>Code: </Text>This page or a valid Student ID</Text>
                      </View>
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
      borderRadius: 10,
      flex: 1,
      width: '98%',
    },
    subTitles: {
      fontWeight: '600',
      fontSize: 18,
    },
    description: {
      fontWeight: '400',
      fontSize: 16
    },
    foodStuff: {
      fontSize: 25,
      fontWeight: '800',
      paddingLeft: '4%',
      paddingRight: '4%',
      paddingBottom: '2%',
    },
    regStuff: {
      fontSize: 25,
      fontWeight: '800',
      paddingLeft: '4%',
      paddingRight: '4%',
      paddingTop: '2%',
      paddingBottom: '2%',
    },
    imgContainer: {
      borderRadius: 10,
      elevation: 1,
      overflow: 'hidden',
      height: 130,
    },
    cardStyles: {
      flex: 1,
      justifyContent: 'flex-start',
      backgroundColor: 'white',
      alignItems: 'center'
      
      },
    shadow: {
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 8,
      shadowOpacity: 0.22,
      elevation: 3,
    },
    imageContainer: {
      borderRadius: 10,
      overflow: 'hidden',
      width: '100%',
      height: '30%',
      borderBottomEndRadius:0,
      borderBottomStartRadius: 0,
    },
  });


  export default withNavigation(BigCard);