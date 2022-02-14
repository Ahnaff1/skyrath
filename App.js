import React from 'react';
import HomeScreen from './Screens/HomeScreen';

import ShoesScreen from './Screens/ShoesScreen';
import BookScreen from './Screens/BookScreen';
import ElectronicsScreen from './Screens/ElectronicsScreen';
import ClothingScreen from './Screens/ClothingScreen';
import Cart from './Screens/Cart';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Provider} from 'react-redux';
import configureStore from './redux/store';

const store = configureStore();

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeScreen">
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="Shoes" component={ShoesScreen} />
          <Stack.Screen name="Book" component={BookScreen} />
          <Stack.Screen name="Electronics" component={ElectronicsScreen} />
          <Stack.Screen name="Clothing" component={ClothingScreen} />
          <Stack.Screen name="Cart" component={Cart} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
