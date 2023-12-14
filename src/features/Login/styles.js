import { StyleSheet } from "react-native";
import { getHP, getWP } from "../../utils/dimensions";

export const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'space-between',
        padding:getHP(4),
        backgroundColor:'#fff',
        
      },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
    },
    form: {
        marginBottom: 16,
        gap:10
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 10,
        borderRadius:7,
        
    },
    button:{
        paddingHorizontal:20,
        paddingVertical:10,
        borderRadius:7,
        width:'100%',
        backgroundColor:'#880e4f',
    },
    buttonText:{
        fontSize:16,
        fontWeight:'600',
        color:'#fff',
        textAlign:"center",
    },
    imgLogoContainer:{
        height: 100,
        width:'100%',
        marginVertical:40

    },
    imgLogo:{
        flex: 1,
        resizeMode: 'contain',
        width: '100%',
        
    },
});