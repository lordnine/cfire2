/**
 * Main entry point 
 * Subsequently renders all other components
 */

import React from 'react';
import { registerRootComponent } from 'expo';
import { Provider } from 'react-redux';
import configureStore from '../../utils/configureStore';
import AppNavigator from '../../navigation/AppNavigator';

/** 
 * configureStore() takes the initial state as an argument
 * default initial state is {} (empty object)
 */
const store = configureStore();

/* TODO: AppLoading and resource loading */

const App = () => (
  <Provider store={store}>
    <AppNavigator />
  </Provider>
)

registerRootComponent(App);
