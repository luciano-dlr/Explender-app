import UserAuthorizationsScreen from '../features/UserAuthorizations/UserAuthorizationsScreen';
import EntriesScreen from '../features/Entries/EntriesScreen';
import InfractionsScreen from '../features/Infractions/InfractionsScreen';
import MenuScreen from '../features/Menu/MenuScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { getWP } from '../utils/dimensions';
import { TouchableOpacity, View } from 'react-native';
import AddAuthorization from '../../assets/AddAuthorization.svg';
import ShieldCheck from '../../assets/ShieldCheck.svg';
import ArrowLeftRight from '../../assets/ArrowLeftRight.svg';
import ShieldStar from '../../assets/ShieldStar.svg'
import Menu from '../../assets/Menu.svg'

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  const navigation = useNavigation();

  const routeIcons = {
    Autorizaciones: ShieldCheck,
    Movimientos: ArrowLeftRight,
    Infracciones:ShieldStar,
    Menu:Menu
  };

  return (
    <Tab.Navigator

      screenOptions={({ route }) => ({

        tabBarIcon: ({ focused, color, size }) => {
        
          const IconComponent = routeIcons[route.name];

          if (IconComponent) {
            return (
              <View style={{ backgroundColor: focused ? 'white' : 'transparent' }}>
                <IconComponent style={{ color: focused ? 'black' : 'gray', width: 20, height: 20 }} />
              </View>
            );
          }

          return null;
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
              <View >
                {/* Aquí, se usa el mismo componente del objeto routeIcons */}
                <AddAuthorization style={{ color: 'black', width: 20, height: 20 }} />
              </View>
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: '#fff',
          },
        }}
      />

      <Tab.Screen name="Movimientos" component={EntriesScreen} />

      <Tab.Screen name="Infracciones" component={InfractionsScreen} />

      <Tab.Screen name="Menu" component={MenuScreen} />


    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
