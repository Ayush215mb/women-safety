import { Stack } from "expo-router";

export default function EmergencyLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="index" 
        options={{ 
          headerShown: false,
          title: "Emergency" 
        }} 
      />
    </Stack>
  );
}
