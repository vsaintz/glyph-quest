import React from "react"
import { View, Image, TouchableOpacity } from "react-native"

import AppText from "@/components/layout/app-text"

type PermissionProps = {
    onRequestPermission: () => void
}

export function Permission({ onRequestPermission }: PermissionProps) {
    return (
        <View className="flex-1 justify-center items-center bg-white">
            <View className="w-full m-3 px-7">
                <Image
                    source={{ uri: "https://res.cloudinary.com/defh2c1db/image/upload/v1761399491/2401c64dcfab41c62568_g2tlts.png" }}
                    className="mx-auto w-28 h-28"
                />
                <AppText className="text-center text-black font-extrabold text-2xl mt-7 mb-4">
                    Enable Camera Access
                </AppText>
                <AppText className="text-center text-[#7b7b7c] font-bold text-base">
                    To scan QR codes, please grant permission to access your device's camera. The camera will only be used for scanning and no images will be saved.
                </AppText>
                <TouchableOpacity
                    className="bg-black w-auto p-3 rounded-xl mt-7"
                    onPress={onRequestPermission}
                >
                    <AppText className="text-center text-white font-bold"> Grant permission </AppText>
                </TouchableOpacity>
            </View>
        </View>
    )
}