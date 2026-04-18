import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import Button from "../components/Button";

const { width, height } = Dimensions.get("window");

const onboardingData = [
  {
    id: 1,
    title: "Safe Travel Companion",
    subtitle: "Your trusted partner for secure journeys",
    description:
      "Whether you're traveling near or far, We ensures your safety every step of the way with real-time monitoring and emergency assistance.",
    image: require("../../assets/images/Auth_Img_One.png"),
    backgroundColor: "#D6D7D2",
    primaryColor: "#710D0B",
  },
  {
    id: 2,
    title: "Instant Emergency Help",
    subtitle: "Help is just one tap away",
    description:
      "Connect instantly with emergency services, trusted contacts, and nearby help. Our smart alert system ensures you're never alone in critical situations.",
    image: require("../../assets/images/Auth_Img_Two_Phone.png"),
    backgroundColor: "#FEF3F2",
    primaryColor: "#710D0B",
  },
  {
    id: 3,
    title: "Community Support",
    subtitle: "Strength in numbers",
    description:
      "Join a caring community that looks out for each other. Share safety tips, get local insights, and build connections that matter.",
    image: require("../../assets/images/Auth_Img_Three.png"),
    backgroundColor: "#F0FDF4",
    primaryColor: "#710D0B",
  },
  {
    id: 4,
    title: "Privacy & Security First",
    subtitle: "Your data, your control",
    description:
      "Advanced encryption and privacy controls ensure your personal information stays secure while keeping you connected to help when needed.",
    image: require("../../assets/images/Auth_Img_Four_girls.png"),
    backgroundColor: "#FDF2F8",
    primaryColor: "#710D0B",
  },
];

