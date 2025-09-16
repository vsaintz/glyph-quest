import React, { ReactNode } from 'react'
import { View, Image, Text, Dimensions, Platform, StatusBar } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import Entypo from '@expo/vector-icons/Entypo'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const { width } = Dimensions.get('window')

type IconButtonProps = {
  children: ReactNode;
}

const IconButton = ({ children }: IconButtonProps) => (
  <View className="border border-white rounded-full px-4 py-1 bg-transparent justify-center items-center">
    {children}
  </View>
)

type TextBadgeProps = {
  text: string;
}

const TextBadge = ({ text }: TextBadgeProps) => (
  <View className="absolute -top-2 -right-7 w-7 h-7 rounded-full border border-white justify-center items-center">
    <Text className="text-[10px] text-white font-bold">{text}</Text>
  </View>
)

export default function Index() {
  return (
    <SafeAreaProvider style={[{ flex: 1, backgroundColor: "black", paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }]}>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <View className="w-full h-full bg-black">
        <Image
          source={require('@/assets/images/pexels-aloevera-17612352.jpg')}
          className="absolute w-full h-full z-0"
          resizeMode="cover"
          accessible
          accessibilityLabel="Background image of Aloe Vera"
        />

        <View className="flex-row items-center px-5 mt-[110%]">
          <View className="relative">
            <Text className="text-[45px] text-white">Roavia</Text>
            <TextBadge text="TM" />
          </View>
        </View>

        <View
          className="flex-row justify-evenly items-center mt-10 mr-2 ml-auto"
          style={{ width: width * 0.65 }}
        >
          <IconButton>
            <Entypo name="location-pin" size={24} color="#fff" />
          </IconButton>
          <IconButton>
            <Ionicons name="cafe-outline" size={24} color="#fff" />
          </IconButton>
          <IconButton>
            <Ionicons name="restaurant-outline" size={24} color="#fff" />
          </IconButton>
        </View>

        <View
          className="mt-4 mr-2 ml-auto"
          style={{ width: width * 0.65 }}
        >
          <Text className="text-white text-[15px] leading-5 text-justify">
            Find your place—whether it’s a cozy café, a hillside homestay, or a hidden local shop.
          </Text>
        </View>
      </View>
    </SafeAreaProvider>
  )
}
