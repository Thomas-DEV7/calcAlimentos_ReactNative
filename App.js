import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native';
import Calc from './components/Calc';

export default function App() {
  const [conv, setConv] = useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.texto}> Quantidade de convidados: </View>
        <TextInput
          style={styles.input}
          value={conv}
          onChangeText={(value)=>setConv(value)}
        />
      </View>
      <View>
        <Calc conv={conv}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row:{
    width:'100%',
    marginTop:10
  },
  input:{
    width:'80%',
    borderWidth:1,
    marginLeft:'10%',
    fontSize:30,
    borderRadius:6
  },
  texto:{
    fontSize:30,
    marginLeft:'10%'
  }
});