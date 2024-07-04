import { View, Text } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

export default function categories() {
    return (
        <View className="mt-4">
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="overflow-visible"
            contentContainerStyle={{
                paddingHorizontal: 15
            }}
        >

        </ScrollView>
            
        </View>
    )
}