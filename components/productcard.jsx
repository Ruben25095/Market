import * as React from 'react';
import {View,Text,Image,TouchableOpacity} from 'react-native';
import {useColorScheme} from 'nativewind';

export default function ProductCard(
{image,title,price,description,}
){
const [count , setCount]=React.useState(1);


return(

<View className=' flex-1 bg-blue-100' > 
 <Image source={{uri: image}  } className=' w-full h-40 web:h-80' style={{ resizeMode:'stretch'}}/> 

     <Text> {title}</Text>
     <Text>${price.toFixed(2)}</Text>
     <Text> {description}</Text>
     
     </View>
   

);






}