export default function Welcome() {
  const [currentPage, setCurrentPage] = useState(0);

  const handleNextPage = () => {
    if (currentPage < onboardingData.length - 1) {
      setCurrentPage(currentPage + 1);
    } else {
      router.push("/(auth)/register");
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleSkip = () => {
    router.push("/(auth)/register");
  };

  const currentItem = onboardingData[currentPage];

  return (
    <SafeAreaView
      style={[{ flex: 1, backgroundColor: currentItem.backgroundColor }]}
    >
      {/* Small decorative particles around images */}
      <Image
        source={require("../../assets/images/Subtract.png")}
        style={[styles.particle1, { tintColor: currentItem.primaryColor }]}
        resizeMode="contain"
      />
      <Image
        source={require("../../assets/images/Subtract.png")}
        style={[styles.particle2, { tintColor: currentItem.primaryColor }]}
        resizeMode="contain"
      />
      <Image
        source={require("../../assets/images/Subtract.png")}
        style={[styles.particle3, { tintColor: currentItem.primaryColor }]}
        resizeMode="contain"
      />
      <Image
        source={require("../../assets/images/Subtract.png")}
        style={[styles.particle4, { tintColor: currentItem.primaryColor }]}
        resizeMode="contain"
      />

      <View className="flex-row justify-end px-5 pt-2 pb-5 z-10">
        <TouchableOpacity onPress={handleSkip} className="py-2 px-4">
          <Text className="text-base text-text/60 font-medium">Skip</Text>
        </TouchableOpacity>
      </View>

      <View className="flex-1 items-center justify-between px-4 py-5 z-10">
        <View
          className="flex-1 items-center justify-center"
          style={{ maxHeight: height * 0.45, minHeight: height * 0.3 }}
        >
          <Image
            source={currentItem.image}
            style={styles.image}
            resizeMode="contain"
          />
        </View>

        <View
          className="items-center px-4 pt-5"
          style={{ maxWidth: width - 32 }}
        >
          <Text className="text-2xl font-bold text-text text-center mb-2 px-2">
            {currentItem.title}
          </Text>
          <Text
            className="text-lg font-semibold text-center mb-3 px-2"
            style={{ color: currentItem.primaryColor }}
          >
            {currentItem.subtitle}
          </Text>
          <Text className="text-sm text-text/70 text-center leading-6 px-1">
            {currentItem.description}
          </Text>
        </View>
      </View>

      <View className="px-4 pb-8 pt-4 z-10">
        <View className="flex-row justify-center items-center mb-6">
          {onboardingData.map((_, index) => (
            <View
              key={index}
              className="h-2 rounded-full mx-1"
              style={{
                backgroundColor:
                  index === currentPage ? currentItem.primaryColor : "#D1D5DB",
                width: index === currentPage ? 24 : 8,
              }}
            />
          ))}
        </View>

        <View className="w-full items-end">
          <Button
            title={
              currentPage === onboardingData.length - 1
                ? "Get Started"
                : "Continue"
            }
            variant="primary"
            size="medium"
            onPress={handleNextPage}
            className="self-end"
            style={{
              minWidth: width * 0.35,
              minHeight: 48,
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  particle1: {
    position: "absolute",
    top: Math.max(80, height * 0.12),
    left: Math.max(10, width * 0.04),
    width: Math.min(25, width * 0.06),
    height: Math.min(25, width * 0.06),
    opacity: 0.4,
    zIndex: 0,
  },
  particle2: {
    position: "absolute",
    top: Math.max(140, height * 0.2),
    right: Math.max(15, width * 0.06),
    width: Math.min(18, width * 0.045),
    height: Math.min(18, width * 0.045),
    opacity: 0.3,
    zIndex: 0,
  },
  particle3: {
    position: "absolute",
    top: Math.max(280, height * 0.35),
    left: Math.max(20, width * 0.08),
    width: Math.min(22, width * 0.055),
    height: Math.min(22, width * 0.055),
    opacity: 0.35,
    zIndex: 0,
  },
  particle4: {
    position: "absolute",
    top: Math.max(240, height * 0.3),
    right: Math.max(10, width * 0.04),
    width: Math.min(28, width * 0.07),
    height: Math.min(28, width * 0.07),
    opacity: 0.25,
    zIndex: 0,
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
    zIndex: 1,
  },
  skipButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  skipText: {
    fontSize: 16,
    color: "#6B7280",
    fontWeight: "500",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 20,
    zIndex: 1,
  },
  imageContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    maxHeight: height * 0.45,
    minHeight: height * 0.3,
  },
  image: {
    width: Math.min(width * 0.75, 300),
    height: Math.min(height * 0.35, 280),
    maxWidth: "100%",
  },
  contentContainer: {
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 20,
    maxWidth: width - 32,
  },
  title: {
    fontSize: Math.min(width * 0.07, 26),
    fontWeight: "bold",
    color: "#1F2937",
    textAlign: "center",
    marginBottom: 6,
    paddingHorizontal: 8,
  },
  subtitle: {
    fontSize: Math.min(width * 0.045, 17),
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  description: {
    fontSize: Math.min(width * 0.04, 15),
    color: "#6B7280",
    textAlign: "center",
    lineHeight: Math.min(width * 0.055, 22),
    paddingHorizontal: 4,
  },
  footer: {
    paddingHorizontal: 16,
    paddingBottom: Math.max(20, height * 0.03),
    paddingTop: 16,
    zIndex: 1,
  },
  indicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: Math.max(20, height * 0.025),
  },
  indicator: {
    height: 6,
    borderRadius: 3,
    marginHorizontal: 3,
  },
  continueButtonContainer: {
    width: "100%",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  continueButton: {
    borderRadius: 12,
    paddingVertical: Math.max(14, height * 0.02),
    paddingHorizontal: Math.max(24, width * 0.06),
    alignItems: "center",
    justifyContent: "center",
    elevation: 6,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    minWidth: width * 0.35,
    minHeight: 48,
    opacity: 1,
    alignSelf: "flex-end",
  },
  continueButtonText: {
    color: "#FFFFFF",
    fontSize: Math.max(Math.min(width * 0.045, 17), 14),
    fontWeight: "800",
    textShadowColor: "rgba(0, 0, 0, 0.4)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
    letterSpacing: 0.5,
  },
});
