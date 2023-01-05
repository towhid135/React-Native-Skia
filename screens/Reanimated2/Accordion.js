import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Animated, {
  Layout,
  FadeIn,
  FadeOut,
  FadeInUp,
  FadeOutUp,
  FadeOutDown,
} from 'react-native-reanimated';
import Rp from '../../constant/Rp';

//accordion
const Accordion = () => {
  const [show, setShow] = useState(false);
  return (
    <View style={styles.mainContainer}>
      <Animated.View
        layout={Layout}
        entering={FadeInUp.duration(300)}
        exiting={FadeOutUp.duration(300)}
        style={{
          //   borderWidth: 1,
          //   borderColor: 'black',
          width: Rp(80),
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={styles.touchStyle}
          onPress={() => setShow(prev => !prev)}
          activeOpacity={0.7}>
          <Text style={styles.touchTextStyle}>Touch Here To See Details</Text>
        </TouchableOpacity>
        {show && (
          <Animated.View
            layout={Layout}
            entering={FadeInUp.duration(1000)}
            exiting={FadeOutUp.duration(1000)}
            style={styles.accordionTextHolderView}>
            <Text style={styles.accordionText}>
              The accordion is a graphical control element comprising a
              vertically stacked list of items, such as labels or thumbnails.
              Each item can be "expanded" or "collapsed" to reveal the content
              associated with that item.
            </Text>
          </Animated.View>
        )}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  touchStyle: {
    // shadowColor: 'black',
    // shadowOpacity: 0.8,
    // shadowRadius: 10,
    // shadowOffset: {width: 0, height: 2},
    width: Rp(800),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    // borderColor: 'green',
  },
  touchTextStyle: {
    color: 'black',
    padding: Rp(5),
    fontWeight: 'bold',
  },
  accordionTextHolderView: {
    width: Rp(800),
    backgroundColor: 'gray',
    borderWidth: 1,
  },
  accordionText: {
    maxWidth: '80%',
    fontSize: 12,
    color: 'black',
    textAlign: 'center',
  },
});
export default Accordion;
