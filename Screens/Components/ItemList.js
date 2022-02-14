import React from 'react';
import {View, FlatList, Text, Button, Image} from 'react-native';
import {useDispatch} from 'react-redux';

function ItemList({Data}) {
  const dispatch = useDispatch();
  const selectitem = item =>
    dispatch({
      type: 'ADD_TO_CART',
      payload: item,
    });
  return (
    <View>
      <FlatList
        data={Data}
        keyExtractor={Data.id}
        renderItem={({item}) => (
          <View
            style={{
              alignItems: 'center',
              marginTop: 10,
              backgroundColor: 'white',
              borderRadius: 10,
              backgroundColor: 'skyblue',
            }}>
            <View style={{width: '90%'}}>
              <Image
                resizeMode="contain"
                style={{height: 105}}
                source={{uri: item.image}}
              />
              <Text>{item.name}</Text>
              <Text>Rs.{item.price}</Text>
              <Button title="Add To Cart" onPress={() => selectitem(item)} />
            </View>
          </View>
        )}
      />
    </View>
  );
}

export default ItemList;
