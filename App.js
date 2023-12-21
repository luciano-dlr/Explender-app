
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from "./src/navigation/AppNavigation";
import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {

  return (

    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>

        <AppNavigation />

      </NavigationContainer>
    </GestureHandlerRootView>

  );
}


