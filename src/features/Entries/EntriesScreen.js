import { View, Text, TouchableOpacity, Modal } from 'react-native';
import { useEntriesController } from './useEntriesController';
import { styles } from './styles';
import { ScrollView } from 'react-native-gesture-handler';

const EntriesScreen = () => {

  const { isModalVisible, playSound, closeModal } = useEntriesController()

  return (

    <ScrollView>

    <View style={styles.container}>

      {/* <Text>Entries</Text>

      <TouchableOpacity onPress={playSound} style={styles.touchable}>

        <Text>Reproducir Sonido</Text>

      </TouchableOpacity>

      <Modal visible={isModalVisible} transparent animationType="slide">

        <View style={styles.modalContainer}>

          <View style={styles.modalContent}>


            <Text>Alguien en la entrada del barrio</Text>

            <TouchableOpacity onPress={closeModal} style={styles.touchable}>

              <Text>cerrar</Text>

            </TouchableOpacity>

          </View>

        </View>

      </Modal> */}

      <TouchableOpacity style={styles.itemContainer} >

        <View style={styles.ContentItemContainer}>

          <Text style={styles.textItemContainer}>Infraccion</Text>
          <Text style={styles.textItemContainer}>Data de Infraccion</Text>

        </View>

      </TouchableOpacity>

    </View>
    </ScrollView>
  );
};

export default EntriesScreen;