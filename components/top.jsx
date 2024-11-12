// components/Header.js
import { View, TextInput, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Iconb from 'react-native-vector-icons/Entypo';
import React, { useState } from 'react';



export default function Header() {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
     

  return (
    <View className='flex-0  android:justify-start items-center bg-white-100 android:pt-7  web:pt-0'>
      <View className='flex-row items-center justify-center bg-sky-400 w-full pl-20 '>
        <View className='mx-12'>
          <Image
            source={require('../assets/images/logo.png')}
            className='object-scale-down h-13 w-13'
          />
        </View>
        <View className='flex-row ml-1 p-2'>
        <TouchableOpacity onPress={toggleVisibility} style={{ marginLeft: 1, padding: 1 }}>
          <Iconb style={{ fontSize: 45 }} name='magnifying-glass' />
          </TouchableOpacity>
        <TouchableOpacity onPress={()=>{console.log("Haz presionado el carrito")}} style={{ marginLeft:1, padding: 1 }}>
          <Icon style={{ fontSize: 45 }} name='shoppingcart' />
          </TouchableOpacity>
          
        </View>
      </View>
      {!isVisible && (
      <View  className='flex-row  w-full bg-red items-center justify-center p-3 bg-sky-100 web:justify-center '>
        <TextInput
          placeholder='Buscar Articulos'
          className='android:w-5/6  web:w-1/2 h-12 p-3 bg-black-30 border border-red-300  rounded-3xl mb-4 '
        />
      </View>)}
    </View>
  );
}
