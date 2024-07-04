import { Image, View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import React from 'react';
import * as Icon from 'react-native-feather';

export default function RestaurantCard({item}) {
    return (
        <TouchableWithoutFeedback>
            <View style={styles.cardContainer}>
                <Image style={styles.image} source={item.image} />
                <View style={styles.contentContainer}>
                    <Text style={styles.title}>{item.name}</Text>
                    <View style={styles.reviewContainer}>
                        <Text style={styles.reviewText}>
                            <Text style={styles.rating}>{item.stars}</Text>
                            <Text style={styles.reviewsCount}>
                                ({item.reviews} reviews) . <Text style={styles.category}>{item.category}</Text>
                            </Text>
                        </Text>
                    </View>
                    <View style={styles.locationContainer}>
                        <Icon.MapPin color="grey" width="15" height="15" />
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        marginRight: 24,
        backgroundColor: 'white',
        borderRadius: 30,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2
    },
    image: {
        height: 144,
        width: 256,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    contentContainer: {
        paddingHorizontal: 12,
        paddingBottom: 16,
        gap: 8,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingTop: 8
    },
    reviewContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    reviewText: {
        fontSize: 12,
    },
    rating: {
        color: '#34D399', // Tailwind green-500
    },
    reviewsCount: {
        color: '#4B5563', // Tailwind gray-700
    },
    category: {
        fontWeight: 'bold',
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    }
});