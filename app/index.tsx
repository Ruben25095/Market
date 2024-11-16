import { View, Platform } from 'react-native';
import Header from '@/components/top';
import ProductList from '@/components/productList';
import ProductListw from '@/components/productListw';

export default function Home() {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      {Platform.select({
        android: <ProductList />,
        web: <ProductListw />,
      })}
    </View>
  );
}