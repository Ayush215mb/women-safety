import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../components/Button";

export default function Home() {
  const quickActions = [
    { title: "Emergency Alert", icon: "warning", color: "bg-error" },
    { title: "Share Location", icon: "location", color: "bg-primary" },
    { title: "Safety Check", icon: "checkmark-circle", color: "bg-success" },
    { title: "Report Incident", icon: "document-text", color: "bg-warning" },
  ];

  return (
    <SafeAreaView className="flex-1 bg-background">
      {/* Header */}
      <View className="bg-primary px-6 py-4">
        <View className="flex-row justify-between items-center">
          <View>
            <Text className="text-white text-lg font-semibold">
              Welcome back!
            </Text>
            <Text className="text-background text-sm">
              Your safety is our priority
            </Text>
          </View>
          <TouchableOpacity className="bg-secondary p-2 rounded-full">
            <Ionicons name="notifications-outline" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView className="flex-1 px-6">
        {/* Status Card */}
        <View className="bg-white rounded-xl p-6 mt-6 shadow-sm">
          <View className="flex-row items-center justify-between mb-4">
            <Text className="text-lg font-semibold text-text">
              Safety Status
            </Text>
            <View className="bg-success/20 px-3 py-1 rounded-full">
              <Text className="text-success text-sm font-medium">Safe</Text>
            </View>
          </View>
          <Text className="text-text/70 text-sm">
            All your safety features are active and working properly.
          </Text>
        </View>

        {/* Quick Actions */}
        <View className="mt-6">
          <Text className="text-lg font-semibold text-text mb-4">
            Quick Actions
          </Text>
          <View className="flex-row flex-wrap justify-between">
            {quickActions.map((action, index) => (
              <TouchableOpacity
                key={index}
                className={`${action.color} w-[48%] p-4 rounded-xl mb-3`}
                activeOpacity={0.8}
                onPress={() => {
                  if (action.title === "Emergency Alert") {
                    router.push("/(tabs)/(emergency)");
                  } else if (action.title === "Safety Check") {
                    router.push("/(screens)/modal");
                  }
                }}
              >
                <View className="items-center">
                  <Ionicons name={action.icon as any} size={32} color="white" />
                  <Text className="text-white font-medium text-sm mt-2 text-center">
                    {action.title}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Recent Activity */}
        <View className="mt-6 mb-6">
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-lg font-semibold text-text">
              Recent Activity
            </Text>
            <Button
              title="View All"
              variant="secondary"
              size="small"
              onPress={() => router.push("/(tabs)/(home)/dashboard")}
              className="bg-secondary/20"
              textClassName="text-secondary"
            />
          </View>
          <View className="bg-white rounded-xl p-4 shadow-sm">
            <View className="flex-row items-center mb-3">
              <View className="bg-success/20 p-2 rounded-full mr-3">
                <Ionicons name="checkmark" size={16} color="#4CAF50" />
              </View>
              <View className="flex-1">
                <Text className="font-medium text-text">
                  Safety check completed
                </Text>
                <Text className="text-text/60 text-sm">2 hours ago</Text>
              </View>
            </View>
            <View className="flex-row items-center">
              <View className="bg-primary/20 p-2 rounded-full mr-3">
                <Ionicons name="location" size={16} color="#710D0B" />
              </View>
              <View className="flex-1">
                <Text className="font-medium text-text">
                  Location shared with family
                </Text>
                <Text className="text-text/60 text-sm">5 hours ago</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
