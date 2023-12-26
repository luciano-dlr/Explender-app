import { View, Text, TouchableOpacity, ActivityIndicator, ScrollView } from 'react-native';
import { useUserAuthorizationsController } from './useUserAuthorizationsController';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

const UserAuthorizationsScreen = () => {

  const { userInfo, userAuthorizationsList, handlePressAuthorization } = useUserAuthorizationsController();

  // console.log(JSON.stringify(userAuthorizationsList,null,4))

  return (

    <ScrollView style={styles.container}>

      {!userAuthorizationsList ? <ActivityIndicator /> : userAuthorizationsList?.AUTORIZACIONES.map((authorization, index) => (

        <TouchableOpacity
          key={index}
          style={styles.authorizationItem}
          onPress={() => handlePressAuthorization(authorization.DESCRIPCION, authorization)}
        >
          <View>
            {userInfo && userInfo.USUARIO && userInfo.USUARIO[0].NOMBRE ? (
              <>
                <Text>Propietario: {userInfo.USUARIO[0].NOMBRE}</Text>
                {/* <Text>CODUSUARIO: {userInfo.USUARIO[0].CODUSUARIO}</Text> */}
                <Text style={styles.authorizationText}>{authorization.DESCRIPCION}</Text>
                <Text style={styles.authorizationText}>{authorization.GRUPO}</Text>
                <Text style={styles.authorizationText}>{authorization.AUTORIZACIONTIPO}</Text>
                {/* <Text style={styles.authorizationText}>{authorization.GRUPODESCRIP}</Text> */}

                {authorization.AUTORIZACIONTIPO !== 'Permanente' ?

                  <>
                    <Text style={styles.authorizationText}>Desde: {authorization.AUTORIZADODESDE}</Text>
                    <Text style={styles.authorizationText}>Hasta: {authorization.AUTORIZADOHASTA}</Text>
                  </>

                  :

                  <></>

                }
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

export default UserAuthorizationsScreen;