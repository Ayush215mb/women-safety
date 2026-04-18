import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Authentication",
        }}
      />
      <Stack.Screen
        name="login"
        options={{
          headerShown: false,
          title: "Login",
        }}
      />
      <Stack.Screen
        name="register"
        options={{
          headerShown: false,
          title: "Register",
        }}
      />
      <Stack.Screen
        name="otp-verification"
        options={{
          headerShown: false,
          title: "Verify OTP",
        }}
      />
      <Stack.Screen
        name="forgot-password"
        options={{
          headerShown: false,
          title: "Forgot Password",
        }}
      />
      <Stack.Screen
        name="reset-password"
        options={{
          headerShown: false,
          title: "Reset Password",
        }}
      />
      <Stack.Screen
        name="profile-setup"
        options={{
          headerShown: false,
          title: "Profile Setup",
        }}
      />
      <Stack.Screen
        name="welcome"
        options={{
          headerShown: false,
          title: "Welcome",
        }}
      />
      <Stack.Screen
        name="emergency-code"
        options={{
          headerShown: false,
          title: "Emergency Code",
        }}
      />
      <Stack.Screen
        name="approval-wait"
        options={{
          headerShown: false,
          title: "Approval Wait",
        }}
      />
      <Stack.Screen
        name="approval-approved"
        options={{
          headerShown: false,
          title: "Approved",
        }}
      />
      <Stack.Screen
        name="verify-gender"
        options={{
          headerShown: false,
          title: "Verify Gender",
        }}
      />
      <Stack.Screen
        name="face-scan"
        options={{
          headerShown: false,
          title: "Face Scan",
        }}
      />
      <Stack.Screen
        name="verify-id"
        options={{
          headerShown: false,
          title: "Verify ID",
        }}
      />
    </Stack>
  );
}
