import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import Button from "../../components/Button";

export default function Emergency() {
  const handleEmergencyAlert = () => {
    // Handle emergency alert
    console.log("Emergency alert triggered");
  };

  return (
    <SafeAreaView className="flex-1 bg-error/10">
      {/* Header */}
      <View className="bg-error px-6 py-4">
        <Text className="text-white text-xl font-bold text-center">
          Emergency Center
        </Text>
      </View>

      <View className="flex-1 justify-center items-center px-6">
        {/* Emergency Button */}
        <Button
          title="EMERGENCY"
          variant="error"
          size="large"
          onPress={handleEmergencyAlert}
          className="w-64 h-64 rounded-full mb-8"
          textClassName="text-xl mt-4"
        />

        {/* Quick Actions */}
        <View className="w-full space-y-4">
          <TouchableOpacity className="bg-white p-4 rounded-xl shadow-sm flex-row items-center">
            <View className="bg-primary/20 p-3 rounded-full mr-4">
              <Ionicons name="call" size={24} color="#710D0B" />
            </View>
            <View className="flex-1">
              <Text className="font-semibold text-text">Call Police</Text>
              <Text className="text-text/60 text-sm">100</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity className="bg-white p-4 rounded-xl shadow-sm flex-row items-center">
            <View className="bg-success/20 p-3 rounded-full mr-4">
              <Ionicons name="medical" size={24} color="#4CAF50" />
            </View>
            <View className="flex-1">
              <Text className="font-semibold text-text">Medical Emergency</Text>
              <Text className="text-text/60 text-sm">108</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity className="bg-white p-4 rounded-xl shadow-sm flex-row items-center">
            <View className="bg-warning/20 p-3 rounded-full mr-4">
              <Ionicons name="flame" size={24} color="#FFC107" />
            </View>
            <View className="flex-1">
              <Text className="font-semibold text-text">Fire Department</Text>
              <Text className="text-text/60 text-sm">101</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
