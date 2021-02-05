import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Image, Text, Button, TouchableOpacity} from 'react-native';

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

const config = {
  animation: 'spring',
  config: {
    stiffness: 200,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};




const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Welcome"
    >
      <Stack.Screen 
        name="Welcome" component={WelcomeScreen} options={{headerShown: false}}
      />
      <Stack.Screen 
      name="Learn" component={LearnMoreScreen} 
      options={{headerShown: false, transitionSpec: { open: config, close: config}}}
      />
      <Stack.Screen
        name="Home" component={HomeScreen} 
        options={{headerTitle: ( () => <HomeHeader /> ), 
          headerTintColor: 'black', 
          headerLeft: null, 
          headerRight: ( () => <HomeRight />), 
          headerLeft: ( () => <HomeLeft />)  }}
      />
      <Stack.Screen
        name="Card" component={CardScreen} 
        options={({navigation}) => 
        ({headerTitle: ( () => <HomeHeader /> ), 
          headerLeft: null, 
          headerRight: ( () => <DrawerBurger />),
          headerStyle: {
            backgroundColor: '#5d3c85',
          },
        } 
        )}  
      />
      <Stack.Screen
        name="Drawer" component={DrawerNavigator}
        options={({navigation}) => 
        ({headerTitle: ( () => <HomeHeader /> ), 
          headerLeft: null, 
          headerRight: ( () => <DrawerBurger />),
          headerStyle: {
            backgroundColor: '#5d3c85',
          },
        } 
        )}  
      />
      <Stack.Screen 
        name="Specific" component={SpecificCategoryScreen}
        options={({navigation}) => 
        ({headerTitle: ( () => <HomeHeader /> ), 
          headerLeft: null, 
          headerRight: null,
          headerStyle: {
            backgroundColor: '#5d3c85',
          },
        } 
        )}  
      />


    </Stack.Navigator>

  </NavigationContainer>
);

export default AppNavigator;