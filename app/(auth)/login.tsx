import type { Href } from "expo-router";
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
import LoadingSpinner from "../components/LoadingSpinner";
import Button from "../components/Button";

export default function Login() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    if (!phoneNumber || !password) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Navigate to emergency code step per workflow
      router.replace("/(tabs)/(home)");
    }, 2000);
  };

  const handleForgotPassword = () => {
    router.push("/(auth)/forgot-password");
  };

  // register navigation is available from onboarding; keep screen focused

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
              <Text className="text-white text-lg">
                Log in to your existing account
              </Text>
            </View>

            {/* Form */}
            <View className="gap-4 mb-8">
              {/* Phone Number Input */}
              <View className="flex-row bg-white rounded-lg">
                <View className="px-4 py-4 border-r border-gray-200 justify-center">
                  <Text className="text-gray-700 font-medium">+91</Text>
                </View>
                <TextInput
                  className="flex-1 px-4 py-4 text-gray-800"
                  placeholder="0000000000"
                  placeholderTextColor="#9CA3AF"
                  value={phoneNumber}
                  onChangeText={setPhoneNumber}
                  keyboardType="numeric"
                  maxLength={10}
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
            </View>

            {/* Log In Button */}
            {isLoading ? (
              <View className="py-4 mb-6">
                <LoadingSpinner text="Logging in..." color="white" />
              </View>
            ) : (
              <Button
                title="Log in"
                variant="primary"
                size="medium"
                onPress={handleLogin}
                className="mb-6"
              />
            )}

            {/* Divider */}
            <View className="items-center mb-6">
              <Text className="text-gray-300 text-sm">Or</Text>
            </View>

            {/* Forgot Password Link */}
            <View className="items-center">
              <TouchableOpacity onPress={handleForgotPassword}>
                <Text className="text-gray-300 text-sm">Forgot Password?</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
