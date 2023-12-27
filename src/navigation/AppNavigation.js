import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../features/Login/LoginScreen.js';
import DrawerNavigation from './DrawerNavigation.js';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuthStore } from '../zustand/useAuthStore.js';
import AuthorizationScreen from '../features/Authorization/AuthorizationScreen.js';
import EditAuthorizationScreen from '../features/EditAuthorization/EditAuthorizationScreen.js';
import NewAuthorizationScreen from '../features/NewAuthorization/NewAuthorizationScreen.js';

const AppNavigation = () => {

  const Stack = createNativeStackNavigator();
  const { userData } = useAuthStore()

  return (

    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>

      <Stack.Navigator screenOptions={{ gestureEnabled: false }} >

        {
          userData ?
            <>
              <Stack.Screen name="Home" component={DrawerNavigation} options={{ headerShown: false }} />
              <Stack.Screen name="Authorization" component={AuthorizationScreen} options={({ route }) => ({ title: route.params.name })} />
              <Stack.Screen name="Editar Autorizacion" component={EditAuthorizationScreen} />
              <Stack.Screen name="Nueva Autorizacion" component={NewAuthorizationScreen} />

            </>

            :

            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />

        }

      </Stack.Navigator>

    </SafeAreaView>
  );
};

export default AppNavigation;