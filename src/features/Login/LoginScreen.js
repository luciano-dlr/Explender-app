import { View, Text, TextInput, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { useLoginController } from './useLoginController';
import { styles } from './styles'

const LoginScreen = () => {

    const { handleLogin, dni, usuario, contrasena, setDni, setUsuario, setContrasena, isLoading } = useLoginController();

    //To do, mostrar las alertas del back al momento de responder el login

    //To Do Pedir al backend que guarde el barrio de cada usuario en el objeto de usuario, 
    //algo que haga referencia a que barrio pertenece el usuario 
    //https://mycountry.net.ar/Api/v1/Empresas
    // {
    //     "RECORD_ID": "D2658F3A-G",
    //     "CODIGO": "93",
    //     "CODIGOV": "93",
    //     "DESCRIP": "Cielos-Rocio-Cigarras",
    //     "CONNECTIONNAME": "cielos",
    //     "ZONA1": "Barrio",
    //     "ZONA2": "Mzna",
    //     "ZONA3": "Lote",
    //     "EXISTEUSUARIO": "1"
    // },


    // Ejemplo, que sucede si un usuario se muda de barrio
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

