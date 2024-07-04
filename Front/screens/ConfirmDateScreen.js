import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';



const AppointmentConfirmationScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.confirmationContainer}>
      <Text style={styles.confirmationText}>Encontro Marcado! Tenha um bom apetite</Text>
      <Image source={{ uri: '../assets/encontro/GatinhoFlavorMatch.png' }} style={styles.confirmationImage} />
      <TouchableOpacity
       style={styles.detailsButton}
       onPress={() => navigation.navigate('RestaurantDetailsScreen')}
        >
       <Text style={styles.detailsButtonText}>Ver detalhes do encontro</Text>
</TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  confirmationContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#A41C1E'
  },
  confirmationText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    fontFamily: 'Roboto', 
    marginBottom: 20,
    textAlign: 'center'
  },
  confirmationImage: {
    width: 300, 
    height: 200, 
    marginBottom: 20
  },
  detailsButton: {
    backgroundColor: '#FF0000', 
    padding: 10,
    borderRadius: 5
  },
  detailsButtonText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Roboto' 
  }
});


export default AppointmentConfirmationScreen;  
