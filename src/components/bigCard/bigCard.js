import React from 'react';
import { StyleSheet, Image, TouchableWithoutFeedback, View, Text } from 'react-native';
import { Divider } from 'react-native-elements';
import bigCardStyles from './bigCardStyles';
import adjustableStyleFunctions from '../../styles/adjustableStyleFunctions';
 
class BigCard extends React.Component {
    render() {
        const { item } = this.props;

        const crdContainer = [bigCardStyles.card, bigCardStyles.shadow];
        const touchableContainer = [bigCardStyles.wrappedContainer, bigCardStyles.cardStyles]


        return (
            <View style={crdContainer}>
                <TouchableWithoutFeedback>

                  <View style={touchableContainer}>

                  {/* Render company image at the top of the card */}
                    <View style={bigCardStyles.imageContainer}> 
                        <Image source={item.img} style={bigCardStyles.imageResizeContainer} resizeMode='cover' />     
                    </View>

                    <Divider style={adjustableStyleFunctions.transparentDivider('1%')}/>

                    <Text style={bigCardStyles.companyTitle}>{item.companyName}</Text>
                   
                   {/* Deal Description */}
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