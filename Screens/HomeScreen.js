import React from 'react';
import {Button, ScrollView, View} from 'react-native';
import ShopIcon from './Components/ShopIcon';

function HomeScreen({navigation}) {
  return (
    <ScrollView>
      <View>
        <Button title="cart" onPress={() => navigation.navigate('Cart')} />
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ShopIcon
          title="Book"
          image="https://images.unsplash.com/photo-1644691424398-66012d56dfdb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
        />
        <ShopIcon
          title="Shoes"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRLorrJUnqTpAT-NdePHYi1dcVFppDp5t1Sg&usqp=CAU"
        />
        <ShopIcon
          title="Electronics"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnDdVTFqG7-ZktS4SOkK2b3QKJeEkcCK9yUQ&usqp=CAU"
        />
        <ShopIcon
          title="Clothing"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDXDGOTLJ30d-dY89nCKZGBuuPcXbNzbMDUw&usqp=CAU"
        />
      </View>
    </ScrollView>
  );
}

export default HomeScreen;
