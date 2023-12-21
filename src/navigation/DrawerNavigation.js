import {createDrawerNavigator,DrawerContentScrollView,DrawerItemList,DrawerItem} from '@react-navigation/drawer';
import { useAuthStore } from '../zustand/useAuthStore';
import EntriesScreen from '../features/Entries/EntriesScreen';
import UserAuthorizationsScreen from '../features/UserAuthorizations/UserAuthorizationsScreen'
import { useUserStore } from '../zustand/useUserStore';
import { Text, ActivityIndicator } from 'react-native';
import { getHP } from '../utils/dimensions';


function CustomDrawerContent(props) {

    const {setUserData} = useAuthStore()
    const {userInfo} = useUserStore()

    
    return (
      <DrawerContentScrollView {...props}>

        {
          !userInfo ? 
          
          <ActivityIndicator/>

           : 

          <Text style={{padding:getHP(2),fontWeight:'600'}}>{userInfo.USUARIO[0].PERSONA.NOMBRE}</Text>

        }
        
        <DrawerItemList {...props} />

        <DrawerItem label="Cerrar Session" onPress={() => setUserData(null) } />

      </DrawerContentScrollView>
    );
  }
  
  const DrawerNavigation = () => {
    
    const Drawer = createDrawerNavigator();

    return (
      
      <Drawer.Navigator initialRouteName="Authorizations" drawerContent={props => <CustomDrawerContent {...props} />}>

          <Drawer.Screen name="Autorizaciones" component={UserAuthorizationsScreen} />

          <Drawer.Screen name="Movimientos" component={EntriesScreen}/>

      </Drawer.Navigator>

    )
}

export default DrawerNavigation