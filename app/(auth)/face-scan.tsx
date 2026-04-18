import type { Href } from "expo-router";
import { router } from "expo-router";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import ScreenBackground from "../components/ScreenBackground";

export default function FaceScanScreen() {
  const [recording, setRecording] = useState(false);

  const toggleRecording = () => {
    if (!recording) {
      setRecording(true);
      setTimeout(() => {
        setRecording(false);
        router.push("/(auth)/approval-wait" as Href);
      }, 2000);
    } else {
      setRecording(false);
    }
  };

  return (
    <ScreenBackground title="Face scan">
      <View className="flex-1 items-center ">
        <View className="mt-10 w-64 h-80 bg-white rounded-lg border border-rose-200" />
        <TouchableOpacity
          className="mt-6 px-6 py-3 rounded-lg bg-rose-900"
          onPress={toggleRecording}
        >
          <Text className="text-white">
            {recording ? "Stop Recording" : "Start Recording"}
          </Text>
        </TouchableOpacity>
      </View>
    </ScreenBackground>
  );
}
