import React from 'react';
import {View, Text, FlatList, Button, Image} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

function Cart(props) {
  const items = useSelector(state => state.cartReducer.selecteditems.items);
  console.log(items);

  const total = items
    .map(item => Number(item.price))
    .reduce((prev, curr) => prev + curr, 0);

  const dispatch = useDispatch();
  const selectitem = item =>
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: item,
    });
  return (
    <View>
      <Text style={{fontSize: 25, fontWeight: 'bold'}}>
        Total Cart Value : Rs {total}
      </Text>
      <FlatList
        data={items}
        keyExtractor={items.name}
        renderItem={({item}) => (
          <View
            style={{
              alignItems: 'center',
              marginTop: 5,
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
              <Button
                title="REMOVE FROM CART"
                onPress={() => selectitem(item)}
              />
            </View>
          </View>
        )}
      />
      <View></View>
    </View>
  );
}

export default Cart;
