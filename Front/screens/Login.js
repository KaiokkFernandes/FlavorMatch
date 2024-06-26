import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'
import { FullWindowOverlay } from 'react-native-screens';
import { Button } from 'react-native-paper';

export default function Home() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('')

  return (
    <View style={styles.container}>
    <View><Text style={styles.title}>FlavorMatch</Text></View>
    <View>
      <Text style={{ color: 'yellow', margin: 50 }}>Autenticação</Text>
      <Text style={styles.text1}>Insira seu usuário</Text>
      <TextInput
        style={styles.textBox}
        //placeholder="teste@teste"
        value={user}
        onChangeText={setUser}
       />
       <Text style={styles.text1}>Insira sua senha</Text>
       <TextInput
       style={styles.textBox}
        //placeholder="maionese123"
        value={password}
        onChangeText={setPassword}
        />

        <Button style={styles.button}> botão aqui</Button>
        
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