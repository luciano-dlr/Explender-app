import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { useAuthStore } from '../zustand/useAuthStore';
import EntriesScreen from '../features/Entries/EntriesScreen';
import UserAuthorizationsScreen from '../features/UserAuthorizations/UserAuthorizationsScreen'
import { useUserStore } from '../zustand/useUserStore';
import { Text, ActivityIndicator } from 'react-native';
import { getHP, getWP } from '../utils/dimensions';
import { useAuthorizationsStore } from '../zustand/useAuthorizationsStore';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AddAuthorization from '../../assets/AddAuthorization.svg'
import { useNavigation } from '@react-navigation/native';

function CustomDrawerContent(props) {

  const { setUserData } = useAuthStore()
  const { userInfo, setUserInfo } = useUserStore()
  const { setUserAuthorizationsList } = useAuthorizationsStore()

  const handleLogOut = () => {
    setUserAuthorizationsList(null)
    setUserData(null)
    setUserInfo(null)
  }

  //Afuera

  return (
    <DrawerContentScrollView {...props}>

      {
        !userInfo ?

          <ActivityIndicator />

          :

          <Text style={{ padding: getHP(2), fontWeight: '600' }}>{userInfo.USUARIO[0].PERSONA.NOMBRE}</Text>

      }

      <DrawerItemList {...props} />

      <DrawerItem label="Cerrar Session" onPress={handleLogOut} />

    </DrawerContentScrollView>
  );
}

const DrawerNavigation = () => {

  const navigation = useNavigation();
  const Drawer = createDrawerNavigator();

  return (

    <Drawer.Navigator initialRouteName="Authorizations" drawerContent={props => <CustomDrawerContent {...props} />}>

      <Drawer.Screen name="Autorizaciones" component={UserAuthorizationsScreen}
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
            backgroundColor: '#fff', // Puedes cambiar el color de fondo del header
          },
        }}
      />

      <Drawer.Screen name="Movimientos" component={EntriesScreen} />

    </Drawer.Navigator>

  )
}

export default DrawerNavigation