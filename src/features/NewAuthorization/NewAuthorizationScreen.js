//NewAuthorizationScreen.js
import { View, Text,Radio,RadioGroup, TouchableOpacity  } from 'react-native'
import React, { useState } from 'react'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import { useNewAuthorizationController } from './useNewAuthorizationController'

const NewAuthorizationScreen = () => {

  const {handleNewAuthorizationPost,handleToggle,newAuthorization,userInfo} = useNewAuthorizationController()

  const authorizationTypeText = newAuthorization.Tipo === '1' ? 'Eventual' : 'Permanente';

  // console.log('soy la pantalla',userInfo)
   
  return (
    <ScrollView>
         <View>
                <Text> Creada por : {userInfo.USUARIO[0].PERSONA.NOMBRE} </Text>
                <Text> Tipo de Autorizacion </Text>
                <TouchableOpacity onPress={handleToggle}>
                    <Text style={{ backgroundColor: newAuthorization.Tipo === '1' ? 'white' : 'gray' }}>
                        {authorizationTypeText}
                    </Text>
                </TouchableOpacity>
                <Text> Ubicacion : {userInfo.USUARIO[0].DESTINOS[0].DESCRIP}</Text>
                <Text> asd </Text>
            </View>
    </ScrollView>
  )
}

export default NewAuthorizationScreen