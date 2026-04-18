import type { Href } from "expo-router";
import { router } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import ScreenBackground from "../components/ScreenBackground";

export default function ApprovalApprovedScreen() {
  return (
    <ScreenBackground>
      <View className="flex-1 items-center justify-center">
        <View className="w-14 h-14 bg-green-500 rounded-full items-center justify-center mb-6">
          <Text className="text-white text-2xl">✓</Text>
        </View>
        <Text className="text-rose-900 mb-8">
          Your request has been approved
        </Text>
        <TouchableOpacity
          className="px-8 py-3 rounded-lg border border-rose-300"
          onPress={() => router.replace("/(tabs)" as Href)}
        >
          <Text className="text-rose-900">Next</Text>
        </TouchableOpacity>
      </View>
    </ScreenBackground>
  );
}
