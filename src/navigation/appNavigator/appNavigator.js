import React, { useState } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator , HeaderStyleInterpolators } from '@react-navigation/stack';
import { Image, Text, Button, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import { CAMPFIRE_PRIMARY } from '../../styles/colors';

import WelcomeScreen from '../../screens/welcomeScreen';
import CardScreen from '../../screens/cardScreen';
import logo from '../../assets/images/logo.png';
import DrawerNavigator from './drawerNavigator/drawerNavigator.js';
import { DrawerActions } from '@react-navigation/native';
import drawerlogo from '../../assets/images/drawerlogo.png';
import appNavigatorStyles from './appNavigatorStyles.js';
import SpecificCategoryScreen from '../../screens/specificCategoryScreen';
import LearnMoreScreen from '../../screens/learnMoreScreen';
import SuggestedSchoolScreen from '../../screens/suggestedSchoolScreen';
import { State } from 'react-native-gesture-handler';
import CreateAccountScreen from '../../screens/createAccountScreen';
import LoginScreen from '../../screens/loginScreen';


const Stack = createStackNavigator();

function HomeHeader() {
  return (
    <Image style={appNavigatorStyles.homeHeader} resizeMode='contain' source={logo}/>
  );
}

function BeginHeader() {
  return (
    <Image style={appNavigatorStyles.beginHeader} resizeMode='contain' source={logo}/>
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

function AppNavigator(props) {
  return (
  <NavigationContainer>
      
    <Stack.Navigator
        initialRouteName={props.authed == true ? ("Drawer") : ("Welcome") }
    >
      {/* props.authed is from Redux and controls whether the user sees the auth flow or the logged in flow */}
      {props.authed == true ? (
        <>
            <Stack.Screen
              name="Drawer" component={DrawerNavigator}
              options={({ navigation }) =>
              ({
                headerTitle: (() => <HomeHeader />),
                headerLeft: null,
                headerRight: (() => <DrawerBurger />),
                headerStyle: {
                  backgroundColor: '#8426E6',
                },
              }
              )}
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
                backgroundColor: '#8426E6',
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
                backgroundColor: '#8426E6',
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
                name="Welcome" component={WelcomeScreen} options={{ headerShown: false }}
              />
              <Stack.Screen
                name="CreateAccount" component={CreateAccountScreen}
                options={({ navigation }) =>
                ({
                  headerTitle: (() => <BeginHeader />),
                  headerTintColor: CAMPFIRE_PRIMARY,
                  headerBackTitleVisible: false,
                  headerStyle: {
                    backgroundColor: 'white',
                    shadowColor: 'transparent',
                  },
                  headerLeftContainerStyle: {
                    marginLeft: 8
                  }
                }
                )}
              />

              <Stack.Screen
                name="Login" component={LoginScreen} options={{ headerShown: false }}
                options={({ navigation }) =>
                ({
                  headerTitle: (() => <BeginHeader />),
                  headerTintColor: CAMPFIRE_PRIMARY,
                  headerBackTitleVisible: false,
                  headerStyle: {
                    backgroundColor: 'white',
                    shadowColor: 'transparent'
                  },
                  headerLeftContainerStyle: {
                    marginLeft: 8
                  }
                }
                )}
              />

              <Stack.Screen
                name="SuggestedSchool" component={SuggestedSchoolScreen}
                options={({ navigation }) =>
                ({
                  headerTitle: (() => <BeginHeader />),
                  headerTintColor: CAMPFIRE_PRIMARY,
                  headerBackTitleVisible: false,
                  headerStyle: {
                    backgroundColor: 'white',
                    shadowColor: 'transparent',
                  },
                  headerLeftContainerStyle: {
                    marginLeft: 8
                  }
                }
                )}
              />
              <Stack.Screen
                name="Learn" component={LearnMoreScreen}
                options={{
                  headerShown: false, gestureDirection: 'vertical',
                  /* transitionSpec: { open: config, close: config}, headerStyleInterpolator: HeaderStyleInterpolators.forFade,
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
                        */
                }}
                options={({ navigation }) =>
                ({
                  headerTitle: (() => <BeginHeader />),
                  headerTintColor: CAMPFIRE_PRIMARY,
                  headerBackTitleVisible: false,
                  headerStyle: {
                    backgroundColor: 'white',
                    shadowColor: 'transparent',
                  },
                  headerLeftContainerStyle: {
                    marginLeft: 8
                  }
                }
                )}
              />
        </>
      )}
    </Stack.Navigator>
    </NavigationContainer>
  );
      };

mapStateToProps = (state) => {
  return {
    authed: state.user.authed,
  };
};

export default connect(mapStateToProps)(AppNavigator);