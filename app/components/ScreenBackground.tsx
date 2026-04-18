import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type ScreenBackgroundProps = {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
};

export default function ScreenBackground({
  children,
  title,
  subtitle,
}: Readonly<ScreenBackgroundProps>) {
  return (
    <SafeAreaView className="flex-1  bg-rose-100">
      {/* Decorative Background Elements */}
      <View className="absolute top-16 left-6 opacity-40">
        <View className="w-32 h-32 border-2 border-rose-300 border-dashed rounded-full" />
      </View>
      <View className="absolute top-40 right-10 opacity-40">
        <View className="w-24 h-24 border-2 border-rose-300 border-dashed rounded-full" />
      </View>
      <View className="absolute bottom-32 left-10 opacity-40">
        <View className="w-20 h-20 border-2 border-rose-300 border-dashed rounded-full" />
      </View>

      <View className="flex-1  px-6">
        {(title || subtitle) && (
          <View className="items-center ">
            {title ? (
              <Text className="text-xl text-rose-900 font-semibold text-center">
                {title}
              </Text>
            ) : null}
            {subtitle ? (
              <Text className="text-xs text-rose-700 mt-1 text-center">
                {subtitle}
              </Text>
            ) : null}
          </View>
        )}

        {children}
      </View>
    </SafeAreaView>
  );
}
