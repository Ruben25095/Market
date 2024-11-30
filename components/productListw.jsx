import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text } from 'react-native';
import axios from 'axios';
import ProductCard from './productcard'; // Asegúrate de que el componente exista y esté configurado correctamente

export default function ProductListw() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/products");
        setProducts(response.data.products); // Accede a los productos en la clave "products"
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <ScrollView contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap', padding: 8 }}>
      {products.length > 0 ? (
        products.map((product) => (
          <View key={product.id} style={{ width: '25%', padding: 8 }}> {/* Cambia '25%' a '50%' si quieres mostrar 2 por fila */}
            <ProductCard {...product} />
          </View>
        ))
      ) : (
        <Text style={{ textAlign: 'center', marginTop: 20 }}>No products available</Text>
      )}
    </ScrollView>
  );
}
