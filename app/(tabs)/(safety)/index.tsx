import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../components/Button";

export default function Safety() {
  const safetyFeatures = [
    { title: "Location Sharing", icon: "location", status: "Active" },
    { title: "Emergency Contacts", icon: "people", status: "3 contacts" },
    { title: "Safety Check", icon: "checkmark-circle", status: "Last: 2h ago" },
    { title: "Incident Reports", icon: "document-text", status: "0 reports" },
  ];

  return (
    <SafeAreaView className="flex-1 bg-background">
      {/* Header */}
      <View className="bg-success px-6 py-4">
        <Text className="text-white text-xl font-bold text-center">
          Safety Features
        </Text>
      </View>

      <ScrollView className="flex-1 px-6">
        {/* Safety Status */}
        <View className="bg-white rounded-xl p-6 mt-6 shadow-sm">
          <View className="flex-row items-center justify-between mb-4">
            <Text className="text-lg font-semibold text-text">
              Safety Status
            </Text>
            <View className="bg-success/20 px-3 py-1 rounded-full">
              <Text className="text-success text-sm font-medium">Protected</Text>
            </View>
          </View>
          <Text className="text-text/70 text-sm">
            All safety features are active and monitoring your location.
          </Text>
        </View>

        {/* Safety Features */}
        <View className="mt-6">
          <Text className="text-lg font-semibold text-text mb-4">
            Your Safety Features
          </Text>
          {safetyFeatures.map((feature, index) => (
            <TouchableOpacity
              key={index}
              className="bg-white p-4 rounded-xl shadow-sm mb-3 flex-row items-center"
              activeOpacity={0.7}
            >
              <View className="bg-success/20 p-3 rounded-full mr-4">
                <Ionicons name={feature.icon as any} size={24} color="#4CAF50" />
              </View>
              <View className="flex-1">
                <Text className="font-semibold text-text">
                  {feature.title}
                </Text>
                <Text className="text-text/60 text-sm">{feature.status}</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#191121" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Quick Actions */}
        <View className="mt-6 mb-6">
          <Text className="text-lg font-semibold text-text mb-4">
            Quick Actions
          </Text>
          <View className="space-y-3">
            <Button
              title="Share Location"
              variant="primary"
              size="medium"
              className="flex-row justify-start"
            />
            
            <Button
              title="Add Emergency Contact"
              variant="warning"
              size="medium"
              className="flex-row justify-start"
            />
            
            <Button
              title="Report Incident"
              variant="secondary"
              size="medium"
              className="flex-row justify-start"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
