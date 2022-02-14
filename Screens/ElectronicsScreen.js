import React from 'react';
import {Text, View} from 'react-native';
import ItemList from './Components/ItemList';

const Data = [
  {
    id: 9,
    name: 'Laptop',
    image:
      'https://images.prismic.io/frameworkmarketplace/5dc5fc06-aec5-4f28-a924-0230aa91a360_Pre-Marketplace+-+image_02.jpg?auto=compress,format',
    price: 50000,
  },
  {
    id: 10,
    name: 'Mobile Phone',
    image:
      'https://images.prismic.io/frameworkmarketplace/5dc5fc06-aec5-4f28-a924-0230aa91a360_Pre-Marketplace+-+image_02.jpg?auto=compress,format',
    price: 17000,
  },
  {
    id: 11,
    name: 'Smart Watch',
    image:
      'https://images.prismic.io/frameworkmarketplace/5dc5fc06-aec5-4f28-a924-0230aa91a360_Pre-Marketplace+-+image_02.jpg?auto=compress,format',
    price: 5000,
  },
  {
    id: 12,
    name: 'TV',
    image:
      'https://images.prismic.io/frameworkmarketplace/5dc5fc06-aec5-4f28-a924-0230aa91a360_Pre-Marketplace+-+image_02.jpg?auto=compress,format',
    price: 65000,
  },
];
function ElectronicsScreen(props) {
  return (
    <View>
      <ItemList Data={Data} />
    </View>
  );
}

export default ElectronicsScreen;
