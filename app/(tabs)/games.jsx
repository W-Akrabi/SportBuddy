import { View, Text, SafeAreaView, FlatList, Image, RefreshControl } from 'react-native';
import { React, useEffect, useState } from 'react';
import { images } from '../../constants';
import SearchInput from '../../components/SearchInput';
import EmptyState from '../../components/EmptyState';
import { getAllGames } from '../../lib/appwrite';
import useAppwrite from '../../lib/useAppwrite';
import GameCard from '../../components/GameCard';

const groupGamesByDate = (games) => {
  return games.reduce((groups, game) => {
    // Replace comma with 'T' to convert to ISO format
    const formattedDate = game.datetime.replace(', ', 'T');
    const gameDate = new Date(formattedDate);
    
    // Extract date in YYYY-MM-DD format
    const date = gameDate.toISOString().split('T')[0]; 

    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(game);
    return groups;
  }, {});
};

const filterUpcomingGames = (games) => {
  const now = new Date();
  return games.filter(game => new Date(game.datetime) > now);
};

const Games = () => {
  const { data: games, refetch, isLoading } = useAppwrite(getAllGames);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  };

  if (isLoading) {
    return (
      <SafeAreaView className="bg-primary h-full">
        <Text className="text-center text-white">Loading...</Text>
      </SafeAreaView>
    );
  }

  const filteredGames = games ? filterUpcomingGames(games) : [];
  const groupedGames = filteredGames ? groupGamesByDate(filteredGames) : {};

  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        data={Object.keys(groupedGames)}
        keyExtractor={(item) => item}
        renderItem={({ item: date }) => (
          <View>
            <Text className="text-xl font-psemibold text-white px-4">{date}</Text>
            {groupedGames[date].map((game) => (
              <GameCard key={game.$id} game={game} />
            ))}
          </View>
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
                  resizeMode="contain"
                />
              </View>
            </View>
            <SearchInput />
            <View className="w-full flex-1 pt-5">
              <Text className="text-gray-100 text-lg font-pregular">
                Available sessions
              </Text>
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No games found"
            subtitle="Host a game for everyone to enjoy"
          />
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </SafeAreaView>
  );
}

export default Games;
