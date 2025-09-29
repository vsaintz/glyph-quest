import React, { useState } from "react"
import { View, Text, TouchableOpacity, Image } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { CameraView, useCameraPermissions } from "expo-camera"
import { useRouter } from "expo-router"
import { saveModel } from "@/utils/storage"

export default function Camera() {
    const [permission, requestPermission] = useCameraPermissions()
    const [scanned, setScanned] = useState(false)
    const router = useRouter()

    const handleScan = (data: string) => {
        if (scanned) return
        setScanned(true)
        saveModel(data.trim())
        router.push(`/model-viewer?modelUrl=${encodeURIComponent(data.trim())}`)
    }

    if (!permission) return <View />
    if (!permission.granted)
        return (
            <View className="flex flex-1 justify-center items-center bg-white">
                <View className="w-full m-3 px-7">
                    <Image
                        source={require('@/assets/illustration/camera.png')}
                        className="mx-auto w-28 h-28"
                    />
                    <Text className="text-center text-black text-2xl mt-7 mb-4">
                        Enable Camera Access
                    </Text>
                    <Text className="text-center text-[#6b7280] text-sm">
                        To scan QR codes, please grant permission to access your device's camera. The camera will only be used for scanning and no images will be saved.
                    </Text>
                    <TouchableOpacity
                        className="bg-black w-auto p-3 rounded-xl mt-7"
                        onPress={requestPermission}
                    >
                        <Text className="text-center text-white"> Grant permission </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    return (
        <SafeAreaView style={{ flex: 1 }} edges={['top']}>
            <View style={{ flex: 1 }}>
                <CameraView
                    style={{ flex: 1 }}
                    facing="back"
                    onBarcodeScanned={({ data }) => { handleScan(data) }}
                />
                <View
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <View
                        style={{
                            width: 250,
                            height: 250,
                            borderRadius: 20,
                            borderWidth: 2,
                            borderColor: "white",
                            backgroundColor: "transparent",
                        }}
                    />
                    <Text
                        style={{
                            color: "white",
                            textAlign: "center",
                            marginTop: 5,
                            fontSize: 12,
                        }}
                    >
                        Align the QR code within the frame
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    )
}
