import { View, Text, Button,Image,TextInput,StyleSheet,ScrollView,Platform} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import React from 'react';
//import ProductList from '../..productList/components/productList';
import Header from '@/components/top'
import ProductList from '@/components/productList';
import ProductListw from '@/components/productListw'
export default function home() {
  return (
   //container
  
<>
    <View>
        < Header/>
        </View>
  


      {Platform.OS === 'android' &&     <ProductList/>} 
      {Platform.OS === 'web' &&  <ProductListw/>}
 
        
      
    
    </>
    
 
  );
}

