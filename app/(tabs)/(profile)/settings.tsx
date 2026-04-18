import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { ScrollView, Switch, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Settings() {
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);
  const [locationSharingEnabled, setLocationSharingEnabled] =
    React.useState(true);
  const [emergencyAlertsEnabled, setEmergencyAlertsEnabled] =
    React.useState(true);

  const settingsSections = [
    {
      title: "Privacy & Security",
      items: [
        {
          title: "Location Sharing",
          icon: "location",
          hasSwitch: true,
          value: locationSharingEnabled,
          onToggle: setLocationSharingEnabled,
        },
        {
          title: "Emergency Alerts",
          icon: "warning",
          hasSwitch: true,
          value: emergencyAlertsEnabled,
          onToggle: setEmergencyAlertsEnabled,
        },
        { title: "Data Privacy", icon: "shield", hasSwitch: false },
        { title: "Account Security", icon: "lock-closed", hasSwitch: false },
      ],
    },
    {
      title: "Notifications",
      items: [
        {
          title: "Push Notifications",
          icon: "notifications",
          hasSwitch: true,
          value: notificationsEnabled,
          onToggle: setNotificationsEnabled,
        },
        { title: "Email Notifications", icon: "mail", hasSwitch: false },
        { title: "SMS Alerts", icon: "chatbubble", hasSwitch: false },
      ],
    },
    {
      title: "App Settings",
      items: [
        { title: "Language", icon: "language", hasSwitch: false },
        { title: "Theme", icon: "color-palette", hasSwitch: false },
        { title: "About", icon: "information-circle", hasSwitch: false },
        { title: "Help & Support", icon: "help-circle", hasSwitch: false },
      ],
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="bg-pink-500 px-6 py-4">
        <View className="flex-row items-center">
          <TouchableOpacity onPress={() => router.back()} className="mr-4">
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
          <Text className="text-white text-xl font-bold">Settings</Text>
        </View>
      </View>

      <ScrollView className="flex-1">
        {settingsSections.map((section, sectionIndex) => (
          <View key={sectionIndex} className="mt-6">
            <Text className="text-lg font-semibold text-gray-800 mb-4 px-6">
              {section.title}
            </Text>

            <View className="bg-white mx-6 rounded-xl shadow-sm">
              {section.items.map((item, itemIndex) => (
                <TouchableOpacity
                  key={itemIndex}
                  className={`flex-row items-center justify-between p-4 ${
                    itemIndex < section.items.length - 1
                      ? "border-b border-gray-100"
                      : ""
                  }`}
                  activeOpacity={0.7}
                >
                  <View className="flex-row items-center flex-1">
                    <View className="bg-gray-100 p-2 rounded-full mr-4">
                      <Ionicons
                        name={item.icon as any}
                        size={20}
                        color="#6b7280"
                      />
                    </View>
                    <Text className="font-medium text-gray-800 flex-1">
                      {item.title}
                    </Text>
                  </View>

                  {item.hasSwitch ? (
                    <Switch
                      value={item.value}
                      onValueChange={item.onToggle}
                      trackColor={{ false: "#e5e7eb", true: "#ec4899" }}
                      thumbColor={item.value ? "#ffffff" : "#ffffff"}
                    />
                  ) : (
                    <Ionicons
                      name="chevron-forward"
                      size={20}
                      color="#9ca3af"
                    />
                  )}
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ))}

        {/* Logout Section */}
        <View className="mt-8 mb-8">
          <TouchableOpacity className="bg-red-500 mx-6 p-4 rounded-xl flex-row items-center justify-center">
            <Ionicons name="log-out-outline" size={20} color="white" />
            <Text className="text-white font-semibold ml-2">Logout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
