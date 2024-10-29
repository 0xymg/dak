import { Link, Redirect, router } from "expo-router";
import { Text, View, Button, TouchableHighlight, TouchableOpacity, FlatList, SafeAreaView, Modal, ScrollView, Image } from "react-native";
import { images } from "@/constants";
import CustomButton from "@/components/CustomButton"
import { StatusBar } from "expo-status-bar";


export default function Index() {

  return (
    <SafeAreaView className="flex  flex-1 items-center justify-center bg-primary h-full ">
        <StatusBar backgroundColor="#161622" style='light' />

      <View className="w-full justify-between py-28 items-center h-[85vh] px-4">
        <Text className="text-white font-pthin text-9xl">
          DAK
        </Text>

        <Image
          source={images.cards}
          className="max-w-[390px] w-full h-[300px]"
          resizeMode="contain"
        />
        <CustomButton 
          title="E-Posta ile devam et"
          handlePress={ () => {router.push("/sign-in")}}
          containerStyles="w-full  mt-7"
          />
      </View>
    </SafeAreaView>

  );
}


