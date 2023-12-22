import {createDrawerNavigator,DrawerContentScrollView,DrawerItemList,DrawerItem} from '@react-navigation/drawer';
import { useAuthStore } from '../zustand/useAuthStore';
import EntriesScreen from '../features/Entries/EntriesScreen';
import UserAuthorizationsScreen from '../features/UserAuthorizations/UserAuthorizationsScreen'
import { useUserStore } from '../zustand/useUserStore';
import { Text, ActivityIndicator } from 'react-native';
import { getHP } from '../utils/dimensions';
import { useAuthorizationsStore } from '../zustand/useAuthorizationsStore';


function CustomDrawerContent(props) {

    const {setUserData} = useAuthStore()
    const {userInfo,setUserInfo} = useUserStore()
    const {setUserAuthorizationsList} = useAuthorizationsStore()

    

    const handleLogOut = () => {
      setUserAuthorizationsList(null)
      setUserData(null)
      setUserInfo(null)
    }

    
    return (
      <DrawerContentScrollView {...props}>

        {
          !userInfo ? 
          
          <ActivityIndicator/>

           : 

          <Text style={{padding:getHP(2),fontWeight:'600'}}>{userInfo.USUARIO[0].PERSONA.NOMBRE}</Text>

        }
        
        <DrawerItemList {...props} />

        <DrawerItem label="Cerrar Session" onPress={handleLogOut} />

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