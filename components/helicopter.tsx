import React from 'react';
import { StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  withSequence,
} from 'react-native-reanimated';

import { ThemedText } from '@/components/ThemedText';

export function HelicopterHover() {
  const hoverAnimation = useSharedValue(0);

  // Define the hover animation sequence
  hoverAnimation.value = withRepeat(
    withSequence(
      withTiming(-10, { duration: 500 }), // Move up
      withTiming(10, { duration: 500 }) // Move down
    ),
    -1, // Repeat indefinitely
    true // Reverse direction after each sequence
  );

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: hoverAnimation.value }],
  }));

  return (
    <Animated.View style={[styles.helicopter, animatedStyle]}>
      <ThemedText style={styles.text}>🍫</ThemedText>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  helicopter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
  },
});
