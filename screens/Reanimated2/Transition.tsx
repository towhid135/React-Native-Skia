import React, {useState} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import AnimatedCard from '../../components/Reanimated2/AnimatedCard';
import Rp from '../../constant/Rp';
import {
  useSharedValue,
  useDerivedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import Rh from '../../constant/Rh';
const assets = [
  require('../../assets/Images/card1.png'),
  require('../../assets/Images/card2.png'),
  require('../../assets/Images/card3.png'),
];

enum Cards {
  Card1 = 0,
  Card2 = 1,
  Card3 = 2,
}

const cards = [Cards.Card1, Cards.Card2, Cards.Card3];

const Transition = () => {
  const [reset, setReset] = useState(false);
  const isToggled = useSharedValue(0);
  const setToggle = () => {
    'worklet';
    if (isToggled.value === 0) isToggled.value = 1;
    else isToggled.value = 0;
  };
  const transition = useDerivedValue(() => {
    return withTiming(isToggled.value);
  });
  return (
    <View style={styles.container}>
      {cards.map((item, index) => {
        return (
          <AnimatedCard
            key={index}
            {...{
              imagePath: assets[index],
              cardHeight: Rp(500),
              cardWidth: Rp(800),
              index: index,
              isResetPressed: isToggled,
              transition: transition,
            }}
          />
        );
      })}
      <View
        style={{
          alignSelf: 'center',
          marginTop: Rh(800),
        }}>
        <Button title={reset ? 'Reset' : 'Set'} onPress={setToggle} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default Transition;
