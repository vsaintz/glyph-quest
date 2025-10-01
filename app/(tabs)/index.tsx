import React from "react"
import { useRouter } from "expo-router"
import { Svg, Path } from "react-native-svg"
import { SafeAreaView } from "react-native-safe-area-context"
import { View, Text, TouchableOpacity, Image } from "react-native"

export default function Index() {

  const router = useRouter()

  return (
    <SafeAreaView className="flex-1 bg-white" edges={["top"]}>
      <View className="flex-1 bg-white items-center justify-center px-2">
        <View className="w-full">
          <Image
            source={require('@/assets/illustration/map.png')}
            className="mx-auto w-28 h-28"
          />
        </View>

        <Text className="text-black text-3xl font-bold tracking-wide text-center mt-10">
          Tech Treasure Hunt
        </Text>

        <Text className="w-full text-neutral-400 text-base mt-3 text-center px-4">
          Scan QR codes placed across campus. Each code reveals a 3D model with
          hidden hints. Work in teams, solve riddles, and race to the finish.
        </Text>

        <TouchableOpacity
          className="mt-10 bg-black rounded-2xl px-8 py-4 shadow-lg"
          onPress={() => router.push('/(tabs)/camera')}
          activeOpacity={0.8}
        >
          <Text className="text-white text-md font-semibold">Start Hunt</Text>
        </TouchableOpacity>

        <Svg height="80" width="200" viewBox="0 0 200 80" className="absolute bottom-10">
          <Path d="M10 70 Q 95 10, 190 70" stroke="black" strokeWidth="1" fill="none" strokeDasharray="6 6" />
        </Svg>
      </View>
    </SafeAreaView>
  )
}
