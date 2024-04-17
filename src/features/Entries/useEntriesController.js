import { useRef, useState } from 'react';
import { Audio } from 'expo-av';

export const useEntriesController = () => {

  // const sound = useRef();
  // const [isModalVisible, setModalVisible] = useState(false);

  // const playSound = async () => {
  //   try {
  //     const { sound: soundObject } = await Audio.Sound.createAsync(
  //       require('../../../assets/timbre.mp3')
  //     );
  //     sound.current = soundObject;

  //     await soundObject.playAsync();
  //     setModalVisible(true);

  //   } catch (error) {
  //     console.error('Error al reproducir el sonido', error);
  //   }
  // };

  // const closeModal = () => {
  //   setModalVisible(false);
  // };

  return {
    
  }
}