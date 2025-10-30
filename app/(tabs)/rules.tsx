import React from "react"
import { View, ScrollView, Image } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import AppText from "@/components/layout/app-text"

export default function Rules() {
    const rules = [
        {
            id: 1,
            icon: "https://res.cloudinary.com/defh2c1db/image/upload/v1761399498/13bcbd03e372a67ef114_ejye54.png",
            title: 'Venue Boundaries',
            description: 'The entire hunt takes place inside the building. Do not leave the premises during the event.'
        },
        {
            id: 2,
            icon: "https://res.cloudinary.com/defh2c1db/image/upload/v1761399498/13bcbd03e372a67ef114_ejye54.png",
            title: 'Participants Only',
            description: 'Only registered participants are allowed to play. If you haven’t registered, please contact a volunteer or event coordinator before joining.'
        },
        {
            id: 3,
            icon: "https://res.cloudinary.com/defh2c1db/image/upload/v1761399498/13bcbd03e372a67ef114_ejye54.png",
            title: 'Solve in Order',
            description: 'Puzzles must be solved in sequence. Skipping ahead or accessing later clues early will result in disqualification.'
        },
        {
            id: 4,
            icon: "https://res.cloudinary.com/defh2c1db/image/upload/v1761399498/13bcbd03e372a67ef114_ejye54.png",
            title: 'Fair Play',
            description: 'No sharing of answers or clues between teams. Collaboration outside your team is not allowed.'
        },
        {
            id: 5,
            icon: "https://res.cloudinary.com/defh2c1db/image/upload/v1761399498/13bcbd03e372a67ef114_ejye54.png",
            title: 'Use of Devices',
            description: 'Use your phone only for scanning QR codes and solving digital clues. Avoid using the internet for external help.'
        },
        {
            id: 6,
            icon: "https://res.cloudinary.com/defh2c1db/image/upload/v1761399498/13bcbd03e372a67ef114_ejye54.png",
            title: 'Respect the Space',
            description: 'If you think the clue is hidden behind something, ask a volunteer for help. Do not remove or move any objects yourself.'
        },
        {
            id: 7,
            icon: "https://res.cloudinary.com/defh2c1db/image/upload/v1761399498/13bcbd03e372a67ef114_ejye54.png",
            title: 'Time Limit',
            description: 'Complete the hunt within the given time. Late submissions won’t be counted.'
        },
        {
            id: 8,
            icon: "https://res.cloudinary.com/defh2c1db/image/upload/v1761399498/13bcbd03e372a67ef114_ejye54.png",
            title: 'Need Help?',
            description: 'If you’re stuck, lost, or unsure ask a volunteer, they’re here to guide, not give away answers.'
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

                    <View className="flex-col gap-3 mt-1 mb-5">
                        {rules.map((item) => (
                            <View key={item.id} className="flex-row gap-2 w-full border border-[#c6c6c6] rounded-xl py-3 px-1">
                                <Image source={{ uri: item.icon }} className="w-10 h-10" />
                                <View className="flex-1 flex-col">
                                    <AppText className="text-lg font-bold">{item.title}</AppText>
                                    <AppText className="text-md font-semibold p-1 text-[#7b7b7c]">
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
