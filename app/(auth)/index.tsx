import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Welcome from "./welcome";

export default function AuthIndex() {
  return (
    <SafeAreaView className="flex-1">
      <Welcome />
    </SafeAreaView>
  );
}
