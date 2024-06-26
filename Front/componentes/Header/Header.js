import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Header = ({ userName, userImage }) => {
  return (
    <View style={styles.headerContainer}>
      <Image source={{ uri: userImage }} style={styles.userImage} />
      <Text style={styles.appName}>Flavor Match</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  appName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Header;
