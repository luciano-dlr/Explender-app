import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import UserAuthorizationsScreen from '../features/UserAuthorizations/UserAuthorizationsScreen';
import EntriesScreen from '../features/Entries/EntriesScreen';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AddAuthorization from '../../assets/AddAuthorization.svg';
import { getWP } from '../utils/dimensions';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  const navigation = useNavigation();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          // Puedes personalizar tus iconos aquí
          if (route.name === 'Autorizaciones') {
            // Ejemplo de icono para la pestaña 'Autorizaciones'
            return (
              <AddAuthorization
                style={{ color: focused ? 'black' : 'gray', width: 20, height: 20 }}
              />
            );
          }
          // Agrega más condiciones para otros íconos según las pestañas que tengas
        },
      })}
    >
      <Tab.Screen
        name="Autorizaciones"
        component={UserAuthorizationsScreen}
        options={{
          headerRight: () => (
            <TouchableOpacity
              style={{ marginRight: getWP(10), marginTop: getWP(2) }}
              onPress={() => navigation.navigate('Nueva Autorizacion')}
            >
              <AddAuthorization style={{ color: 'black', width: 20, height: 20 }} />
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: '#fff',
          },
        }}
      />
      <Tab.Screen name="Movimientos" component={EntriesScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
