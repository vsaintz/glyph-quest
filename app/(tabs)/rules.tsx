import React from "react"
import { View, ScrollView, Image } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import AppText from "@/components/layout/app-text"

export default function Rules() {
    const rules = [
        {
            id: 1,
            icon: "https://res.cloudinary.com/defh2c1db/image/upload/v1761399498/13bcbd03e372a67ef114_ejye54.png",
            title: 'First Rule',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
        },
        {
            id: 2,
            icon: "https://res.cloudinary.com/defh2c1db/image/upload/v1761399498/13bcbd03e372a67ef114_ejye54.png",
            title: 'Second Rule',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
        },
        {
            id: 3,
            icon: "https://res.cloudinary.com/defh2c1db/image/upload/v1761399498/13bcbd03e372a67ef114_ejye54.png",
            title: 'Third Rule',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
        },
        {
            id: 4,
            icon: "https://res.cloudinary.com/defh2c1db/image/upload/v1761399498/13bcbd03e372a67ef114_ejye54.png",
            title: 'Fourth Rule',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
        },
        {
            id: 5,
            icon: "https://res.cloudinary.com/defh2c1db/image/upload/v1761399498/13bcbd03e372a67ef114_ejye54.png",
            title: 'Fifth Rule',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
        },
    ]

    return (
        <SafeAreaView className="flex-1 bg-white" edges={["top"]}>
            <ScrollView
                className="flex-1 px-2"
                showsVerticalScrollIndicator={false}
            >
                <View className="w-full p-2">
                    <View className="flex-col justify-center items-center mb-1">
                        <Image
                            source={{ uri: "https://res.cloudinary.com/defh2c1db/image/upload/v1761398684/1f4c4568b3c4be0df206_qi6wjc.png" }}
                            className="w-16 h-16"
                        />
                        <AppText className="text-black text-2xl font-extrabold my-2">
                            Event Guidelines
                        </AppText>
                        <AppText className="text-center text-base text-[#40444d] mb-5">
                            Please review the rules and regulations carefully to ensure a smooth and fair experience for all participants.
                        </AppText>
                    </View>

                    <View className="flex-col gap-5 mt-1 mb-5">
                        {rules.map((item) => (
                            <View key={item.id} className="flex-row gap-2 w-full border border-[#c6c6c6] rounded-xl py-3 px-1">
                                <Image source={{ uri: item.icon }} className="w-10 h-10" />
                                <View className="flex-1 flex-col gap-1">
                                    <AppText className="text-lg font-bold">{item.title}</AppText>
                                    <AppText className="text-md font-semibold text-[#7b7b7c] p-1">
                                        {item.description}
                                    </AppText>
                                </View>
                            </View>
                        ))}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
