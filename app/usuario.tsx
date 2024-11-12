import { Text, View,StyleSheet,TextInput,ScrollView,Pressable } from "react-native";
import Header from "@/components/top";
export default function AboutScreen() {
  return (
   <>
   
        
        <Header/>
     
        
    <View   className=" justify-start pt-20 items-center w-full h-full bg-gray-600 h-full"  >
    <View  className="p-10  android:justify-center android:h-1/4 web:justify-center  android:w-5/6  items-center web:w-1/2 web:h-5/6 android:h-2/4 android:items-center   bg-sky-400 text-white">
         <Text className="text-white text-4xl">Iniciar Sesion</Text>

         <Text className='text-white'>Usuario</Text>
         <TextInput
          placeholder='Buscar Articulos'
          className='bg-white web:w-1/2 android:w-full  h-12 p-3 bg-black-30 border border-red-300  rounded-3xl mb-4 '
        />
         <Text className="text-white">Contraseña</Text>
         <TextInput
          placeholder='Buscar Articulos'
          className='bg-white android:w-full  web:w-1/2 h-12 p-3 bg-black-30 border border-red-300  rounded-3xl mb-4'
        />
      <View className="flex-row justify-around	 items-between">


        
      <Pressable onPress={()=>{console.log("Hola mundo")}}>
  <Text>Iniciar sesion</Text>
</Pressable>
<Pressable onPress={()=>{console.log("Registrase")}}>
  <Text>Registrarse</Text>
</Pressable>

      </View>
    </View>

    </View>
   
    
    </>
 
  );
}
 
