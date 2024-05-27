import React from 'react';
import { withExpoSnack } from 'nativewind';
import { Link } from 'expo-router'
import { Text, View } from 'react-native';
import { styled } from 'nativewind';

const StyledView = styled(View)
const StyledText = styled(Text)

const App = () => {
  return (
    <StyledView className="flex-1 items-center justify-center bg-white">
      <StyledText className="text-3xl font-pblack">Waleed</StyledText>
      <Link href='/profile' style={{ color: 'blue' }}> Go to profile</Link>
    </StyledView>
  );
}

// This demo is using a external compiler that will only work in Expo Snacks.
// You may see flashes of unstyled content, this will not occur under normal use!
// Please see the documentation to setup your application
export default withExpoSnack(App);