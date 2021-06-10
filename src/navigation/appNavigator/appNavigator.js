
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';

//screens
import DrawerNavigator from './drawerNavigator/drawerNavigator.js';
import WelcomeScreen from '../../screens/welcomeScreen';
import CardScreen from '../../screens/cardScreen';
import SpecificCategoryScreen from '../../screens/specificCategoryScreen';
import LearnMoreScreen from '../../screens/learnMoreScreen';
import SuggestedSchoolScreen from '../../screens/suggestedSchoolScreen';
import CreateAccountScreen from '../../screens/createAccountScreen';
import LoginScreen from '../../screens/loginScreen';
import StoreDealsScreen from '../../screens/storeDealsScreen';

import appNavigatorHeaders from './appNavigatorHeaders';
import appNavigatorStyles from './appNavigatorStyles.js';


const Stack = createStackNavigator();

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
					options={appNavigatorHeaders.drawerHeader}
				/>
				<Stack.Screen
					name="Card" component={CardScreen}
					options={appNavigatorHeaders.purpleHeader}
				/>
				<Stack.Screen
					name="Specific" component={SpecificCategoryScreen}
					options={appNavigatorHeaders.purpleHeader}
				/>
				{/* <Stack.Screen
					name="StoreDeals" component={StoreDealsScreen}
					options={appNavigatorHeaders.purpleHeader}
				/> */}
          	</>

        ) : (

          	<>
				<Stack.Screen
					name="Welcome" component={WelcomeScreen} options={{ headerShown: false }}
					options={appNavigatorHeaders.purpleHeader}
				/>
				<Stack.Screen
					name="CreateAccount" component={CreateAccountScreen}
					options={appNavigatorHeaders.loginFlowHeader}
				/>
				<Stack.Screen
					name="Login" component={LoginScreen} options={{ headerShown: false }}
					options={appNavigatorHeaders.loginFlowHeader}
				/>
				<Stack.Screen
					name="SuggestedSchool" component={SuggestedSchoolScreen}
					options={appNavigatorHeaders.loginFlowHeader}
				/>
				<Stack.Screen
					name="Learn" component={LearnMoreScreen}
					options={appNavigatorHeaders.loginFlowHeader}
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