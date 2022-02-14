import React from 'react';
import {Text, View} from 'react-native';
import ItemList from './Components/ItemList';

const Data = [
  {
    id: 1,
    name: 'Mahatma Gandhi – The Story Of My Experiments With The Truth',
    image:
      'https://www.incimages.com/uploaded_files/image/1920x1080/getty_883231284_200013331818843182490_335833.jpg',
    price: 500,
  },
  {
    id: 2,
    name: 'R.K. Narayan – The Guide',
    image:
      'https://www.incimages.com/uploaded_files/image/1920x1080/getty_883231284_200013331818843182490_335833.jpg',
    price: 300,
  },
  {
    id: 3,
    name: 'Rohinton Mistry – A Fine Balance',
    image:
      'https://www.incimages.com/uploaded_files/image/1920x1080/getty_883231284_200013331818843182490_335833.jpg',
    price: 200,
  },
  {
    id: 4,
    name: 'Salman Rushdie – Midnight’s Children',
    image:
      'https://www.incimages.com/uploaded_files/image/1920x1080/getty_883231284_200013331818843182490_335833.jpg',
    price: 100,
  },
];

function BookScreen(props) {
  return (
    <View>
      <ItemList Data={Data} />
    </View>
  );
}

export default BookScreen;
