import { router, useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LoadingSpinner from "../components/LoadingSpinner";
import Button from "../components/Button";

export default function ResetPassword() {
  const { phoneNumber } = useLocalSearchParams();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleResetPassword = async () => {
    if (!newPassword || !confirmPassword) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    if (newPassword !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }

    if (newPassword.length < 6) {
      Alert.alert("Error", "Password must be at least 6 characters long");
      return;
    }

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      Alert.alert("Success", "Your password has been reset successfully", [
        {
          text: "OK",
          onPress: () => router.push("/(auth)/login"),
        },
      ]);
    }, 2000);
  };

  return (
    <SafeAreaView className="flex-1 bg-primary">
      {/* Decorative Background Elements */}
      <View className="absolute top-20 left-4 opacity-30">
        <View className="w-32 h-32 border-2 border-dashed border-white rounded-full" />
      </View>
      <View className="absolute top-32 right-8 opacity-30">
        <View className="w-24 h-24 border-2 border-dashed border-white rounded-full" />
      </View>

      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
      >
        <ScrollView
          className="flex-1"
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          {/* Main Content */}
          <View className="flex-1 justify-center px-6">
            {/* Title */}
            <View className="items-center mb-12">
              <Text
                className="text-4xl font-bold text-white mb-4"
                style={{ fontFamily: "serif" }}
              >
                App name
              </Text>
              <Text className="text-white text-lg">Reset Password</Text>
            </View>

            {/* Form */}
            <View className="gap-y-6 mb-8">
              {/* New Password Input */}
              <TextInput
                className="bg-white px-4 py-4 rounded-lg text-gray-800"
                placeholder="Enter new password"
                placeholderTextColor="#9CA3AF"
                value={newPassword}
                onChangeText={setNewPassword}
                secureTextEntry
              />

              {/* Confirm Password Input */}
              <TextInput
                className="bg-white px-4 py-4 rounded-lg text-gray-800"
                placeholder="Confirm new password"
                placeholderTextColor="#9CA3AF"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
              />
            </View>

            {/* Password Requirements */}
            <View className="mb-8">
              <Text className="text-gray-300 text-sm text-center">
                Password must be at least 6 characters long
              </Text>
            </View>

            {/* Reset Button */}
            {isLoading ? (
              <View className="py-4">
                <LoadingSpinner text="Resetting..." color="white" />
              </View>
            ) : (
              <Button
                title="Reset Password"
                variant="primary"
                size="medium"
                onPress={handleResetPassword}
              />
            )}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
