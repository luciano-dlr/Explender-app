import { View, Text,Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { styles } from './styles';


const FloatingButton = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}> 
                <Image
        style={styles.iconoEdit}
        source={require('../../../assets/iconoEdit.png')}
        
      />    
            </TouchableOpacity>
        </View>
    )
}

export default FloatingButton