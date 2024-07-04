import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import RestaurantCard from './RestaurantCard'

export default function FeaturedRow({ title, description, restaurants }) {
  return (
    <View>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See all</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
        style={styles.scrollView}
      >
        {
            restaurants.map((restaurant, index)=> {
                return (
                    <RestaurantCard
                        item={restaurant}
                        key={index}
                    />
                )
            })
        }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16, // Substituição de 'px-4'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18, // Substituição de 'text-lg'
  },
  description: {
    color: '#6B7280', // Substituição de 'text-gray-500'
    fontSize: 12, // Substituição de 'text-xs'
  },
  seeAll: {
    color: 'orange',
    fontWeight: '600', // Substituição de 'font-semibold'
  },
  scrollContent: {
    paddingHorizontal: 15,
  },
  scrollView: {
    overflow: 'visible', // Substituição de 'overflow-visible'
    paddingVertical: 20, // Substituição de 'py-5'
  },
});
