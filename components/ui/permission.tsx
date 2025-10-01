import { View, Text, Image, TouchableOpacity } from "react-native"

type PermissionProps = {
    onRequestPermission: () => void
}

export function Permission({ onRequestPermission }: PermissionProps) {
    return (
        <View className="flex-1 justify-center items-center bg-white">
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
                    onPress={onRequestPermission}
                >
                    <Text className="text-center text-white"> Grant permission </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}