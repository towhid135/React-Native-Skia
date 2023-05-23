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
}

const size = Rp(80);

const Bubble: React.FC<BubbleProps> = props => {
  const {progress, start, end} = props;
  console.log('start: ', start);
  console.log('end: ', end);
  console.log('progress: ', progress);
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
    // console.log('scale: ', scale);
    return {
      opacity,
      transform: [{scale}],
    };
  });
  return <Animated.View style={[styles.container, bubbleAnimationStyle]} />;
};

const styles = StyleSheet.create({
  container: {
    height: size,
    width: size,
    borderRadius: size / 2,
    backgroundColor: '#3884ff',
  },
});
export default Bubble;
