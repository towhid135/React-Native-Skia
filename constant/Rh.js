import {StyleSheet, Text, View, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');
export default Rh = value => {
  return height * (value / 1000);
};
