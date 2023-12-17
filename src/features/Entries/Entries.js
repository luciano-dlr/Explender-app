import { View, Text, TouchableOpacity, Modal } from 'react-native';
import { useEntriesController } from './useEntriesController';
import { styles } from '../Entries/styles';

const Entries = () => {

  const {isModalVisible,playSound,closeModal } = useEntriesController()

  return (
    <View style={styles.container}>

      <Text>Entries</Text>

      <TouchableOpacity onPress={playSound} style={styles.touchable}>

        <Text>Reproducir Sonido</Text>

      </TouchableOpacity>

      <Modal visible={isModalVisible} transparent animationType="slide">

        <View style={styles.modalContainer}>

          <View style={styles.modalContent}>


            <Text>Alguien en la entrada del barrio pa</Text>

            <TouchableOpacity onPress={closeModal} style={styles.touchable}>

              <Text>cerrar</Text>

            </TouchableOpacity>

          </View>

        </View>

      </Modal>

    </View>
  );
};



export default Entries;
