import React from 'react';
import {StyleSheet} from 'react-native';
import {
  Canvas,
  RoundedRect,
  SweepGradient,
  vec,
  BlurMask,
} from '@shopify/react-native-skia';

const BackgroundGradient = props => {
  const {width, height} = props;
  const canvaPadding = 40;
  return (
    <Canvas
      style={{height: height + canvaPadding, width: width + canvaPadding}}>
      <RoundedRect
        x={canvaPadding / 2}
        y={canvaPadding / 2}
        width={width}
        height={height}
        color="white"
        r={20} //border radius of rectangle
      >
        <SweepGradient
          c={vec((width + canvaPadding) / 2, (height + canvaPadding) / 2)}
          colors={['cyan', 'magenta', 'yellow', 'cyan']}
        />
        <BlurMask blur={10} style="solid" />
      </RoundedRect>
    </Canvas>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default BackgroundGradient;
