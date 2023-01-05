import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import {PanGestureHandler} from 'react-native-gesture-handler';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Card from '../../components/Reanimated2/Card';
import Animated, {
  useAnimatedStyle,
  useAnimatedGestureHandler,
  useSharedValue,
  withDecay,
} from 'react-native-reanimated';
import Rp from '../../constant/Rp';
import {clamp,withBouncing} from 'react-native-redash'

const {height, width} = Dimensions.get('window');

const cardHeight = Rp(500);
const cardWidth = Rp(800);

const PanGesture = () => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const gestureEvent = useAnimatedGestureHandler({
    onStart: (event, ctx) => {
      ctx.offsetX = translateX.value;
      ctx.offsetY = translateY.value;
    },
    onActive: (event, ctx) => {
      translateX.value = clamp(ctx.offsetX + event.translationX,0,width-cardWidth);
      translateY.value = clamp(ctx.offsetY + event.translationY,0,height-cardHeight);
    },
    onEnd: event => {
      translateX.value = withBouncing(withDecay({
        velocity: event.velocityX,
      }),0,width - cardWidth)
      translateY.value = withBouncing(withDecay({
        velocity: event.velocityY,
      }),0,height-cardHeight)
    },
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: translateX.value},
        {translateY: translateY.value},
      ],
    };
  });
  return (
    <View style={styles.container}>
      <PanGestureHandler onGestureEvent={gestureEvent}>
        <Animated.View style={[styles.cardContainerView, animatedStyle]}>
          <Card cardHeight={cardHeight} cardWidth={cardWidth} />
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainerView: {
    flex: 1,
  },
});
export default PanGesture;
