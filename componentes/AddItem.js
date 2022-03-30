import React, {useState } from 'react';
import { 
    View, 
    TextInput, 
    Pressable,
    Text,
    StyleSheet
  } from 'react-native';


function AddItem(props){
    const [ textApellido, setTextApellido] = useState();
    const [ textNombre, setTextNombre] = useState();
    const [ textDNI, setTextDNI] = useState();
    const [ textVerificado, setTextVerificado] = useState(false);

    const { onAddItem } = props;
    
    const onHandlerChangeText = (texto) => setTextApellido(texto);
    const onHandlerChangeDNI = (texto) => setTextDNI(texto);
    const onHandlerChangeNombre = (texto) => setTextNombre(texto);

    const onHandlerAddItem = () => {
        onAddItem(textApellido, textNombre, textDNI, textVerificado);
        
        setTextApellido("");
        setTextNombre("");
        setTextDNI("");
    }
    
    
    return (
        <View style={styles.cargaInfo}>
            <View>
                <TextInput
                placeholder="Apellido"
                value={textApellido}
                onChangeText={onHandlerChangeText}
                style={styles.apellido}
                
                />
                <TextInput
                placeholder="Nombre"
                value={textNombre}
                onChangeText={onHandlerChangeNombre}
                style={styles.apellido}
                />
                <TextInput
                placeholder="DNI"
                value={textDNI}
                onChangeText={onHandlerChangeDNI}
                style={styles.dni}
                />
            </View>
            
            <View style={styles.contenedorButton}>
                <Pressable style={styles.buttonApellido} onPress={onHandlerAddItem}>
                    <Text style={styles.text}>Agregar</Text>
                </Pressable>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    cargaInfo:{
        flex:4,
        width:"100%",
        flexDirection: "row",
      },
      apellido:{
        fontSize: 18,
        width:150,
        borderBottomWidth: 1,
        borderBottomColor: "#f4634c",
        height:35,
        padding:5
      },
      dni:{
        fontSize: 18,
        width:150,
        borderBottomWidth: 1,
        borderBottomColor: "#f4634c",
        height:35,
        padding:5
      },
      contenedorButton:{
        alignItems: 'center',
        justifyContent: 'center',
        padding: 50
      },
      buttonApellido: {
        backgroundColor: "#f4634c",
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 10,
        elevation: 3,
      },
      text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },
});

export default AddItem;