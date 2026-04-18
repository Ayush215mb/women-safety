import { router } from "expo-router";
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
import Button from "../components/Button";

export default function ProfileSetup() {
  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleCompleteSetup = async () => {
    if (!fullName.trim()) {
      Alert.alert("Error", "Please enter your full name");
      return;
    }

    if (!age.trim()) {
      Alert.alert("Error", "Please enter your age");
      return;
    }

    if (!password.trim()) {
      Alert.alert("Error", "Please enter your password");
      return;
    }

    if (!confirmPassword.trim()) {
      Alert.alert("Error", "Please confirm your password");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }

    if (password.length < 6) {
      Alert.alert("Error", "Password must be at least 6 characters long");
      return;
    }

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      Alert.alert("Welcome!", "Your account has been created successfully", [
        {
          text: "Get Started",
          onPress: () => router.replace("/(auth)/emergency-code"),
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
      <View className="absolute bottom-40 left-8 opacity-30">
        <View className="w-20 h-20 border-2 border-dashed border-white rounded-full" />
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
                App Name
              </Text>
              <Text className="text-white text-lg">Enter Your basic info</Text>
            </View>

            {/* Form */}
            <View className="space-y-6 gap-6 mb-8">
              {/* Full Name Input */}
              <TextInput
                className="bg-white px-4 py-4 rounded-lg text-gray-800"
                placeholder="Enter full name"
                placeholderTextColor="#9CA3AF"
                value={fullName}
                onChangeText={setFullName}
                autoCapitalize="words"
              />

              {/* Age Input with Dropdown Icon */}
              <View className="relative">
                <TextInput
                  className="bg-white px-4 py-4 rounded-lg text-gray-800 pr-12"
                  placeholder="Age"
                  placeholderTextColor="#9CA3AF"
                  value={age}
                  onChangeText={setAge}
                  keyboardType="numeric"
                />
              </View>

              {/* Password Input */}
              <TextInput
                className="bg-white px-4 py-4 rounded-lg text-gray-800"
                placeholder="Enter Password"
                placeholderTextColor="#9CA3AF"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />

              {/* Confirm Password Input */}
              <TextInput
                className="bg-white px-4 py-4 rounded-lg text-gray-800"
                placeholder="Confirm Password"
                placeholderTextColor="#9CA3AF"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
              />
            </View>

            {/* Create Account Button */}
            <Button
              title={isLoading ? "Creating Account..." : "Create Account"}
              variant="primary"
              size="medium"
              onPress={handleCompleteSetup}
              disabled={isLoading}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
