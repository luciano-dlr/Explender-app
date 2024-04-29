import { View, Text, TouchableOpacity, Modal, ActivityIndicator } from 'react-native';
import { useEntriesController } from './useEntriesController';
import { styles } from './styles';
import { ScrollView } from 'react-native-gesture-handler';

const EntriesScreen = () => {

  const { dataEntries, isLoading } = useEntriesController()

  return (

    <ScrollView style={styles.scrollView}>

      <View style={styles.container}>
        {isLoading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          dataEntries && dataEntries.MOVIMIENTOS.map((movimiento, index) => (
            <TouchableOpacity key={index} style={styles.itemContainer}>
              <View style={styles.ContentItemContainer}>
                <Text style={styles.title}>Movimiento #{index + 1}</Text>
                <Text style={styles.textItemContainer}>Autorizante: {movimiento.AUTORIZANTE}</Text>
                <Text style={styles.textItemContainer}>Carril de ingreso: {movimiento.CARRILINGRESO}</Text>
                <Text style={styles.textItemContainer}>Puesto de Egreso: {movimiento.PUESTOEGRESO}</Text>
                <Text style={styles.textItemContainer}>Vehiculo: {movimiento.VEHICULOEGRESO}</Text>
                <Text style={styles.textItemContainer}>Fecha Ingreso: {movimiento.FECHAINGRESO}</Text>
                <Text style={styles.textItemContainer}>Hora de ingreso: {movimiento.HORA_ING}</Text>
                <Text style={styles.textItemContainer}>Fecha Egreso: {movimiento.FECHAEGRESO}</Text>
                <Text style={styles.textItemContainer}>Hora de egreso: {movimiento.HORA_EGR}</Text>
              </View>
            </TouchableOpacity>
          ))
        )}
      </View>
    </ScrollView>
  );
};

export default EntriesScreen;