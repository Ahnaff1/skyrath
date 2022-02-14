import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

function ShopIcon({title, image}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(title)}
      style={{
        backgroundColor: 'skyblue',
        width: '90%',
        height: 150,
        marginTop: 10,
        borderRadius: 15,
        elevation: 10,
      }}>
      <View style={{alignItems: 'center'}}>
        <Image
          resizeMode="cover"
          style={{width: '100%', height: 120}}
          source={{uri: image}}
        />
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default ShopIcon;
