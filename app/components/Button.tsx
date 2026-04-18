import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: "primary" | "secondary" | "success" | "warning" | "error";
  size?: "small" | "medium" | "large";
  textClassName?: string;
}

export default function Button({
  title,
  variant = "primary",
  size = "medium",
  textClassName,
  className = "",
  ...props
}: ButtonProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case "primary":
        return "bg-primary border-2 border-white shadow-primary/30";
      case "secondary":
        return "bg-secondary border-2 border-white shadow-secondary/30";
      case "success":
        return "bg-success border-2 border-white shadow-success/30";
      case "warning":
        return "bg-warning border-2 border-white shadow-warning/30";
      case "error":
        return "bg-error border-2 border-white shadow-error/30";
      default:
        return "bg-primary border-2 border-white shadow-primary/30";
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case "small":
        return "py-2 px-4 rounded-lg";
      case "medium":
        return "py-4 px-6 rounded-xl";
      case "large":
        return "py-5 px-8 rounded-2xl";
      default:
        return "py-4 px-6 rounded-xl";
    }
  };

  const getTextSizeClasses = () => {
    switch (size) {
      case "small":
        return "text-sm font-bold";
      case "medium":
        return "text-base font-bold";
      case "large":
        return "text-lg font-bold";
      default:
        return "text-base font-bold";
    }
  };

  return (
    <TouchableOpacity
      className={`items-center justify-center shadow-lg elevation-6 ${getVariantClasses()} ${getSizeClasses()} ${className}`}
      activeOpacity={0.8}
      {...props}
    >
      <Text
        className={`text-white ${getTextSizeClasses()} ${textClassName || ""}`}
        style={{
          textShadowColor: 'rgba(0, 0, 0, 0.4)',
          textShadowOffset: { width: 0, height: 1 },
          textShadowRadius: 2,
          letterSpacing: 0.5,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
