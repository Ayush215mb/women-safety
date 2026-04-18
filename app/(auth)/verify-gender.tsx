import type { Href } from "expo-router";
import { router } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import ScreenBackground from "../components/ScreenBackground";

export default function VerifyGenderScreen() {
  return (
    <ScreenBackground title="Verify Gender">
      <View className="flex-1 items-center justify-center">
        <TouchableOpacity
          className="w-40 py-3 rounded-lg border border-rose-300 mb-4"
          onPress={() => router.push("/(auth)/face-scan" as Href)}
        >
          <Text className="text-center text-rose-900">Face Scan</Text>
        </TouchableOpacity>
        <Text className="text-rose-700 mb-4">Or</Text>
        <TouchableOpacity
          className="w-40 py-3 rounded-lg border border-rose-300"
          onPress={() => router.push("/(auth)/verify-id" as Href)}
        >
          <Text className="text-center text-rose-900">Verify ID</Text>
        </TouchableOpacity>
      </View>
    </ScreenBackground>
  );
}
