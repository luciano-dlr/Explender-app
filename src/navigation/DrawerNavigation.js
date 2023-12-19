import {createDrawerNavigator,DrawerContentScrollView,DrawerItemList,DrawerItem} from '@react-navigation/drawer';
import { useAuthStore } from '../zustand/useAuthStore';
import Entries from '../features/Entries/Entries';
import Authorizations from '../features/Authorizations/Authorizations'
import { useUserStore } from '../zustand/useUserStore';
import { Text, ActivityIndicator } from 'react-native';
import { getHP } from '../utils/dimensions';

function CustomDrawerContent(props) {

    const {setUserData} = useAuthStore()
    const {userInfo} = useUserStore()

    


    // console.log(JSON.stringify(userInfo.USUARIO[0].PERSONA,null,4))



    
    return (
      <DrawerContentScrollView {...props}>

        {/* <DrawerItem label={userInfo.USUARIO[0].PERSONA.NOMBRE} /> */}

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

          <Drawer.Screen name="Autorizaciones" component={Authorizations} />
            
          <Drawer.Screen name="Movimientos" component={Entries}/>

      </Drawer.Navigator>

    )
}

export default DrawerNavigation