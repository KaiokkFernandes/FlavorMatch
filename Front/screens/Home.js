// Importa React e os componentes necessários do React Native
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../componentes/Header/Header';
// Importa o Header que você criou
  // Ajuste o caminho conforme necessário

export default function Home() {
  return (
    <View style={styles.container}>
      <Header userImage="https://linkparaaimagem.com/foto.jpg" />
      {/* Outros componentes da tela Home podem ser colocados aqui */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
