import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fbd4e1',
        alignItems: 'center',
        justifyContent: 'center'
      },
      titulo: {
        width: "100%",
        padding: 20,
        paddingBottom:0,
        fontSize: 20,
        fontWeight: "bold",
        flex:1
      },
      subtitulo: {
        width: "100%",
        paddingLeft: 20,
        fontSize: 14,
        fontWeight: "400",
        flex:1,
        fontStyle: 'italic',
        color: "#7e7d7d"
      },
      contenido:{
        flex:17,
        padding: 20
      },
      cargaInfo:{
        flex:4,
        width:"100%",
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
      },
      items:{
        width: "100%",
        flex:7,
        borderWidth: 2,
        borderColor: "#f4634c",
        padding: 20,
        borderRadius: 20
      },
      apellido:{
        fontSize: 18,
        width:"75%",
        borderBottomWidth: 1,
        borderBottomColor: "#f4634c",
        height:35,
        padding:5
      },
      dni:{
        fontSize: 18,
        width:"75%",
        borderBottomWidth: 1,
        borderBottomColor: "#f4634c",
        height:35,
        padding:5
      },
      contenedorButton:{
        alignItems: 'center',
        justifyContent: 'center',
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
      modalTitle:{
        color: "#f4634c",
        fontSize: 18,
        width: "100%",
        fontWeight: "bold",
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
        backgroundColor: "#f4634c"
      },
      modalItem: {
        fontSize: 30
      },
      modalCenter:{
        flex:1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f87ca5"
      },
      modalView:{
        backgroundColor: "white",
        borderWidth: 2,
        borderRadius: 20,
        borderColor: "#f4634c",
        width:300,
        height:200,
        alignItems: "center",
        justifyContent: "center"
      }
});

export default styles;