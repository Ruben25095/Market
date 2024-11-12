import * as react from 'react';
import { FlatList,Text, View,ScrollView } from 'react-native';
import {products} from './products'
import ProductCard from './productcard';

export default function ProductListw(){
 return(

    <ScrollView contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap', padding: 8 }}>
      {products.map((product) => (
        <View key={product.id} style={{ width: '25%', padding: 8 }}>
          <ProductCard {...product} />
        </View>
      ))}
    </ScrollView>
 
    

 )
}