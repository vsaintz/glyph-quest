import { View, Text } from "react-native"
import { saveModel } from "@/utils/storage"
import React, { useState, useCallback } from "react"
import { useRouter, useFocusEffect } from "expo-router"
import { SafeAreaView } from "react-native-safe-area-context"
import { CameraView, useCameraPermissions } from "expo-camera"

import { Permission } from "@/components/ui/permission"

export default function Camera() {
    const [permission, requestPermission] = useCameraPermissions()
    const [scanned, setScanned] = useState(false)
    const router = useRouter()

    useFocusEffect(
        useCallback(() => {
            setScanned(false)
        }, [])
    )

    const handleScan = (data: string) => {
        if (scanned) return
        console.log(data)
        setScanned(true)
        saveModel(data.trim())
        router.push(`/model-viewer?modelUrl=${encodeURIComponent(data.trim())}`)
    }

    if (!permission) return <View />
    if (!permission.granted)
        return (<Permission onRequestPermission={requestPermission} />)

    return (
        <SafeAreaView className="flex-1" edges={["top"]}>
            <View className="flex-1">
                <CameraView
                    style={{ flex: 1 }}
                    facing="back"
                    onBarcodeScanned={({ data }) => handleScan(data)}
                />
                <View className="absolute top-0 left-0 right-0 bottom-0 justify-center items-center">
                    <View className="w-[250px] h-[250px] rounded-2xl border-2 border-white bg-transparent" />
                    <Text className="text-white text-center mt-5 text-sm">
                        Align the QR code within the frame
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    )
}
