import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import axios from 'axios';

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:3333/me', {
          headers: {
            'Authorization': `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlVXNlcjJAYWRtIiwiaWF0IjoxNzE3NTAyNDU2LCJleHAiOjE3MjAwOTQ0NTYsInN1YiI6ImNsdzV0a2s3ZDAwMDBidjRkMGdhaDhwdDUifQ.L_QR6I2U4jsJZxDtgtOwS0LvngXRYNHIHLtHN18djyM"}`,
          }
        });
        setUser(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar os dados do usuário:', error);
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (!user) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Não foi possível carregar os dados do usuário.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.profileImage}
          source={{ uri: user.profileImage || 'https://linkparadefault.com/foto.jpg' }}
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
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
});

export default UserProfile;
