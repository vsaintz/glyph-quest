import React from "react"
import { useRouter } from "expo-router"
import { Svg, Path } from "react-native-svg"
import { SafeAreaView } from "react-native-safe-area-context"
import { View, TouchableOpacity, Image } from "react-native"

import AppText from "@/components/layout/app-text"

export default function Index() {

  const router = useRouter()

  return (
    <SafeAreaView className="flex-1 bg-white" edges={["top"]}>
      <View className="flex-1 bg-white items-center justify-center">
        <View className="w-full">
          <Image
            source={{ uri: "https://res.cloudinary.com/defh2c1db/image/upload/v1761398392/a4c9676c4e38586177a1_dfyngq.jpg" }}
            className="mx-auto w-full h-96"
          />
        </View>

        <AppText className="text-black text-3xl font-extrabold tracking-wide text-center mt-10">
          Tech Treasure Hunt
        </AppText>

        <AppText className="w-full text-[#7b7b7c] text-base font-bold mt-3 text-center px-4">
          Scan QR codes placed across campus. Each code reveals a 3D model with
          hidden hints. Work in teams, solve riddles, and race to the finish.
        </AppText>

        <TouchableOpacity
          className="mt-10 bg-black rounded-2xl px-8 py-4 shadow-lg"
          onPress={() => router.push('/(tabs)/camera')}
          activeOpacity={0.8}
        >
          <AppText className="text-white text-md font-bold">Start Hunt</AppText>
        </TouchableOpacity>

        <Svg height="80" width="500" viewBox="0 0 200 80" className="absolute bottom-10">
          <Path d="M10 70 Q 95 10, 190 70" stroke="black" strokeWidth="1" fill="none" strokeDasharray="6 6" />
        </Svg>
      </View>
    </SafeAreaView>
  )
}
