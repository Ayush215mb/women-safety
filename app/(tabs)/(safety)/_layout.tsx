import { Stack } from "expo-router";

export default function SafetyLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="index" 
        options={{ 
          headerShown: false,
          title: "Safety" 
        }} 
      />
    </Stack>
  );
}
