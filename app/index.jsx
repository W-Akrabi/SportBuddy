import React from 'react';
import { withExpoSnack } from 'nativewind';
import { Redirect, router } from 'expo-router'
import { StatusBar } from 'expo-status-bar';
import { styled } from 'nativewind';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image, ScrollView, Text, View } from 'react-native';
import { images} from '../constants';
import CustomButton from '../components/CustomButton';
import {useGlobalContext} from '../context/GlobalProvider';
const StyledView = styled(View)
const StyledText = styled(Text)


const App = () => {
  const { isLoading, isLoggedIn } = useGlobalContext();
  
  if(isLoading && isLoggedIn) return <Redirect href="/games" />

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: '100%'
    }}>
        <View className="w-full justify-center
        items-center min-h-[85vh] px-4">
          <Image 
            source={images.logo1}
            className="w-[230px] h-[84px]"
            resizeMode='contain'
          />

          <Image
            source={images.onboarding}
            className="max-w-[320px] w-full h-[300px]"
            resizeMode='contain'
            />

          <View className="relative mt-5">
            <Text className="text-3xl text-white
            font-bold text-center">Sweat less, connect more.
             Find your next game</Text>
          </View>

          <CustomButton 
            title="Continue with Email"
            handlePress={() => router.push('/sign-in')}
            containerStyles="w-full mt-7"
            />
        </View>

      </ScrollView>

      <StatusBar backgroundColor='#161622'
      style='light'/>
      
    </SafeAreaView>
  );
}

// This demo is using a external compiler that will only work in Expo Snacks.
// You may see flashes of unstyled content, this will not occur under normal use!
// Please see the documentation to setup your application
export default withExpoSnack(App);