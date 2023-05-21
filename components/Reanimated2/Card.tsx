import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Rp from '../../constant/Rp';

interface CardProps {
  imagePath: string;
  cardHeight: number;
  cardWidth: number;
}

const Card = (props: CardProps) => {
  const {imagePath, cardHeight, cardWidth} = props;
  return (
    <Image source={imagePath} style={{height: cardHeight, width: cardWidth}} />
  );
};

const styles = StyleSheet.create({});
export default Card;
