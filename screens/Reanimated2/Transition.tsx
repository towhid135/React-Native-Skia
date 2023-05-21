import React, {useState} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import AnimatedCard from '../../components/Reanimated2/AnimatedCard';
import Rp from '../../constant/Rp';
const assets = [
  require('../../assets/Images/card1.png'),
  require('../../assets/Images/card2.png'),
  require('../../assets/Images/card2.png'),
];

enum Cards {
  Card1 = 0,
  Card2 = 1,
  Card3 = 2,
}

const cards = [Cards.Card1, Cards.Card2, Cards.Card3];

const Transition = () => {
  const [reset, setReset] = useState(false);
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
              isResetPressed: reset,
            }}
          />
        );
      })}
      <Button title="Reset" onPress={() => setReset(prev => !prev)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default Transition;
