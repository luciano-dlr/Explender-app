import { View, Text, TouchableOpacity, Modal } from 'react-native';
import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { styles } from './styles';
import { useEditAuthorizationController } from './useEditAuthorizationController';
import DateTimePicker from '@react-native-community/datetimepicker';

const EditAuthorizationScreen = () => {

  const { authorizationEdit, handleEditPostAuthorization, handleUseEditAuthorization,authorization } = useEditAuthorizationController();
  
  // Log the newAuthorization
  // console.log('New Authorization:', authorizationEdit);

  
  const [editedDesdeHora, setEditedDesdeHora] = useState('');
  const [editedHastaHora, setEditedHastaHora] = useState('');

  const handleEditTimes = (index) => {
    const updatedAuthorization = { ...authorizationEdit };
    const editedDay = updatedAuthorization.DIAS[index];

    // Update the hours directly
    editedDay.DESDEHORA = editedDesdeHora;
    editedDay.HASTAHORA = editedHastaHora;

    // Update the state
    handleUseEditAuthorization('DIAS', updatedAuthorization.DIAS);
  };

  return (

    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.body}>
            <View style={styles.row}>
              <TouchableOpacity onPress={handleEditPostAuthorization}>
                <Text style={styles.label}>Tipo de autorización: </Text>
              </TouchableOpacity>
              <Text style={styles.value}>{authorization?.AUTORIZACIONTIPO}</Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.label}>Autorizado por: </Text>
              <Text style={styles.value}>{authorization?.USUAUTORIZO}</Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.label}>Destino: </Text>
              <Text style={styles.value}>{authorization?.DESTINO}</Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.label}>Manzana: </Text>
              <Text style={styles.value}>{authorization?.MANZANA}</Text>
            </View>
          </View>
        </View>

        {/* <View style={styles.day}>

          <View style={styles.titleDays}>

            <Text style={styles.text}>Días autorizados</Text>

          </View>

          {authorization.DIAS?.map((dia, index) => (

            <View key={index} style={styles.day}>
              <Text style={styles.dayLabel}>{dia.DESCRIPDIA}</Text>
              <Text style={styles.dayValue}>{dia.DESDEHORA} - {dia.HASTAHORA}</Text>
            </View>

          ))}
        </View> */}
        <View style={styles.day}>
          <View style={styles.titleDays}>
            <Text style={styles.text}>Días autorizados</Text>
          </View>
          {authorizationEdit.DIAS?.map((dia, index) => (
            <View key={index} style={styles.day}>
              <Text style={styles.dayLabel}>{dia.DESCRIPDIA}</Text>
              <Text style={styles.dayValue}>
                {dia.DESDEHORA} - {dia.HASTAHORA}
              </Text>
              {/* TextInput for editing */}
              <TextInput
                placeholder="Desde Hora"
                value={editedDesdeHora}
                onChangeText={(text) => setEditedDesdeHora(text)}
              />
              <TextInput
                placeholder="Hasta Hora"
                value={editedHastaHora}
                onChangeText={(text) => setEditedHastaHora(text)}
              />
              {/* Button to save changes */}
              <TouchableOpacity
                style={styles.button}
                onPress={() => handleEditTimes(index)}
              >
                <Text style={styles.buttonText}>Guardar Cambios</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      
      </View>
      
    </ScrollView>
  )
}

export default EditAuthorizationScreen