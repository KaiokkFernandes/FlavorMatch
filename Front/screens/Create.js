import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Card, Title, Paragraph, Button } from 'react-native-paper';


const Create = () => {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Button> Criar </Button> 
        </Card>
    </View>
  )
}

export default Create

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'red',
    margin: 10,
    borderRadius: 10,
  },
  container: {
    backgroundColor: 'red',
    margin: 10,
    borderRadius: 10,
  }
});

// form que abre calendario pra selecionar a data
// 