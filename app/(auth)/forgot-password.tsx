import { router } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LoadingSpinner from "../components/LoadingSpinner";
import Button from "../components/Button";

export default function ForgotPassword() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSendResetOTP = async () => {
    if (!phoneNumber || phoneNumber.length !== 10) {
      Alert.alert("Error", "Please enter a valid 10-digit phone number");
      return;
    }

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Navigate directly to OTP verification screen
      router.push({
        pathname: "/(auth)/otp-verification",
        params: {
          phoneNumber: `+91${phoneNumber}`,
          isPasswordReset: "true",
        },
      });
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
              <Text className="text-white text-lg">Forgot Password?</Text>
            </View>

            {/* Form */}
            <View className="mb-8">
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
            </View>

            {/* Info Text */}
            <View className="mb-8">
              <Text className="text-gray-300 text-sm text-center leading-5">
                We&apos;ll send you a verification code to reset your password
                securely.
              </Text>
            </View>

            {/* Send OTP Button */}
            {isLoading ? (
              <View className="py-4 mb-6">
                <LoadingSpinner text="Sending OTP..." color="white" />
              </View>
            ) : (
              <Button
                title="Send OTP"
                variant="primary"
                size="medium"
                onPress={handleSendResetOTP}
                className="mb-6"
              />
            )}

            {/* Login Link */}
            <View className="items-center">
              <Text className="text-gray-300 text-sm">
                Remember your password?{" "}
                <Text
                  className="text-white font-medium"
                  onPress={() => router.push("/(auth)/login")}
                >
                  Sign In
                </Text>
              </Text>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
