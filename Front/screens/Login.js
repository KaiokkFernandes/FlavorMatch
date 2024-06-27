import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'
import { FullWindowOverlay } from 'react-native-screens';
import { Button } from 'react-native-paper';
import axios from 'axios';

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  const authUser = async () => {
    try {
      const response = await axios.post('http://localhost:3333/session', {
        email: email,
        password: password        
      });
      console.log('Autenticado com sucesso:', response.data);
      Alert.alert("Sucesso", "Você está autenticado!");
    } catch (error) {
      console.error('Erro ao buscar os dados do usuário:', error);
    }
  };


  return (
    <View style={styles.container}>
    <View><Text style={styles.title}>FlavorMatch</Text></View>
    <View>
      <Text style={{ color: 'yellow', margin: 50 }}>Autenticação</Text>
      <Text style={styles.text1}>Insira seu usuário</Text>
      <TextInput
        style={styles.textBox}
        value={email}
        onChangeText={setEmail}
        keyboardType='email_adress'
       />
       <Text style={styles.text1}>Insira sua senha</Text>
       <TextInput
       style={styles.textBox}
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        />

        <Button style={styles.button}
        model="contained"
        onPress= { authUser }
        >Login</Button>
        
    </View>    
    </View>
    
  )
} 

const styles = StyleSheet.create({
  container: {
    //height: 100,
    paddingBottom: 500,
    backgroundColor: '#A50104',
    alignItems: 'center',
    paddingVertical: 100,
  },
  title: {
    fontSize: 24,
    color: 'white',
    marginTop: 10,
  },
  text1: {
    alignItems: 'center',
    color: '#FCAB10'
  },
  textBox: {
    alignItems: 'center',
    backgroundColor: '#fff',
    marginBottom: 10
    //color: '#'
  },
  button: {
    backgroundColor: '#FCAB10'
  }
});