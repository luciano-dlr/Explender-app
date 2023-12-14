

import Authorizations from '../features/Authorizations/Authorizations'
import Entries from '../features/Entries/Entries';

import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
  } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';


function CustomDrawerContent(props) {

    //Borrar datos de usuario zustand para logout por no tener valores del usuario
    const navigation = useNavigation();
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem label="Cerrar Session" onPress={() => navigation.navigate('Login')} />
      </DrawerContentScrollView>
    );
  }

const DrawerNavigation = () => {

    const Drawer = createDrawerNavigator();

    
    //https://stackoverflow.com/questions/61331840/how-do-i-add-a-log-out-button-to-my-drawer-using-react-navigation-v5



    return (

        <Drawer.Navigator initialRouteName="Authorizations" drawerContent={props => <CustomDrawerContent {...props} />}>

            <Drawer.Screen name="Authorizations" component={Authorizations} />
            <Drawer.Screen name="Entries" component={Entries} />
           
            

        </Drawer.Navigator>

    )
}

export default DrawerNavigation