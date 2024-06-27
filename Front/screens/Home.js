import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
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

// Componente HomeScreen
const Home = () => {
  return (
    <ScrollView style={styles.container}>
      {restaurantes.map((restaurante, index) => (
        <Card style={styles.card} key={index}>
          <Card.Content>
            <Title>{restaurante.nome}</Title>
            <Paragraph>{restaurante.tipo}</Paragraph>
          </Card.Content>
        </Card>
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
  },
});

export default Home;
