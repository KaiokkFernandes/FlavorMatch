/*import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, Alert } from 'react-native';
import axios from 'axios';

function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const authUser = async () => {
    try {
      const response = await axios.post('http://localhost:3333/session', {
        email: email,
        password: password
      });
      Alert.alert("Sucesso", "Você está autenticado!");
      navigation.navigate('Home');
    } catch (error) {
      console.error('Erro na autenticação:', error);
      Alert.alert("Erro", "Falha na autenticação!");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>FlavorMatch</Text>
      <TextInput
        style={styles.textBox}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        keyboardType='email-address'
      />
      <TextInput
        style={styles.textBox}
        value={password}
        onChangeText={setPassword}
        placeholder="Senha"
        secureTextEntry={true}
      />
      <Button
        title="Login"
        onPress={authUser}
        color="#FCAB10"
      />
    </View>
  );
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

export default LoginScreen;

*/