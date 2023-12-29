import { View, Text, TouchableOpacity, Modal } from 'react-native';
import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { styles } from './styles';
import { useEditAuthorizationController } from './useEditAuthorizationController';
import DateTimePicker from '@react-native-community/datetimepicker';

const EditAuthorizationScreen = () => {

  const {  selectedUserAuthorization, handlePressSaveAuthorization, handleChangeDays, days } = useEditAuthorizationController();

  return (

    <ScrollView style={styles.scrollView}>
      {/* <View style={styles.container}> */}
        <View style={styles.header}>
          <View style={styles.body}>
            <View style={styles.row}>
              <TouchableOpacity>
                <Text style={styles.label}>Tipo de autorización: </Text>
              </TouchableOpacity>
              <Text style={styles.value}>{selectedUserAuthorization?.AUTORIZACIONTIPO}</Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.label}>Autorizado por: </Text>
              <Text style={styles.value}>{selectedUserAuthorization?.USUAUTORIZO}</Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.label}>Destino: </Text>
              <Text style={styles.value}>{selectedUserAuthorization?.DESTINO}</Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.label}>Manzana: </Text>
              <Text style={styles.value}>{selectedUserAuthorization?.MANZANA}</Text>
            </View>
          </View>
        </View>

        <View style={styles.day}>
          <View style={styles.titleDays}>
            <Text style={styles.text}>Días autorizados</Text>
          </View>

          {days.map((dia, index) => (
            <View key={index} style={styles.day}>
              <Text style={styles.dayLabel}>{dia.DESCRIPDIA}</Text>
              <Text style={styles.dayValue}>
                {dia.DESDEHORA} - {dia.HASTAHORA}
              </Text>
              {/* TextInput for editing */}
              <TextInput
                placeholder="Desde Hora"
                inputMode='numeric'
                value={dia.DESDEHORA}
                onChangeText={(text) => handleChangeDays(dia.DIA,text,'from')}
              />
              <TextInput
                inputMode='numeric'
                placeholder="Hasta Hora"
                value={dia.HASTAHORA}
                onChangeText={(text) => handleChangeDays(dia.DIA,text,'to')}
              />
             
            </View>
          ))}
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={handlePressSaveAuthorization}
        >
          <Text style={styles.buttonText}>Guardar Cambios</Text>
        </TouchableOpacity>
      {/* </View> */}

    </ScrollView>
  )
}

export default EditAuthorizationScreen