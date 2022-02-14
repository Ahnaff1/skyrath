import React from 'react';
import {Text, View} from 'react-native';
import ItemList from './Components/ItemList';

const Data = [
  {
    id: 13,
    name: 'T-shirt',
    image:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    price: 500,
  },
  {
    id: 14,
    name: 'Trousers',
    image:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    price: 700,
  },
  {
    id: 15,
    name: 'Jacket',
    image:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    price: 1000,
  },
  {
    id: 16,
    name: 'Shirts',
    image:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    price: 1500,
  },
];

function ClothingScreen(props) {
  return (
    <View>
      <ItemList Data={Data} />
    </View>
  );
}

export default ClothingScreen;
