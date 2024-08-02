import { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { router } from "expo-router";

const formatDateTime = (datetime) => {
  const date = new Date(datetime.replace(',', 'T'));
  const options = { weekday: 'short', hour: '2-digit', hour12: true, timeZone: 'UTC'};
  return date.toLocaleDateString(undefined, options);
};

const GameCard = ({ game: {title, image, price, datetime, maxparticipants, users} }) => {
  const formattedDateTime = formatDateTime(datetime);
  return (
    <TouchableOpacity onPress={() => router.push('/host')}
    activeOpacity={0.7}>
      <View className="flex-col items-center px-4 mb-10">
        <View className="flex-row items-center gap-3">
          <View className="justify-center items-center flex-row flex-1">
            <View className="w-[46px] h-[46px] rounded-lg border border-white justify-center items-center p-0.5">
              <Image source={{ uri: image }} className="w-full h-full rounded-lg" resizeMode="cover" />
            </View>
            <View className="justify-center flex-1 ml-3 gap-y-1">
              <Text className="text-white font-psemibold text-sm" numberOfLines={1}>{title}</Text>
              <Text className="text-base text-white font-pregular" numberOfLines={1}>{price}AED  ⚽Game  {maxparticipants/2} vs {maxparticipants/2}</Text>
            </View>
          </View>
          <View className="pt-2">
            <Text className="text-gray-100 text-base">{formattedDateTime}</Text>
            <Text className="text-gray-100 text-base self-end">{users.length}/{maxparticipants} </Text> 
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default GameCard