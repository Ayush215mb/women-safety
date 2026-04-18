import { router } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import ScreenBackground from "../components/ScreenBackground";

export default function VerifyIdScreen() {
  return (
    <ScreenBackground title="Verify ID">
      <View className="flex-1 items-center justify-center">
        <View className="w-64 h-40 bg-white rounded-lg border border-rose-200 mb-6" />
        <TouchableOpacity
          className="px-6 py-3 rounded-lg bg-rose-900"
          onPress={() => router.push("/(auth)/approval-wait")}
        >
          <Text className="text-white">Upload & Continue</Text>
        </TouchableOpacity>
      </View>
    </ScreenBackground>
  );
}
