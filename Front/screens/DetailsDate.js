import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';


const RestaurantDetailsScreen = () => {
    return (
        <View style={styles.container}>
            <Card style={styles.card}>
                <Card.Title title="Sushi Place" subtitle="Especializado em comida japonesa" />
                <Card.Content>
                    <Image 
                        source={{ uri: '../assets/encontro/encontro1.jpg' }}
                        style={styles.image}
                    />
                    <View style={styles.info}>
                        <Text style={styles.infoText}>🌟 4.5 (200 avaliações)</Text>
                        <Text style={styles.infoText}>👥 4 pessoas confirmadas</Text>
                    </View>
                </Card.Content>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        width: '90%',
        backgroundColor: '#ffe8e8',
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    image: {
        width: '100%',
        height: 200,
    },
    info: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    infoText: {
        fontSize: 16,
        color: '#000',
    },
});

export default RestaurantDetailsScreen;
