//NewAuthorizationScreen.js
import { View, Text, Radio, RadioGroup, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import { useNewAuthorizationController } from './useNewAuthorizationController'
import { styles } from './styles'

const NewAuthorizationScreen = () => {

  const { handleNewAuthorizationPost, handleToggle, newAuthorization, userInfo } = useNewAuthorizationController()

  const authorizationTypeText = newAuthorization.Tipo === '1' ? 'Eventual' : 'Permanente';

  const [isModalVisible, setModalVisible] = useState(false);

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
        <TouchableOpacity onPress={() => setModalVisible(true)}>
         <Text>Abrir modal </Text>
        </TouchableOpacity>

        <Modal
          animationType="slide"
          transparent={true}
          visible={isModalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            {/* Aquí colocas el contenido del modal */}
            <Text>Opciones del Modal</Text>
            {/* Agrega botones u otros elementos según tus necesidades */}
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text>Cerrar Modal</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    </ScrollView>
  )
}

export default NewAuthorizationScreen