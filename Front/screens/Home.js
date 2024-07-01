import React from 'react';
import { ScrollView, StyleSheet, Image, View, Pressable } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

// Dados dos restaurantes
const restaurantes = [
  { nome: "Sushi Place", tipo: "Japonês" },
  { nome: "Burger Town", tipo: "Americano" },
  { nome: "Pasta Central", tipo: "Italiano" },
  { nome: "Curry Corner", tipo: "Indiano" },
  { nome: "Taco Fiesta", tipo: "Mexicano" },
  // Adicione mais 10 restaurantes aqui
];  

//Vo usar Pressable pra fazer o card... Pressionável. A imagem eu penso por último.
//Agora é colocar um form e gerar o encontro. A ILUSÃO COMEÇA AGORAAAAAAAAAAAAAAA
//Abrir uma tela diferente ao clicar no encontro.

// Componente HomeScreen
const Home = () => {
  return (
    <ScrollView style={styles.container}>
      {restaurantes.map((restaurante, index) => (
        <Pressable style={styles.press}>
        <Card style={styles.card} key={index}>
          <Card.Content style={styles.content}>
            <Title>{restaurante.nome}</Title>
            <Paragraph style={{flex: 1}}>{restaurante.tipo}</Paragraph>
            <Image
            style={styles.splash}
            source={require('../assets/cosmo.jpg')}
            resizeMode='contain'
            />
          </Card.Content>
        </Card>
        </Pressable>
      ))}
    </ScrollView>
  );
};

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  card: {
    margin: 10,
    backgroundColor: 'red', 
    flex: 1
  },
  splash: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
    marginLeft: 1100,
    paddingTop: 200,
    flex: 1,
    // aspectRatio: 1 
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    flexGrow: 1,
    flexShrink: 1 
  },
  button: {
    opacity: 0.1,
  },
  press: {
    flexGrow: 1,
    flex: 1,
    height: 100,
  }

});

export default Home;