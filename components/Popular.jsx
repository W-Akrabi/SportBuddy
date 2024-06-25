import { View, Text, FlatList } from 'react-native'
import React from 'react'

const Popular = ( {games} ) => {
  return (
    <FlatList
    data={games}
    keyExtractor={(item) => item.$id}
    renderItem={({ item }) => (
        <Text className="text-3xl text-white">{item.id}</Text>
    )}
    horizontal
    />
  )
}

export default Popular