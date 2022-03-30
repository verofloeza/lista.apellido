import React, {useState} from "react";
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput,
  Pressable, 
  FlatList
} from 'react-native';
import { EvilIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 

import ModalDelete from "./componentes/Modal";
import ModalCheck from "./componentes/ModalCheck";
import AddItem from "./componentes/AddItem";


export default function App() {
  const [ counter, setCounter] = useState(1);
  const [ textApellido, setTextApellido] = useState();
  const [ textNombre, setTextNombre] = useState();
  const [ textDNI, setTextDNI] = useState();
  const [ listItem, setListItem] = useState([]);
  const [ textVerificado, setTextVerificado] = useState(false);
  
  const addItem = (textApellido, textNombre, textDNI, textVerificado) =>{
    if(textApellido!==""){
      setListItem (currentItems => 
        [... currentItems, {id: counter, apellido: textApellido, dni: textDNI, nombre :textNombre, verificado:textVerificado}]
      ),
      setTextApellido(""),
      setTextNombre(""),
      setTextDNI(""),
      setCounter(counter + 1)
      
    }
  };
  
  const renderItem = data =>
    <Text 
      key={data.item.id} 
      id={data.item.id} 
      style={styles.listItem} 
      
    >
      {data.item.id}) {data.item.apellido}, {data.item.nombre} - DNI: {data.item.dni} 
      <EvilIcons 
        name="trash" 
        size={32} 
        color="red" 
        onPress={onHandlerModal.bind(this, data.item.id)}
      />
      {
        data.item.verificado === true ? 
        <AntDesign 
          name="checkcircle" 
          size={24} 
          color="green" 
          onPress={onHandlerModalCheck.bind(this, data.item.id)}
        />
          
          :

          <AntDesign 
            name="checkcircle" 
            size={24} 
            color="black" 
            onPress={onHandlerModalCheck.bind(this, data.item.id)}
          />
      }
      
    </Text>
  /* Modal*/
  const [ itemSelected, setItemSelected] = useState({});
  const [ modalVisible, setModalVisible] = useState(false);
  const [ modalCheckVisible, setModalCheckVisible] = useState(false);

  const onHandlerDelete = id => {
    setListItem (currentItems => currentItems.filter( item=> item.id  !== id));
    setItemSelected({});
    setModalVisible(!modalVisible);
  }

  const onHandlerCheck = id => {

    setItemSelected(
      listItem.map( 
        item => 
          {
            item.id === id ?
            item.verificado = !textVerificado 
            :
            item.verificado
          }
          )
        );
    setTextVerificado(false)
    setItemSelected({});
    setModalCheckVisible(!modalCheckVisible);
    

    return( listItem);
    
  }

  const onHandlerModal = id =>{
    setItemSelected(listItem.filter( item=> item.id === id)[0]);
    setModalVisible(!modalVisible);
  }

  const onHandlerModalCheck = id =>{
    setItemSelected(listItem.filter( item=> item.id === id)[0]);
    setModalCheckVisible(!modalCheckVisible);
  }

  const closeModal = () => {
    setModalVisible(!modalVisible);
  }
  const closeModalCheck = () => {
    setModalCheckVisible(!modalCheckVisible);
  }
  
  /* !Modal */
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>LISTA DE ALUMNOS</Text>
      <Text style={styles.subtitulo}>Complete el formulario</Text>
      
      <View style={styles.contenido}>

      <AddItem onAddItem={addItem}/>

        <View style={styles.items}>
          <FlatList
            data={listItem}
            renderItem={renderItem}
            keyExtractor= { item => item.id}
            
          />
        </View>
      </View>
      <ModalDelete
        onDelete={onHandlerDelete} 
        item={itemSelected} 
        visible={modalVisible} 
        onCancel={closeModal}
      />
      <ModalCheck
        onCheck={onHandlerCheck} 
        item={itemSelected} 
        visible={modalCheckVisible} 
        onCancel={closeModalCheck}
      />
    </View>
  );
}

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
  },
  items:{
    width: 350,
    flex:7,
    borderWidth: 2,
    borderColor: "#f4634c",
    padding: 20,
    borderRadius: 20
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
  listItem:{
    fontSize: 18
  }
});
