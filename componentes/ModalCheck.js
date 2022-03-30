import React from "react";
import { 
  StyleSheet, 
  Text, 
  View, 
  Pressable,  
  Modal
} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
function ModalCheck(props){
    const { visible, onCheck, item, onCancel} = props;
    
    return(
        <Modal
            animationType="fade"
            visible={visible}
            transparent={true}
        >
            <View style={styles.modalCenter}>
            <View style={styles.modalView}>
                <View style={styles.contenedorTitulo}>
                    <Text style={styles.modalTitle}>Alumno Seleccionado</Text>
                    <AntDesign name="closecircle" size={24} color="#f87ca5" onPress={onCancel.bind(this)} style={styles.textoTitulo} />
                </View>
                <View>
                    <Text style={styles.modalMenssage}>Desea verificar al alumno?</Text>
                </View>
                <View  style={styles.modalItem}>
                    <Text>ALUMNO: {item.apellido}, {item.nombre} </Text>
                    <Text> DNI: {item.dni}</Text>
                </View>
                <View style={{marginTop: 10}}>
                    <Pressable style={styles.buttonApellido} onPress={onCheck.bind(this, item.id)}>
                        <Text style={styles.text}>Confirmar</Text>
                    </Pressable>
                </View>
            </View>
            </View>
            
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalTitle:{
        color: "#6dcf55",
        fontSize: 18,
        width: "100%",
        fontWeight: "bold",
        paddingLeft:10
      },
      modalMenssage:{
        marginBottom:10,
        justifyContent: "center",
        alignItems: "center",
        fontStyle: 'italic',
        textDecorationLine: 'underline',
        fontSize: 15
      },
      modalButton:{
        marginTop: 15,
        backgroundColor: "#6dcf55"
      },
      modalItem: {
        fontSize: 30
      },
      modalCenter:{
        flex:1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#a8d59d"
      },
      modalView:{
        backgroundColor: "white",
        borderWidth: 2,
        borderRadius: 20,
        borderColor: "#6dcf55",
        width:300,
        height:200,
        alignItems: "center",
        justifyContent: "center"
      },
      contenedorTitulo:{
          width: 270,
          flexDirection: "row",
          marginTop: 0,
          paddingBottom:20
      },
      textoTitulo:{
        color: '#6dcf55',
        fontWeight: 'bold',
        fontSize: 32,
        marginTop:0,
        right:30
      },
      contenedorButton:{
        alignItems: 'center',
        justifyContent: 'center',
      },
      buttonApellido: {
        backgroundColor: "#6dcf55",
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

export default ModalCheck;