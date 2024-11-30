import React, { useState } from "react";
import { Text, View,StyleSheet,TextInput,ScrollView,Pressable,SafeAreaView, Touchable,Alert,Modal,TouchableOpacity } from "react-native";
import Header from "@/components/top";
import { Tabs,Link,Stack,Navigator,useRouter  } from 'expo-router';
import axios from "axios";
import RegistroUsuario from '../components/registro'
import Icon2 from 'react-native-vector-icons/AntDesign';
import { Platform } from 'react-native';
export default function LoginScreen() {

  const [isVisibleregistro, setIsVisibleregistro] = useState(false);
  
    const [useremail, setUseremail] = useState('');
    const [password, setPassword] = useState('');
    const router=useRouter();
    const handleLogin = async () => {
      try {
        const response = await axios.post("http://127.0.0.1:8000/login", {
          useremail,
          password,
        });
        if (Platform.OS === 'web') {
          window.alert(response.data.message);
      } else {
          Alert.alert(response.data.message);
      }
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
          placeholder='Email'
          className='bg-white web:w-5/6  android:w-full  h-1/8 p-3 bg-black-30 border border-blue-300  rounded-3xl mb-4 text-black '
          value={useremail}
          onChangeText={setUseremail}
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
   <TouchableOpacity onPress={()=>{setIsVisibleregistro(true)}}>
     <Text className="text-black">Registrarse</Text> 

     </TouchableOpacity>
     </View>
     <View className="flex-row mt-2 ">
    
    <Text className="text-white">Olvidaste tu contraseña?  </Text> 
    <Pressable >
    <Text className="text-black">Haz clic aqui</Text> 
    </Pressable>
    </View>


    </View>
    
   <Modal  transparent={true} visible={isVisibleregistro} className=' bg-black-600'  > 
      
              <View className=' mt-50 w-full h-full bg-blue-300' > 
         
                <View className='items-end' >
             <TouchableOpacity onPress={()=>{setIsVisibleregistro(false)}} style={{ marginLeft:1, padding: 1} }>  
             <Icon2 style={{ fontSize:45}} name='close'/> 
             </TouchableOpacity> 
             </View>
             <RegistroUsuario/>

              </View>

          </Modal>
    </View>
   
    
    </>
 
  );
}
 
