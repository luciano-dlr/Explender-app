import { View, Text, TouchableOpacity, ActivityIndicator, ScrollView } from 'react-native';
import { useAuthorizationsController } from './useAuthorizationsController';
import { styles } from './styles';


const Authorizations = () => {
  const { userInfo,userAuthorizationsList } = useAuthorizationsController();


  return (
    <ScrollView style={styles.container}>
      
      {!userAuthorizationsList ? <ActivityIndicator /> : userAuthorizationsList?.AUTORIZACIONES.map((authorization, index) => (
        <TouchableOpacity key={index} style={styles.authorizationItem}>
          <View>
            {userInfo && userInfo.USUARIO && userInfo.USUARIO[0].NOMBRE ? (
              <>
                <Text>Name: {userInfo.USUARIO[0].NOMBRE}</Text>
                <Text>CODUSUARIO: {userInfo.USUARIO[0].CODUSUARIO}</Text>
                <Text style={styles.authorizationText}>{authorization.DESCRIPCION}</Text>
                <Text style={styles.authorizationText}>Desde: {authorization.AUTORIZADODESDE}</Text>
                <Text style={styles.authorizationText}>Hasta: {authorization.AUTORIZADOHASTA}</Text>
                <Text style={styles.authorizationText}>{authorization.AUTORIZACIONTIPO}</Text>
                <Text style={styles.authorizationText}>{authorization.GRUPO}</Text>
              </>
            ) : (
              <ActivityIndicator size="small" color="#0000ff" />
            )}
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default Authorizations;

