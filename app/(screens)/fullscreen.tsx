import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function FullscreenScreen() {
  const handleGoBack = () => {
    router.back();
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="bg-white px-6 py-4 border-b border-gray-200">
        <View className="flex-row items-center">
          <TouchableOpacity onPress={handleGoBack} className="mr-4">
            <Ionicons name="arrow-back" size={24} color="#6b7280" />
          </TouchableOpacity>
          <Text className="text-xl font-bold text-gray-800">
            Fullscreen View
          </Text>
        </View>
      </View>

      {/* Content */}
      <ScrollView className="flex-1 px-6">
        <View className="py-8">
          <View className="bg-white rounded-xl p-6 mb-6 shadow-sm">
            <View className="flex-row items-center mb-4">
              <View className="w-12 h-12 bg-blue-100 rounded-full items-center justify-center mr-4">
                <Ionicons name="document-text" size={24} color="#2563eb" />
              </View>
              <View className="flex-1">
                <Text className="text-lg font-semibold text-gray-800">
                  Fullscreen Screen
                </Text>
                <Text className="text-gray-500 text-sm">
                  This is a fullscreen view example
                </Text>
              </View>
            </View>

            <Text className="text-gray-600 leading-6">
              This screen demonstrates how to create fullscreen views that can
              be used for detailed content, forms, or any other purpose that
              requires more space than a modal.
            </Text>
          </View>

          <View className="bg-white rounded-xl p-6 mb-6 shadow-sm">
            <Text className="text-lg font-semibold text-gray-800 mb-4">
              Features
            </Text>
            <View className="space-y-3">
              <View className="flex-row items-center">
                <Ionicons name="checkmark-circle" size={20} color="#059669" />
                <Text className="text-gray-700 ml-3">
                  Full screen real estate
                </Text>
              </View>
              <View className="flex-row items-center">
                <Ionicons name="checkmark-circle" size={20} color="#059669" />
                <Text className="text-gray-700 ml-3">Scrollable content</Text>
              </View>
              <View className="flex-row items-center">
                <Ionicons name="checkmark-circle" size={20} color="#059669" />
                <Text className="text-gray-700 ml-3">Navigation header</Text>
              </View>
              <View className="flex-row items-center">
                <Ionicons name="checkmark-circle" size={20} color="#059669" />
                <Text className="text-gray-700 ml-3">Safe area handling</Text>
              </View>
            </View>
          </View>

          <TouchableOpacity
            className="bg-pink-500 py-4 rounded-full mb-6"
            onPress={handleGoBack}
            activeOpacity={0.8}
          >
            <Text className="text-center text-white font-semibold text-lg">
              Go Back
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
