import { Text, View,StyleSheet } from "react-native";
import Header from '@/components/top'
export default function departamentos() {
  return (
    <>
    <View>
    <Header />
    </View>
    <View className="justify-start     items-center h-full w-full bg-blue-100 pt-20"  >
        

      <View className=" my-4 items-center w-5/6  h-1/5  bg-yellow-400 justify-center " ><Text className="text-6xl items-center justify-center">Abarrotes</Text></View>
      <View className="my-4  items-center  w-5/6  h-1/5  bg-green-400 justify-center" ><Text className="text-6xl items-center justify-center">Vegetales</Text></View>
      <View className=" my-4 items-center  w-5/6  h-1/5  bg-red-400 justify-center" ><Text className="text-6xl items-center justify-center">Carniceria</Text></View>
    






    </View>
  


    </>
  );
}
 

