import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, Modal, Vibration } from 'react-native';
import { Audio } from 'expo-av';
import * as Permissions from 'expo-permissions';
import io from 'socket.io-client';

const socket = io('http://localhost:4000'); // Asegúrate de que la URL apunte a tu servidor local

export const AlarmScreen = ({ isVisible, onAccept, onReject, personInfo }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onReject}
    >
      <View style={styles.container}>
        <Text style={styles.text}>¡Alerta! {personInfo.name} está en la puerta</Text>
        <Button title="Aceptar" onPress={onAccept} />
        <Button title="Rechazar" onPress={onReject} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.5)',
    },
    text: {
      fontSize: 24,
      color: 'white',
      marginBottom: 20,
    },
  });