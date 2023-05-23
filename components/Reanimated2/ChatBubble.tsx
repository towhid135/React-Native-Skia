import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SharedValue} from 'react-native-reanimated/lib/types/lib/reanimated2/commonTypes';
import Rp from '../../constant/Rp';
import Bubble from './Bubble';
import Animated, {interpolate} from 'react-native-reanimated';

const width = Rp(800);

interface ChatBubbleProps {
  progress: SharedValue<number>;
}

const bubbleAra = [0, 1, 2];

const ChatBubble: React.FC<ChatBubbleProps> = props => {
  const {progress} = props;
  return (
    <View style={styles.container}>
      {bubbleAra.map((item, index) => {
        const delta = 1 / bubbleAra.length;
        const start = index * delta;
        const end = start + delta;
        return (
          <Bubble key={index} progress={progress} start={start} end={end} />
        );
      })}
    </View>
  );
};

export default ChatBubble;

const styles = StyleSheet.create({
  container: {
    height: width,
    width: width,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#d3d3d3',
    borderTopLeftRadius: width / 2,
    borderTopRightRadius: width / 2,
    borderBottomLeftRadius: width / 2,
  },
});
