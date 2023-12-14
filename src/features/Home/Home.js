import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Modal, TouchableOpacity, Animated, TouchableWithoutFeedback } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Authorizations from '../Authorizations/Authorizations'; 

const Home = () => {
  
  const navigation = useNavigation();

  const [isMenuVisible, setMenuVisible] = useState(false);
  const [isAuthorizationsVisible, setAuthorizationsVisible] = useState(false); 

  const menuAnimation = new Animated.Value(0);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);

    Animated.timing(menuAnimation, {
      toValue: isMenuVisible ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const menuStyle = {
    transform: [
      {
        translateX: menuAnimation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 100],
        }),
      },
    ],
    position: 'absolute',
    top: 0,
    left: 0,
    width: '80%',
    height: '100%',
    backgroundColor: 'white',
    padding: 20,
  };

  const handleBackdropPress = () => {
    setMenuVisible(false);
    
  };

  const handlelogout = () => {
    navigation.navigate('Login');
  };

  const handleNavigateAuthorizations = () => {
    //navegar a la otra pantalla leio o renderizar en home?
    setAuthorizationsVisible(true);
  };



  

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Soy el Home</Text>
      <TouchableOpacity onPress={toggleMenu}>
        <Text>Soy el Menu</Text>
      </TouchableOpacity>
      <Modal animationType="fade" transparent={true} visible={isMenuVisible}>
        <TouchableWithoutFeedback onPress={handleBackdropPress}>
          <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <Animated.View style={[menuStyle]}>
              <Text>Nombre usuario</Text>
              <Text>Soy un texto</Text>
              <Text>Soy un texto2</Text>
              <Text>Soy un texto3</Text>

              <TouchableOpacity style={styles.button} onPress={handleNavigateAuthorizations}>
                <Text>Autorizaciones</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button} onPress={handlelogout}>
                <Text>LogOut</Text>
              </TouchableOpacity>
              
            </Animated.View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      
      {/*  condicionalmente se muestra */}
      
      {isAuthorizationsVisible && (
        <Authorizations onClose={() => setAuthorizationsVisible(false)} />
      )}
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'whitesmoke',
    width: '80%',
  },
});

export default Home;
