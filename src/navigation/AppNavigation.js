import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//screens
import Home from '../features/Home/Home.js';
import Login from '../features/Login/Login.js';
import Authorizations from '../features/Authorizations/Authorizations.js';
import DrawerNavigation from './DrawerNavigation.js';
import { SafeAreaView } from 'react-native-safe-area-context';

const AppNavigation = () => {
  console.log('Renderizando AppNavigation');

  const Stack = createNativeStackNavigator();

  //ToDo
  // renderizado de forma ternario si existe usuario sale logueado o no para redirigir al home 


  
  return (
    
      <SafeAreaView style={{flex:1,backgroundColor:'#fff'}}>

        <Stack.Navigator initialRouteName="Login" screenOptions={{gestureEnabled:false,headerShown:false}} >
  
          <Stack.Screen name="Login" component={Login} />
  
          <Stack.Screen name="Home" component={DrawerNavigation} />
  
        </Stack.Navigator>
      
      </SafeAreaView>
  );
};


export default AppNavigation;