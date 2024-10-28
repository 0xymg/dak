import { Link } from "expo-router";
import { Text, View, Button, TouchableHighlight, TouchableOpacity, FlatList, SafeAreaView, Modal } from "react-native";

export default function Index() {

  const name = "Yunus"
  return (
    <SafeAreaView className="flex  flex-1 items-center justify-center bg-primary h-full">
      <Text className="text-3xl font-psemibold">Merhaba, {name}</Text>
      <Link href="/home">Go to home</Link>
      
    </SafeAreaView>

  );
}


