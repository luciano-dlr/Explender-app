import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useAuthorizationsController } from './useAuthorizationsController';
import useUserDataGet from '../../hooks/user/useUserDataGet';
import { styles } from './styles';
import { useUserStore } from '../../zustand/useUserStore';



const Authorizations = () => {

  const {authorizationsSimulate,handleUserInfo}= useAuthorizationsController()

  return (
    <View style={styles.container}>
    {authorizationsSimulate.AUTORIZACIONES.map((authorization, index) => (
      <TouchableOpacity key={index} style={styles.authorizationItem} onPress={handleUserInfo}>
      <View >
        <Text style={styles.authorizationText}>{authorization.DESCRIPCION}</Text>
        <Text style={styles.authorizationText}>{authorization.AUTORIZADODESDE}</Text>
        <Text style={styles.authorizationText}>{authorization.AUTORIZACIONTIPO}</Text>
        <Text style={styles.authorizationText}>{authorization.GRUPO}</Text>
      </View>
      </TouchableOpacity>
    ))}
  </View>
  )
}

export default Authorizations