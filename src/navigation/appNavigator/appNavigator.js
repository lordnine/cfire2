import React, { useState } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator , HeaderStyleInterpolators } from '@react-navigation/stack';
import { Image, Text, Button, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';

import WelcomeScreen from '../../screens/welcomeScreen';
import HomeScreen from '../../screens/homeScreen';
import CardScreen from '../../screens/cardScreen';
import { NativeAppEventEmitter } from 'react-native';
import logo from '../../assets/images/logo.png';
import DrawerNavigator from './drawerNavigator/drawerNavigator.js';
import { DrawerActions } from '@react-navigation/native';
import drawerlogo from '../../assets/images/drawerlogo.png';
import appNavigatorStyles from './appNavigatorStyles.js';
import SpecificCategoryScreen from '../../screens/specificCategoryScreen';
import LearnMoreScreen from '../../screens/learnMoreScreen';
import SuggestedSchoolScreen from '../../screens/suggestedSchoolScreen';
import { State } from 'react-native-gesture-handler';
import SignInScreen from '../../screens/signInScreen';


const Stack = createStackNavigator();

function HomeHeader() {
  return (
    <Image style={appNavigatorStyles.homeHeader} resizeMode='contain' source={logo}/>
  );
}

function HomeLeft() {
  return(
    <Text style={appNavigatorStyles.homeLeft}>drawer</Text>
  );
}

function HomeRight() {
  return(
    <Text style={appNavigatorStyles.homeRight}>search</Text>
  );
}

function DrawerBurger () {
  const navigation = useNavigation();
  return(
    <TouchableOpacity style={appNavigatorStyles.burgerContainer} 
    onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
        <Image source={drawerlogo} style={appNavigatorStyles.burgerStyles} resizeMode='contain' />
    </TouchableOpacity> 
  );
}

const verticalAnimation = {
  gestureDirection: 'vertical',
  cardStyleInterpolator: ({ current, layouts }) => {
    return {
      cardStyle: {
        transform: [
          {
            translateY: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.height, 0],
            }),
          },
        ],
      },
    };
  },
};



const config = {
  animation: 'spring',
  config: {
    stiffness: 100,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};



function parentMethod() {
  console.log("boop");
};
function AppNavigator(props) {
  console.log("App Navigator props");
  console.log(JSON.stringify(props));
  return (
  <NavigationContainer>
      
    <Stack.Navigator
        initialRouteName={props.authed == true ? ("Welcome") : ("SignIn") }
    >
      {props.authed == true ? (
        <>
            <Stack.Screen
              name="Welcome" component={WelcomeScreen} options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SuggestedSchool" component={SuggestedSchoolScreen} options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Learn" component={LearnMoreScreen}
              options={{
                headerShown: false, gestureDirection: 'vertical', transitionSpec: { open: config, close: config }, headerStyleInterpolator: HeaderStyleInterpolators.forFade,
                cardStyleInterpolator: ({ current, next, layouts }) => {
                  return {
                    cardStyle: {
                      transform: [
                        {
                          translateY: current.progress.interpolate({
                            inputRange: [0, 1],
                            outputRange: [layouts.screen.height, 0],
                          }),
                        },
                      ],
                    },
                    overlayStyle: {
                      opacity: current.progress.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, 0.5],
                      }),
                    },
                  };
                },
              }}
            />
            <Stack.Screen
              name="Home" component={HomeScreen}
              options={{
                headerTitle: (() => <HomeHeader />),
                headerTintColor: 'black',
                headerLeft: null,
                headerRight: (() => <HomeRight />),
                headerLeft: (() => <HomeLeft />)
              }}
            />
            <Stack.Screen
              name="Card" component={CardScreen}
              options={({ navigation }) =>
              ({
                headerTitle: (() => <HomeHeader />),
                headerTintColor: 'white',
                headerBackTitleVisible: false,
                headerRight: null,
                headerLeftContainerStyle: {
                  marginLeft: 8
                },
                headerStyle: {
                  backgroundColor: '#5d3c85',
                },
              }
              )}
            />
            <Stack.Screen
              name="Drawer" component={DrawerNavigator}
              options={({ navigation }) =>
              ({
                headerTitle: (() => <HomeHeader />),
                headerLeft: null,
                headerRight: (() => <DrawerBurger />),
                headerStyle: {
                  backgroundColor: '#5d3c85',
                },
              }
              )}
            />
            <Stack.Screen
              name="Specific" component={SpecificCategoryScreen}
              options={({ navigation }) =>
              ({
                headerTitle: (() => <HomeHeader />),
                headerTintColor: 'white',
                headerBackTitleVisible: false,
                headerRight: null,
                headerStyle: {
                  backgroundColor: '#5d3c85',
                },
                headerLeftContainerStyle: {
                  marginLeft: 8
                }
              }
              )}
            />
        </>
      ) : (
        <>
              <Stack.Screen
                name="SignIn" component={SignInScreen}
              />
          <Stack.Screen
            name="Home" component={HomeScreen}
            options={{
              headerTitle: (() => <HomeHeader />),
              headerTintColor: 'black',
              headerLeft: null,
              headerRight: (() => <HomeRight />),
              headerLeft: (() => <HomeLeft />)
            }}
          />
          
        </>
      )}
      


    </Stack.Navigator>
    </NavigationContainer>
  );
      };

mapStateToProps = (state) => {
  console.log("NAVIGATOR STATE:" + JSON.stringify(state));
  return {
    authed: state.user.authed,
  };
};

export default connect(mapStateToProps)(AppNavigator);