import { useRoute } from '@react-navigation/native';
import { View, Text, FloatingActionButton, TouchableOpacity, Image } from 'react-native'
import { styles } from './styles';
import { ScrollView } from 'react-native-gesture-handler';
import { useAuthorizationsController } from './useAuthorizationsController';
import PencilIcon from '../../../assets/PencilIcon.svg'

const AuthorizationScreen = () => {

  const { handlePressEditAuthorization, selectedUserAuthorization,memorizedAuthorization } = useAuthorizationsController();


  // console.log(JSON.stringify(authorization,null,4))

  //TO DO
  //restyle component 
  return (

    <ScrollView style={styles.scrollView}>

      <View style={styles.container}>

        <View style={styles.header}>
          <View style={styles.body}>
            <View style={styles.row}>
              <Text style={styles.label}>Tipo de autorización: </Text>
              <Text style={styles.value}>{memorizedAuthorization.AUTORIZACIONTIPO}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Autorizado por: </Text>
              <Text style={styles.value}>{memorizedAuthorization.USUAUTORIZO}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Destino: </Text>
              <Text style={styles.value}>{memorizedAuthorization.DESTINO}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Manzana: </Text>
              <Text style={styles.value}>{memorizedAuthorization.MANZANA}</Text>
            </View>
          </View>
        </View>
        <View style={styles.day}>
          <View style={styles.titleDays}>
            <Text style={styles.text}>Días autorizados</Text>
          </View>
          {memorizedAuthorization?.DIAS.map((dia, index) => (
            <View key={index} style={styles.day}>
              <Text style={styles.dayLabel}>{dia.DESCRIPDIA}</Text>
              <Text style={styles.dayValue}>{dia.DESDEHORA} - {dia.HASTAHORA}</Text>
            </View>
          ))}
        </View>
        <View style={styles.floatingButtonContainer}>
          <TouchableOpacity onPress={() => handlePressEditAuthorization(memorizedAuthorization)} style={styles.floatingButton}>
            <PencilIcon color={'black'} />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default AuthorizationScreen