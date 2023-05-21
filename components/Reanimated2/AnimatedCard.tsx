import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Card from './Card';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  useDerivedValue,
} from 'react-native-reanimated';
import {mix} from 'react-native-redash';

interface AnimatedCardProps {
  imagePath: string;
  cardHeight: number;
  cardWidth: number;
  index: number;
  isResetPressed: boolean;
}

const AnimatedCard = (props: AnimatedCardProps) => {
  const {imagePath, cardHeight, cardWidth, index, isResetPressed} = props;
  const index_ = useSharedValue(index);
  const rotation = useSharedValue(0);
  useEffect(() => {
    console.log('inside useEffect');
    if (isResetPressed)
      rotation.value = interpolate(index_.value, [0, 1], [0, Math.PI / 6]);
    console.log('rotaion value: ', rotation.value);
    // else rotation.value = 0;
  }, [isResetPressed]);
  //   const rotationStyle = useSharedValue(() => {
  //     rotation.value = (index - 1) * mix(index_.value, 0, Math.PI / 6);
  //     return {
  //       transform: [{rotate: `${rotation.value}deg`}],
  //     };
  //   });

  return (
    <Animated.View style={[styles.container]}>
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
    transform: [{rotate: '45.9deg'}],
  },
});
