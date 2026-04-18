import React from "react";
import { ActivityIndicator, Text, View } from "react-native";

interface LoadingSpinnerProps {
  text?: string;
  size?: "small" | "large";
  color?: string;
}

export default function LoadingSpinner({
  text = "Loading...",
  size = "small",
  color = "#C7372C",
}: LoadingSpinnerProps) {
  return (
    <View className="flex-row items-center justify-center">
      <ActivityIndicator size={size} color={color} />
      {text && <Text className="ml-2 text-background font-medium">{text}</Text>}
    </View>
  );
}
