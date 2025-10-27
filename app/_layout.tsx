import React from "react"
import { Stack } from "expo-router"
import { StatusBar } from "react-native"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { useFonts, Montserrat_400Regular } from "@expo-google-fonts/montserrat"
import "@/global.css"
import EventOverlay from "@/components/ui/event-overlay"

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Montserrat: Montserrat_400Regular,
  })
  if (!fontsLoaded) return null

  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" />
      <Stack
        screenOptions={{
          headerShown: false,
          animation: "fade_from_bottom",
        }}
      >
        <Stack.Screen name="(tabs)" />
      </Stack>

      <EventOverlay />
    </SafeAreaProvider>
  )
}
