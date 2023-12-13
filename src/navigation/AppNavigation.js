import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//screens
import Home from '../features/Home/Home.js';
import Login from '../features/Login/Login.js';
import Authorizations from '../features/Authorizations/Authorizations.js';

const AppNavigation = () => {
  console.log('Renderizando AppNavigation');

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Authorizations" component={Authorizations} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default AppNavigation;