import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Dashboard() {
  const quickStats = [
    {
      title: "Safety Score",
      value: "95%",
      icon: "shield-checkmark",
      color: "bg-success",
    },
    {
      title: "Active Alerts",
      value: "0",
      icon: "warning",
      color: "bg-warning",
    },
    {
      title: "Location Shared",
      value: "3",
      icon: "location",
      color: "bg-primary",
    },
    {
      title: "Emergency Contacts",
      value: "5",
      icon: "people",
      color: "bg-secondary",
    },
  ];

  const recentActivities = [
    { title: "Safety check completed", time: "2 hours ago", type: "success" },
    { title: "Location shared with family", time: "5 hours ago", type: "info" },
    { title: "Emergency contact updated", time: "1 day ago", type: "info" },
    { title: "Profile information updated", time: "2 days ago", type: "info" },
  ];

  return (
    <SafeAreaView className="flex-1 bg-background">
      {/* Header */}
      <View className="bg-primary px-6 py-4">
        <View className="flex-row justify-between items-center">
          <View>
            <Text className="text-white text-lg font-semibold">Dashboard</Text>
            <Text className="text-background text-sm">Your safety overview</Text>
          </View>
          <TouchableOpacity
            className="bg-secondary p-2 rounded-full"
            onPress={() => router.back()}
          >
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView className="flex-1 px-6">
        {/* Quick Stats */}
        <View className="mt-6">
          <Text className="text-lg font-semibold text-text mb-4">
            Quick Stats
          </Text>
          <View className="flex-row flex-wrap justify-between">
            {quickStats.map((stat, index) => (
              <View
                key={index}
                className={`${stat.color} w-[48%] p-4 rounded-xl mb-3`}
              >
                <View className="items-center">
                  <Ionicons name={stat.icon as any} size={32} color="white" />
                  <Text className="text-white font-bold text-2xl mt-2">
                    {stat.value}
                  </Text>
                  <Text className="text-white text-sm text-center mt-1">
                    {stat.title}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Recent Activities */}
        <View className="mt-6 mb-6">
          <Text className="text-lg font-semibold text-text mb-4">
            Recent Activities
          </Text>
          <View className="bg-white rounded-xl p-4 shadow-sm">
            {recentActivities.map((activity, index) => (
              <View
                key={index}
                className="flex-row items-center mb-3 last:mb-0"
              >
                <View
                  className={`p-2 rounded-full mr-3 ${
                    activity.type === "success" ? "bg-success/20" : "bg-primary/20"
                  }`}
                >
                  <Ionicons
                    name={
                      activity.type === "success" ? "checkmark" : "information"
                    }
                    size={16}
                    color={activity.type === "success" ? "#4CAF50" : "#710D0B"}
                  />
                </View>
                <View className="flex-1">
                  <Text className="font-medium text-text">
                    {activity.title}
                  </Text>
                  <Text className="text-text/60 text-sm">{activity.time}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
