import { router } from "expo-router";
import React, { useEffect } from "react";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LoadingSpinner from "./components/LoadingSpinner";

export default function Index() {
  useEffect(() => {
    // Check authentication status here
    // For now, redirect to auth flow
    const timer = setTimeout(() => {
      router.replace("/(auth)");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-primary justify-center items-center">
      <View className="items-center">
        <View className="w-24 h-24 bg-background rounded-full items-center justify-center mb-6">
          <Image
            source={require("../assets/icon.png")}
            className="w-full h-full rounded-full"
          />
        </View>
        <Text className="text-2xl font-bold text-background mb-2">Welcome</Text>
        <LoadingSpinner />
      </View>
    </SafeAreaView>
  );
}
