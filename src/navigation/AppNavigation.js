import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../features/Login/Login.js';
import DrawerNavigation from './DrawerNavigation.js';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuthStore } from '../zustand/useAuthStore.js';

const AppNavigation = () => {
  
  const Stack = createNativeStackNavigator();
  const { userData } = useAuthStore()

  

  return (

    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>

      <Stack.Navigator screenOptions={{ gestureEnabled: false, headerShown: false }} >
        {
          userData ?
            <Stack.Screen name="Home" component={DrawerNavigation} />
            :
            <Stack.Screen name="Login" component={Login} />
        }

      </Stack.Navigator>

    </SafeAreaView>
  );
};

export default AppNavigation;