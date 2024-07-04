import { View, Text, TextInput, StyleSheet } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import * as Icon from 'react-native-feather';
import { ScrollView } from 'react-native-gesture-handler';
import { featured } from '../constantes';
import FeaturedRow from '../componentes/Header/featuredRow';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      {/* search bar */}
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <Icon.Search height={25} width={25} stroke="gray" />
          <TextInput placeholder="Restaurantes" style={styles.textInput} />
          <View style={styles.locationContainer}>
            <Icon.MapPin height={20} width={20} stroke="gray" />
            <Text style={styles.locationText}>Santa Maria, SM</Text>
          </View>
        </View>
        <View style={styles.filterIconContainer}>
          <Icon.Sliders height={20} width={20} strokeWidth={2.5} stroke="white" />
        </View>
      </View>


      {/* main */}

      <ScrollView showsVerticalScrollIndicator={false}
        contentContainerStyle={{
            paddingBottom: 20
        }}
      >
        {/* categories deveria ser chamado aqui. Retirado por motivos de Kkkaio */}
        


        {/*featured*/}
        <View ClassName="mt-5">
          {
            [featured, featured, featured].map((item,index)=>{
              return (
                <FeaturedRow 
                  key={index}
                  title={item.title}
                  restaurants={item.restaurants}
                  description={item.description}
                />
              )
            })
          }
        </View>



      </ScrollView>

      



    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    padding: 8,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#D1D5DB',
  },
  textInput: {
    flex: 1,
    marginLeft: 8,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderLeftWidth: 1,
    borderLeftColor: '#D1D5DB',
    paddingLeft: 8,
    marginLeft: 8,
  },
  locationText: {
    color: '#6B7280',
  },
  filterIconContainer: {
    padding: 8,
    backgroundColor: '#D1D5DB',
    borderRadius: 25,
    marginLeft: 8,
  },
});
