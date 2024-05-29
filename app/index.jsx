import React from 'react';
import { withExpoSnack } from 'nativewind';
import { Link } from 'expo-router'
import { styled } from 'nativewind';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image, ScrollView, Text, View } from 'react-native';
import { images} from '../constants';
import CustomButton from '../components/CustomButton';
const StyledView = styled(View)
const StyledText = styled(Text)

const App = () => {
  return (
    <SafeAreaView className="bg-black h-full">
      <ScrollView contentContainerStyle={{ height: '100%'}}>
        <View className="w-full justify-center
        items-center h-full px-4">
          <Image 
            source={images.ahmed}
            style={{ opacity: '0.2'}}
          />
          <Text className="absolute text-white text-center text-3xl font-pblack">SportBuddy</Text>
          <CustomButton 
            title="Continue with Email"
            handlePress={() => {}}
            containerStyles="w-full mt-7"
            />
        </View>

      </ScrollView>
      
    </SafeAreaView>
  );
}

// This demo is using a external compiler that will only work in Expo Snacks.
// You may see flashes of unstyled content, this will not occur under normal use!
// Please see the documentation to setup your application
export default withExpoSnack(App);