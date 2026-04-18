import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ModalScreen() {
  const handleClose = () => {
    router.back();
  };

  return (
    <Modal visible={true} animationType="slide" presentationStyle="pageSheet">
      <SafeAreaView className="flex-1 bg-white">
        {/* Header */}
        <View className="flex-row justify-between items-center px-6 py-4 border-b border-gray-200">
          <Text className="text-xl font-bold text-gray-800">Modal Screen</Text>
          <TouchableOpacity onPress={handleClose} className="p-2">
            <Ionicons name="close" size={24} color="#6b7280" />
          </TouchableOpacity>
        </View>

        {/* Content */}
        <View className="flex-1 justify-center items-center px-6">
          <View className="w-20 h-20 bg-pink-100 rounded-full items-center justify-center mb-6">
            <Ionicons name="information-circle" size={40} color="#ec4899" />
          </View>

          <Text className="text-2xl font-bold text-gray-800 mb-4 text-center">
            Modal Example
          </Text>

          <Text className="text-gray-600 text-center mb-8 leading-6">
            This is an example modal screen that can be used for various
            purposes like settings, forms, or detailed views.
          </Text>

          <TouchableOpacity
            className="bg-pink-500 px-8 py-4 rounded-full"
            onPress={handleClose}
            activeOpacity={0.8}
          >
            <Text className="text-white font-semibold text-lg">
              Close Modal
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Modal>
  );
}
