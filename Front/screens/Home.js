import React from 'react';
import { View, Image, ScrollView, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const restaurantes = [
  { nome: "Sushi Place", tipo: "Japonês" },
  { nome: "Burger Town", tipo: "Americano" },
  { nome: "Pasta Central", tipo: "Italiano" },
  { nome: "Curry Corner", tipo: "Indiano" },
  { nome: "Taco Fiesta", tipo: "Mexicano" },
];

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: '../assets/logo/FlavorMatch.png' }} style={styles.logo} />  
        <Image source={{ uri: '../assets/perfil/Perfil.png' }} style={styles.userPhoto} />
      </View>
      <ScrollView style={styles.scrollView}>
        {restaurantes.map((restaurante, index) => (
          <Card style={styles.card} key={index}>
            <Card.Content>
              <Title>{restaurante.nome}</Title>
              <Paragraph>{restaurante.tipo}</Paragraph>
            </Card.Content>
          </Card>
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Form')}>
        <Text style={styles.buttonText}>Marcar Encontro</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#FF0000',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  logo: {
    width: 40,
    height: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  userPhoto: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  scrollView: {
    flex: 1,
  },
  card: {
    margin: 10,
    backgroundColor: 'red',
  },
  button: {
    backgroundColor: '#ff0000',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    margin: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Home;
