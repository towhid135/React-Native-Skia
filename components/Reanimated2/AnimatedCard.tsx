import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import Card from './Card';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  useDerivedValue,
  withTiming,
  withSpring,
  SharedValue,
  Extrapolate,
} from 'react-native-reanimated';
import {mix} from 'react-native-redash';
const {width} = Dimensions.get('window');
const origin = -(width / 2 - 8 * 2);

interface AnimatedCardProps {
  imagePath: string;
  cardHeight: number;
  cardWidth: number;
  index: number;
  isResetPressed: SharedValue<any>;
  transition: any;
}

const AnimatedCard = (props: AnimatedCardProps) => {
  const {imagePath, cardHeight, cardWidth, index, isResetPressed, transition} =
    props;
  const index_ = useSharedValue(index);
  const rotation = useSharedValue(0);
  // useEffect(() => {
  //   console.log('inside useEffect');
  //   if (isResetPressed)
  //     rotation.value = interpolate(index_.value, [0, 1], [0, Math.PI / 6]);
  //   console.log('rotaion value: ', rotation.value);
  //   // else rotation.value = 0;
  // }, [isResetPressed]);
  const rotationStyle = useAnimatedStyle(() => {
    // rotation.value = isResetPressed.value
    //   ? withSpring(((index - 1) * Math.PI) / 6, {damping: 100})
    //   : withTiming(0);

    rotation.value = isResetPressed
      ? interpolate(
          transition.value,
          [0, 1],
          [0, ((index - 1) * Math.PI) / 6],
          Extrapolate.CLAMP,
        )
      : 0;
    return {
      transform: [
        {translateX: origin},
        {rotate: `${rotation.value}rad`},
        {translateX: -origin},
      ],
    };
  });

  const rotate = isResetPressed ? ((index - 1) * Math.PI) / 6 : 0;
  console.log('index: ', index);
  console.log('isResetPressed: ', isResetPressed);
  console.log('rotate: ', rotate);

  return (
    <Animated.View style={[styles.container, rotationStyle]}>
      <Card
        imagePath={imagePath}
        cardHeight={cardHeight}
        cardWidth={cardWidth}
      />
    </Animated.View>
  );
};

export default AnimatedCard;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
