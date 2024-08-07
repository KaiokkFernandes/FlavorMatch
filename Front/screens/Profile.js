import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const UserProfile = () => {
  const [user, setUser] = useState({
    profileImage: require('../assets/perfil/Perfil.png'),
    name: 'Lucas Medeiros',
    username: 'CasLu',
    email: 'luquinhas33@gmail.com',
    bio: 'Gosto de comida japonesa e de jogar videogame. AMO A ROBERTA!!',
    favoriteFoods: [
      { name: 'Japonesa', icon: 'rice' },
      { name: 'Mexicana', icon: 'taco' },
      // Adicione mais comidas e ícones conforme necessário
    ],
  });

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.profileImage}
          source={user.profileImage}
        />
        <TouchableOpacity>
          <Text style={styles.editProfileText}>Editar imagem de perfil</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.infoRow}>
          <Text style={styles.infoTitle}>Nome</Text>
          <Text style={styles.infoText}>{user.name}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoTitle}>Username</Text>
          <Text style={styles.infoText}>@{user.username}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoTitle}>Email</Text>
          <Text style={styles.infoText}>{user.email}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoTitle}>Bio</Text>
          <Text style={styles.infoText}>{user.bio}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoTitle}>Comidas Favoritas</Text>
          <View style={styles.foodIcons}>
            {user.favoriteFoods.map((food, index) => (
              <Icon key={index} name={food.icon} size={24} color="#444444" />
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  header: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  editProfileText: {
    color: '#1C6DD0',
    fontSize: 16,
  },
  infoContainer: {
    backgroundColor: '#FFFFFF',
    marginTop: 10,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 25,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  infoTitle: {
    fontWeight: 'bold',
    color: '#444444',
  },
  infoText: {
    color: '#444444',
  },
  foodIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default UserProfile;
