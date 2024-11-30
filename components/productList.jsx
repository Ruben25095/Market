import * as react from 'react';
import { FlatList,Text, View,ScrollView } from 'react-native';
//import {products} from './products'
import ProductCard from './productcard';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function ProductList(){


    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await axios.get("http://192.168.0.10:8000/products");
          setProducts(response.data.products); // Accede a los productos en la clave "products"
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      };
  
      fetchProducts();
    }, []);


 return(
    
  <FlatList className='w-full  p-4'
     numColumns={2}
     data={products}
     keyExtractor={(product)=>product.id}
    
     renderItem={({item}) => <ProductCard {...item}/>
    }
    
  />
 )
}

