import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Rp from '../../constant/Rp';

const Card = props => {
  const {imagePath, cardHeight, cardWidth} = props;
  return (
    <Image source={imagePath} style={{height: cardHeight, width: cardWidth}} />
  );
};

const styles = StyleSheet.create({});
export default Card;
