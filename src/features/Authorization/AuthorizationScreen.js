import { useRoute } from '@react-navigation/native';
import { View, Text, FloatingActionButton, TouchableOpacity, Image } from 'react-native'
import { styles } from './styles';
import { ScrollView } from 'react-native-gesture-handler';
import { useAuthorizationsController } from './useAuthorizationsController';
import PencilIcon from '../../../assets/PencilIcon.svg'

const AuthorizationScreen = () => {

  const { handlePressEditAuthorization, sortedDias } = useAuthorizationsController();

  const route = useRoute();
  const { authorization } = route.params;

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
          {sortedDias?.map((dia, index) => (
            <View key={index} style={styles.day}>
              <Text style={styles.dayLabel}>{dia.DESCRIPDIA}</Text>
              <Text style={styles.dayValue}>{dia.DESDEHORA} - {dia.HASTAHORA}</Text>
            </View>
          ))}
        </View>
        <View style={styles.floatingButtonContainer}>
          <TouchableOpacity onPress={() => handlePressEditAuthorization(authorization)} style={styles.floatingButton}>
            <PencilIcon color={'black'} />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default AuthorizationScreen