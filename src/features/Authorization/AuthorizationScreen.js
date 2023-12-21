import { useRoute } from '@react-navigation/native';
import { getHP } from '../../utils/dimensions';
import { View, Text } from 'react-native'

const AuthorizationScreen = () => {
    
    const route = useRoute();
    const { authorization } = route.params;

    return (
      <View style={{ flex: 1,padding:getHP(2) }}>

        {authorization && (

          <View>

            <Text>Descripción: {authorization.DESCRIPCION}</Text>
            <Text>Desde: {authorization.AUTORIZADODESDE}</Text>
            <Text>Hasta: {authorization.AUTORIZADOHASTA}</Text>
            <Text>Tipo de autorización: {authorization.AUTORIZACIONTIPO}</Text>
            <Text>Grupo: {authorization.GRUPO}</Text>

          </View>
        )}
      </View>
    );
  };

export default AuthorizationScreen