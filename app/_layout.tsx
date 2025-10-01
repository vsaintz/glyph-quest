import { Stack } from "expo-router"
import { StatusBar } from "react-native"
import { SafeAreaProvider } from "react-native-safe-area-context"

import "@/global.css"

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
      </Stack>
    </SafeAreaProvider>
  )
}