import {createDrawerNavigator,DrawerContentScrollView,DrawerItemList,DrawerItem} from '@react-navigation/drawer';
import { useAuthStore } from '../zustand/useAuthStore';
import Entries from '../features/Entries/Entries';
import Authorizations from '../features/Authorizations/Authorizations'

function CustomDrawerContent(props) {

    const {setUserData} = useAuthStore()
    
    return (
      <DrawerContentScrollView {...props}>
        
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