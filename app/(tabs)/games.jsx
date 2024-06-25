import { View, Text, SafeAreaView, FlatList, Image, RefreshControl } from 'react-native'
import {React, useState} from 'react'
import {images} from '../../constants'
import SearchInput from '../../components/SearchInput'
import Popular from '../../components/Popular'
import EmptyState from '../../components/EmptyState'

const Games = () => {
  const [refreshing, setRefreshing] = useState(false)
  const onRefresh = async () => {
    setRefreshing(true);
    //re call games -> if any videos appeard
    setRefreshing(false);
  }

  return (
    <SafeAreaView className="bg-black h-full">
      <FlatList
        data={[{ id: 1}, {id: 2}, {id: 3}]}
        keyExtractor={(item) => item.$id}
        renderItem={({item}) => (
          <Text className="text-3xl text-white">{item.id}</Text>
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
              
              <Popular games={[{id: 1}, {id: 2}, {id: 3}] ?? []} />
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