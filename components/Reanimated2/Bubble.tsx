import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';
import {SharedValue} from 'react-native-reanimated/lib/types/lib/reanimated2/commonTypes';
import Rp from '../../constant/Rp';

interface BubbleProps {
  progress: SharedValue<number>;
  start: number;
  end: number;
  size: number;
}

const Bubble: React.FC<BubbleProps> = props => {
  const {progress, start, end, size} = props;
  const bubbleAnimationStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      progress.value,
      [start, end],
      [0.5, 1],
      Extrapolate.CLAMP,
    );
    const opacity = interpolate(
      progress.value,
      [start, end],
      [1, 0.5],
      Extrapolate.CLAMP,
    );

    return {
      opacity,
      transform: [{scale}],
    };
  });
  const styles = StyleSheet.create({
    container: {
      height: Rp(size),
      width: Rp(size),
      borderRadius: Rp(size / 2),
      backgroundColor: '#3884ff',
    },
  });
  return <Animated.View style={[styles.container, bubbleAnimationStyle]} />;
};

export default Bubble;
