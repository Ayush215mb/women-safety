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

export default function Register() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSendOTP = async () => {
    if (!phoneNumber || phoneNumber.length !== 10) {
      Alert.alert("Error", "Please enter a valid 10-digit phone number");
      return;
    }

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Navigate to OTP verification with phone number
      router.push({
        pathname: "/(auth)/otp-verification",
        params: { phoneNumber: `+91${phoneNumber}` },
      });
    }, 2000);
  };

  return (
    <SafeAreaView className="flex-1 bg-background">
      {/* Dotted Background Pattern */}
      <View className="absolute top-20 left-4 opacity-20">
        <View className="w-32 h-32 border-2 border-dashed border-primary/30 rounded-full" />
      </View>
      <View className="absolute top-40 right-8 opacity-20">
        <View className="w-24 h-24 border-2 border-dashed border-primary/30 rounded-full" />
      </View>
      <View className="absolute bottom-32 left-8 opacity-20">
        <View className="w-20 h-20 border-2 border-dashed border-primary/30 rounded-full" />
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
            <View className="items-center mb-12">
              <Text className="text-2xl font-bold text-text mb-2">
                Create Your Account
              </Text>
              <Text className="text-text/70 text-base">
                Enter Your Mobile Number
              </Text>
            </View>

            {/* Phone Input Section */}
            <View className="mb-8">
              <View className="flex-row bg-white rounded-lg shadow-sm border border-gray-200">
                <View className="px-4 py-4 border-r border-gray-200 justify-center">
                  <Text className="text-gray-700 font-medium text-base">
                    +91
                  </Text>
                </View>
                <TextInput
                  className="flex-1 px-4 py-4 text-gray-700 text-base"
                  placeholder="0000000000"
                  placeholderTextColor="#9CA3AF"
                  value={phoneNumber}
                  onChangeText={setPhoneNumber}
                  keyboardType="numeric"
                  maxLength={10}
                />
              </View>
            </View>

            {/* Send OTP Button */}
            {isLoading ? (
              <View className="py-4 mb-6">
                <LoadingSpinner text="Sending OTP..." color="#710D0B" />
              </View>
            ) : (
              <Button
                title="Send OTP"
                variant="primary"
                size="medium"
                onPress={handleSendOTP}
                className="mb-6"
              />
            )}

            {/* Divider */}
            <View className="items-center mb-6">
              <Text className="text-gray-500 text-sm">Or</Text>
            </View>

            {/* Login Link */}
            <View className="items-center">
              <Text className="text-text/70 text-sm">
                Already have an account?{" "}
                <Text
                  className="text-primary font-medium"
                  onPress={() => router.push("/(auth)/login")}
                >
                  Log In
                </Text>
              </Text>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
