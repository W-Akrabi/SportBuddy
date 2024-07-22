import { View, Text, SafeAreaView, FlatList, Image, RefreshControl, Alert } from 'react-native'
import {React, useEffect, useState} from 'react'
import {images} from '../../constants'
import SearchInput from '../../components/SearchInput'
import Popular from '../../components/Popular'
import EmptyState from '../../components/EmptyState'
import {getAllGames} from '../../lib/appwrite'
import useAppwrite from '../../lib/useAppwrite'
import GameCard from '../../components/GameCard'

const Games = () => {
  const { data: games, refetch } = useAppwrite(getAllGames);

  const [refreshing, setRefreshing] = useState(false)
  
  const onRefresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  }

  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        data={games}
        keyExtractor={(item, index) => {return item.$id;}}
        renderItem={({ item }) => (
          <GameCard game={item} />
        )}
        ListHeaderComponent={() => (
          <View className="my-6 px-4 space-y-6">
            <View className="justify-between items-start flex-row mb-6">
              <View>
                <Text className="font-pmedium text-sm text-gray-100">
                  Welcome Back
                </Text>
                <Text className="text-2xl font-psemibold text-white">
                  Waleed
                </Text>
              </View>

              <View className="mt-1.5">
                <Image
                source={images.logo1}
                className="w-20 h-10"
                resizeMode='contain'/>
              </View>

            </View>

            <SearchInput />
            
            <View className="w-full flex-1 pt-5 pb-8">
              <Text className="text-gray-100 text-lg font-pregular mb-3">
                available sessions
              </Text>
              
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
          title="No games found"
          subtitle="host a game for everyone to enjoy" />
        )}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
      />
    </SafeAreaView>
  )
}

export default Games