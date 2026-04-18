import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { Alert, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../components/Button";

export default function Profile() {
  const handleLogout = () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Logout",
        style: "destructive",
        onPress: () => router.replace("/(auth)"),
      },
    ]);
  };

  const profileOptions = [
    { title: "Edit Profile", icon: "person-outline", action: () => {} },
    { title: "Emergency Contacts", icon: "people-outline", action: () => {} },
    { title: "Privacy Settings", icon: "shield-outline", action: () => {} },
    { title: "Notifications", icon: "notifications-outline", action: () => {} },
    { title: "Help & Support", icon: "help-circle-outline", action: () => {} },
    { title: "About", icon: "information-circle-outline", action: () => {} },
  ];

  return (
    <SafeAreaView className="flex-1 bg-background">
      {/* Header */}
      <View className="bg-primary px-6 py-4">
        <Text className="text-white text-xl font-bold text-center">
          Profile
        </Text>
      </View>

      <ScrollView className="flex-1">
        {/* Profile Card */}
        <View className="bg-white mx-6 mt-6 rounded-xl p-6 shadow-sm">
          <View className="items-center">
            <View className="w-20 h-20 bg-primary/20 rounded-full items-center justify-center mb-4">
              <Ionicons name="person" size={40} color="#710D0B" />
            </View>
            <Text className="text-xl font-bold text-text mb-1">
              John Doe
            </Text>
            <Text className="text-text/60 text-sm mb-4">+91 9876543210</Text>
            <Button
              title="Settings"
              variant="secondary"
              size="small"
              onPress={() => router.push("/(tabs)/(profile)/settings")}
              className="bg-secondary/20"
              textClassName="text-secondary"
            />
          </View>
        </View>

        {/* Profile Options */}
        <View className="px-6 mt-6">
          {profileOptions.map((option, index) => (
            <TouchableOpacity
              key={index}
              className="bg-white p-4 rounded-xl shadow-sm mb-3 flex-row items-center"
              onPress={option.action}
              activeOpacity={0.7}
            >
              <View className="bg-background p-3 rounded-full mr-4">
                <Ionicons name={option.icon as any} size={20} color="#191121" />
              </View>
              <Text className="flex-1 font-medium text-text">
                {option.title}
              </Text>
              <Ionicons name="chevron-forward" size={20} color="#191121" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Logout Button */}
        <View className="px-6 mt-6 mb-8">
          <Button
            title="Logout"
            variant="error"
            size="medium"
            onPress={handleLogout}
            className="flex-row justify-center"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
