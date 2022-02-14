import React from 'react';
import {View} from 'react-native';
import ItemList from './Components/ItemList';

const Data = [
  {
    id: 5,
    name: 'Timberland boots.',
    image:
      'https://images-eu.ssl-images-amazon.com/images/I/41PdV1qZQpL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg',
    price: 5000,
  },
  {
    id: 6,
    name: 'Cowboy boots.',
    image:
      'https://images-eu.ssl-images-amazon.com/images/I/41PdV1qZQpL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg',
    price: 7500,
  },
  {
    id: 7,
    name: 'Wellington boots.',
    image:
      'https://images-eu.ssl-images-amazon.com/images/I/41PdV1qZQpL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg',
    price: 3500,
  },
  {
    id: 8,
    name: 'Sneakers',
    image:
      'https://images-eu.ssl-images-amazon.com/images/I/41PdV1qZQpL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg',
    price: 2500,
  },
];

function ShoesScreen(props) {
  return (
    <View>
      <ItemList Data={Data} />
    </View>
  );
}

export default ShoesScreen;
