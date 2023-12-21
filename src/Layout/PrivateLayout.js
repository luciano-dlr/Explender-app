import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { getHP } from '../utils/dimensions';


const PrivateLayout = ({ title, children }) => {

    const { goBack } = useNavigation();

    const flecha = '<=='

    return (
        <View style={{ flex: 1 }}>
            
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: getHP(2), backgroundColor: 'lightblue' }}>

                <TouchableOpacity onPress={goBack}>
                    <Text> {flecha}  </Text>
                </TouchableOpacity>

                <Text>{title}</Text>
                
            </View>

            {/* Contenido del componente leio */}
            <View style={{ flex: 1, padding: getHP(2) }}>
                {children}
            </View>
        </View>
    )
}

export default PrivateLayout