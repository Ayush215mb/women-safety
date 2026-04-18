import { router, useLocalSearchParams } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
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

export default function OTPVerification() {
  const { phoneNumber, isPasswordReset } = useLocalSearchParams();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [isLoading, setIsLoading] = useState(false);
  const inputRefs = useRef<TextInput[]>([]);

  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, 6);
  }, []);

  const handleChangeText = (text: string, index: number) => {
    // Only allow single digit
    if (text.length > 1) {
      text = text.slice(-1);
    }

    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // Auto-focus next input if value is entered
    if (text && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    // Auto-submit when all digits are filled
    if (text && index === 5) {
      const finalOtp = [...newOtp];
      if (finalOtp.every((digit) => digit !== "")) {
        handleVerifyOTP();
      }
    }
  };

  interface OtpInputEvent {
    nativeEvent: {
      key: string;
    };
  }

  const handleKeyPress = (e: OtpInputEvent, index: number) => {
    // Handle backspace - move to previous input if current is empty
    if (e.nativeEvent.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleFocus = (index: number) => {
    // Clear the input when focused if it already has a value
    if (otp[index]) {
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);
    }
  };

  const handleVerifyOTP = async () => {
    const otpString = otp.join("");
    console.log(otpString);
    if (otpString.length !== 6) {
      Alert.alert("Error", "Please enter the complete 6-digit OTP");
      return;
    }

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Check if this is a password reset flow
      if (isPasswordReset === "true") {
        // Navigate to reset password screen
        router.push({
          pathname: "/(auth)/reset-password",
          params: { phoneNumber },
        });
      } else {
        // Navigate to profile setup after successful verification
        router.push("/(auth)/profile-setup");
      }
    }, 2000);
  };

  const handleResendOTP = () => {
    Alert.alert("OTP Sent", "A new OTP has been sent to your number");
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
            {/* Header */}
            <View className="items-center mb-12">
              <Text className="text-2xl font-bold text-text mb-2">
                Verify OTP
              </Text>
              <Text className="text-text/70">
                Enter the 6-digit code sent to {phoneNumber}
              </Text>
            </View>

            {/* OTP Input */}
            <View className="flex-row justify-between mb-8">
              {otp.map((digit, index) => (
                <TextInput
                  key={index}
                  ref={(ref) => {
                    if (ref) inputRefs.current[index] = ref;
                  }}
                  keyboardType="numeric"
                  maxLength={1}
                  value={digit}
                  onChangeText={(text) => handleChangeText(text, index)}
                  onKeyPress={(e) => handleKeyPress(e, index)}
                  onFocus={() => handleFocus(index)}
                  className="w-12 h-12 bg-white rounded-lg border border-gray-200 text-center text-lg font-semibold"
                  placeholder=""
                  placeholderTextColor="#000000"
                  selectTextOnFocus={true}
                />
              ))}
            </View>

            {/* Resend OTP */}
            <View className="items-center mb-8">
              <Text className="text-text/70">
                Didn&apos;t receive the code?{" "}
                <Text
                  className="text-primary font-medium"
                  onPress={handleResendOTP}
                >
                  Resend OTP
                </Text>
              </Text>
            </View>

            {/* Verify Button */}
            <Button
              title={isLoading ? "Verifying..." : "Verify OTP"}
              variant="primary"
              size="medium"
              onPress={handleVerifyOTP}
              disabled={isLoading}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
