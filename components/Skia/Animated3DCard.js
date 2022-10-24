import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import BackgroundGradient from './BackgroundGradient';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  Extrapolate,
  withTiming,
} from 'react-native-reanimated';
import {
  GestureHandlerRootView,
  GestureDetector,
  Gesture,
} from 'react-native-gesture-handler';

const {height, width} = Dimensions.get('window');

const HEIGHT = 256;
const WIDTH = width * 0.9;
const CARD_WIDTH = WIDTH - 5;
const CARD_HEIGHT = HEIGHT - 5;

//top right corner -> x=5deg,y=5deg
//bottom right corner -> x= -5deg,y=5deg
//top left corner -> x= -5deg,y= -5deg
//bottom left corner -> x=5deg,y= -5deg

const Animated3DCard = () => {
  const rotateX = useSharedValue(0);
  const rotateY = useSharedValue(0);
  const gesture = Gesture.Pan()
    .onBegin(event => {
      rotateX.value = withTiming(
        interpolate(event.y, [0, CARD_HEIGHT], [10, -10], Extrapolate.CLAMP),
      );
      rotateY.value = withTiming(
        interpolate(event.x, [0, CARD_WIDTH], [-10, 10], Extrapolate.CLAMP),
      );
    })
    .onUpdate(event => {
      // console.log('event.x', event.x);
      // console.log('event.y', event.y);
      rotateX.value = interpolate(
        event.y,
        [0, CARD_HEIGHT],
        [10, -10],
        Extrapolate.CLAMP,
      );
      rotateY.value = interpolate(
        event.x,
        [0, CARD_WIDTH],
        [-10, 10],
        Extrapolate.CLAMP,
      );
    })
    .onFinalize(() => {
      rotateX.value = withTiming(0);
      rotateY.value = withTiming(0);
    });
  const viewAnimationStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {perspective: 400},
        {rotateX: `${rotateX.value}deg`},
        {rotateY: `${rotateY.value}deg`},
      ],
    };
  });
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <View style={styles.container}>
        <BackgroundGradient width={WIDTH} height={HEIGHT} />
        <GestureDetector gesture={gesture}>
          <Animated.View
            style={[styles.CardView, viewAnimationStyle]}></Animated.View>
        </GestureDetector>
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  CardView: {
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    backgroundColor: 'black',
    position: 'absolute',
    borderRadius: 20,
    //zIndex: 300,
  },
});

export default Animated3DCard;
