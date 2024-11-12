import * as react from 'react';
import { FlatList,Text, View,ScrollView } from 'react-native';
import {products} from './products'
import ProductCard from './productcard';

export default function ProductList(){
 return(
    
  <FlatList className='w-full p-4'
     numColumns={2}
     data={products}
     keyExtractor={(product)=>product.id}
    
     renderItem={({item}) => <ProductCard {...item}/>
    }
    
  />
 )
}

