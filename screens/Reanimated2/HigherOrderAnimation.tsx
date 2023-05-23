import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import ChatBubble from '../../components/Reanimated2/ChatBubble';
import {
  useSharedValue,
  withTiming,
  withRepeat,
  Easing,
} from 'react-native-reanimated';
import {withPause} from 'react-native-redash';
import Rp from '../../constant/Rp';

const easing = Easing.inOut(Easing.ease);
const HigherOrderAnimation: React.FC = () => {
  const progress = useSharedValue(0);
  const paused = useSharedValue(false);
  const [state, setState] = useState(false);
  useEffect(() => {
    progress.value = withPause(
      withRepeat(withTiming(1, {duration: 1000}), -1, true),
      paused,
    );
  }, [paused, progress]);
  const btnHandler = () => {
    setState(prev => !prev);
    paused.value = !paused.value;
  };
  return (
    <View style={styles.container}>
      <ChatBubble width={800} height={800} progress={progress} />
      <View style={{marginTop: Rp(25)}}>
        <Button title={state ? 'Pause' : 'Start'} onPress={btnHandler} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default HigherOrderAnimation;
