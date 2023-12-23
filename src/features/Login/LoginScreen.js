import { View, Text, TextInput, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { useLoginController } from './useLoginController';
import { styles } from './styles'

const LoginScreen = () => {

    const { handleLogin, dni, usuario, contrasena, setDni, setUsuario, setContrasena, isLoading } = useLoginController();

    //To do, mostrar las alertas del back al momento de responder el login
    return (
        <View style={styles.container}>

            <View>

                <View style={styles.imgLogoContainer}>

                    <Image source={require('../../../assets/eXPlenderLogo.png')} style={styles.imgLogo} />

                </View>

                <View style={styles.form}>

                    <TextInput
                        style={styles.input}
                        placeholder="Num. de documento"
                        keyboardType="numeric"
                        maxLength={8}
                        value={dni}
                        onChangeText={(text) => setDni(text)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Usuario"
                        value={usuario}
                        onChangeText={(text) => setUsuario(text)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Contraseña"
                        secureTextEntry={true}
                        value={contrasena}
                        onChangeText={(text) => setContrasena(text)}
                    />

                </View>

            </View>

            <TouchableOpacity style={styles.button} onPress={handleLogin} >
                {
                    isLoading && <ActivityIndicator />
                }
                <Text style={styles.buttonText}>Ingresar</Text>

            </TouchableOpacity>

        </View>
    );
};

export default LoginScreen;

