import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Rp from '../../constant/Rp';

const card1 = require('../../assets/Images/card1.png');

const Card = props => {
  const {cardHeight, cardWidth} = props;
  return (
    <Image source={card1} style={{height: cardHeight, width: cardWidth}} />
  );
};

const styles = StyleSheet.create({});
export default Card;
