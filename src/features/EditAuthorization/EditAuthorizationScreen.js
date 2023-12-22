import { View, Text,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useRoute } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { styles } from './styles';
import DateTimePicker from '@react-native-community/datetimepicker';


const EditAuthorizationScreen = () => {


    const route = useRoute();
    const { authorization } = route.params;

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  

  return (
    

    <ScrollView style={styles.scrollView}>

    <View style={styles.container}>
      <View style={styles.header}>

        <View style={styles.body}>
          <View style={styles.row}>
            <Text style={styles.label}>Tipo de autorización: </Text>
            <Text style={styles.value}>{authorization.AUTORIZACIONTIPO}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Autorizado por: </Text>
            <Text style={styles.value}>{authorization.USUAUTORIZO}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Destino: </Text>
            <Text style={styles.value}>{authorization.DESTINO}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Manzana: </Text>
            <Text style={styles.value}>{authorization.MANZANA}</Text>
          </View>
        </View>
      </View>

      <View style={styles.day}>
        <View style={styles.titleDays}>
          <Text style={styles.text}>Días autorizados</Text>
        </View>

        {authorization.DIAS?.map((dia, index) => (
          <View key={index} style={styles.day}>
            <Text style={styles.dayLabel}>{dia.DESCRIPDIA}</Text>
            <Text style={styles.dayValue}>{dia.DESDEHORA} - {dia.HASTAHORA}</Text>
          </View>
        ))}
      </View>
    </View>
   
  </ScrollView>
      
    
  )
}

export default EditAuthorizationScreen