import React, { useState } from "react";
import { Text, View,StyleSheet,TextInput,ScrollView,Pressable,SafeAreaView, Touchable,Alert } from "react-native";
import Header from "@/components/top";
import { Tabs,Link,Stack,Navigator,useRouter  } from 'expo-router';
import axios from "axios";

export default function LoginScreen() {

  
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const router=useRouter();
    const handleLogin = async () => {
      try {
        const response = await axios.post("http://192.168.0.10:8000/login", {
          username,
          password,
        });
        //Alert.alert(response.data.message);
        router.replace('/login');
        router.push("/panelusuario");
        
      } catch (error) {
        Alert.alert("Login failed");
      }
    };







  return (
   <>
   
        
        <Header/>
     
        
    <View   className=" justify-start pt-20 items-center w-full h-full bg-gray-600 h-full"  >
    
    <View  className=" p-10  android:justify-center  web:justify-center  android:w-5/6  items-center web:w-1/3 web:h-5/6 android:h-3/4 android:items-center   bg-sky-400 text-white">
         <Text className="text-white text-4xl">Iniciar Sesion</Text>

         <Text className='text-white'>Usuario</Text>
         <TextInput
          placeholder='Uusario'
          className='bg-white web:w-5/6  android:w-full  h-1/8 p-3 bg-black-30 border border-blue-300  rounded-3xl mb-4 text-black '
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
        
        />
         <Text className="text-white">Contraseña</Text>
         <TextInput
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholder='Contraseña'
          className='bg-white android:w-full  web:w-5/6 h-1/8 p-3 bg-black-30 border border-red-300  rounded-3xl mb-4 text-black'
        
        />
       
      <View className="flex-row  w-full justify-around	 items-between">

     
        
      <Pressable className="bg-gray-200 p-1 items-center rounded-xl w-5/6 p-5" onPress={handleLogin}>
  <Text>Iniciar sesion</Text>
</Pressable>

      </View>
      <View className="flex-row mt-5 ">
      <Text className="text-white">Primera vez?  </Text> 
     <Pressable>
     <Text className="text-black">Registrarse</Text> 
     </Pressable>
     </View>
     <View className="flex-row mt-2 ">
    
    <Text className="text-white">Olvidaste tu contraseña?  </Text> 
    <Pressable>
    <Text className="text-black">Haz clic aqui</Text> 
    </Pressable>
    </View>


    </View>
  
    </View>
   
    
    </>
 
  );
}
 
