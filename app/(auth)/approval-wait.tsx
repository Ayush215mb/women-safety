import type { Href } from "expo-router";
import { router } from "expo-router";
import React, { useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import ScreenBackground from "../components/ScreenBackground";

export default function ApprovalWaitScreen() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/(auth)/approval-approved" as Href);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ScreenBackground
      title="Waiting for approval"
      subtitle="We will let you know when approved"
    >
      <View className="flex-1 justify-center items-center">
        <TouchableOpacity
          onPress={() => router.replace("/(auth)/approval-approved" as Href)}
          className="mt-6 px-6 py-3 rounded-lg border border-rose-300"
        >
          <Text className="text-rose-900">Simulate Approve</Text>
        </TouchableOpacity>
      </View>
    </ScreenBackground>
  );
}
