import type { Href } from "expo-router";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import ScreenBackground from "../components/ScreenBackground";

export default function EmergencyCodeScreen() {
  const [code, setCode] = useState("");

  const handleNext = () => {
    if (code.trim().length > 0) {
      router.push("/(auth)/approval-wait" as Href);
    } else {
      router.push("/(auth)/verify-gender" as Href);
    }
  };

  return (
    <ScreenBackground
      title="Do you have any emergency code?"
      subtitle="Enter your mobile number"
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        <View className="mt-10 flex-1 justify-center">
          <TextInput
            className="bg-white px-4 py-4 rounded-lg text-gray-800"
            placeholder="Enter code"
            placeholderTextColor="#9CA3AF"
            value={code}
            onChangeText={setCode}
            keyboardType="number-pad"
          />

          <TouchableOpacity
            className="mt-6 bg-rose-900 py-4 rounded-lg border-2 border-rose-200"
            onPress={handleNext}
          >
            <Text className="text-center text-white font-semibold">Next</Text>
          </TouchableOpacity>

          <View className="items-center mt-6">
            <Text className="text-rose-700">Or</Text>
            <TouchableOpacity
              className="mt-2"
              onPress={() => router.push("/(auth)/verify-gender" as Href)}
            >
              <Text className="text-rose-900 font-medium">Skip</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScreenBackground>
  );
}
