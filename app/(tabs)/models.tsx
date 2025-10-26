import React, { useState } from "react"
import { useRouter } from "expo-router"
import { useFocusEffect } from "@react-navigation/native"
import { SafeAreaView } from "react-native-safe-area-context"
import { View, TouchableOpacity, FlatList, Image } from "react-native"

import AsyncStorage from "@react-native-async-storage/async-storage"
import AppText from "@/components/layout/app-text"

type ModelItem = {
    url: string
    name: string
    thumbnail: string
    description?: string
}

const modelMetadata: Record<
    string,
    { name: string; thumbnail: string; description: string }
> = {
    "https://vsaintz.github.io/glb-assets/grandfather_clock.glb": {
        name: "Grandfather Clock",
        thumbnail: "https://res.cloudinary.com/defh2c1db/image/upload/v1761484542/c15885f6e7cc0ceb3b08_kjxr77.jpg",
        description: "Classic clock with intricate details and vintage design.",
    },
    "https://vsaintz.github.io/glb-assets/radial_symmetry.glb": {
        name: "Radial Symmetry Gear",
        thumbnail: "https://res.cloudinary.com/defh2c1db/image/upload/v1761483994/9af0ca3ad1d2d4c9fb29_wo92ye.jpg",
        description: "Precise symmetrical 3D model of a mechanical gear.",
    },
}

export default function Models() {
    const router = useRouter()
    const [models, setModels] = useState<ModelItem[]>([])

    useFocusEffect(
        React.useCallback(() => {
            const loadModels = async () => {
                try {
                    const stored = await AsyncStorage.getItem("scannedModels");
                    if (stored) {
                        const urls: string[] = JSON.parse(stored);
                        const mappedModels: ModelItem[] = urls.map((url) => {
                            const meta = modelMetadata[url];
                            return {
                                url,
                                name: meta?.name || "Unknown Model",
                                thumbnail:
                                    meta?.thumbnail ||
                                    "https://res.cloudinary.com/defh2c1db/image/upload/v1761395936/674091f98513a0ad97ac_qxqk5r.jpg",
                                description: meta?.description || "No description available.",
                            }
                        })
                        setModels(mappedModels)
                    } else {
                        setModels([])
                    }
                } catch (error) {
                    console.error("Failed to load models from storage", error)
                    setModels([])
                }
            }
            loadModels()
            return () => { }
        }, [])
    )

    return (
        <SafeAreaView className="flex-1 bg-white p-3" edges={["top"]}>
            <View className="w-full flex-row justify-between items-center mb-10">
                <AppText className="text-2xl font-bold">
                    Models
                </AppText>
                <TouchableOpacity
                    className="bg-red-400 py-2 px-4 rounded-xl self-end"
                    onPress={async () => {
                        await AsyncStorage.removeItem("scannedModels")
                        setModels([])
                        console.log("Models Cleared!")
                    }}
                >
                    <AppText className="text-white font-medium">Clear All</AppText>
                </TouchableOpacity>
            </View>

            {models.length === 0 ? (
                <View className="flex-1 items-center justify-center">
                    <Image
                        source={{ uri: "https://res.cloudinary.com/defh2c1db/image/upload/v1761399498/65887803e84088e9a030_yzalsr.png" }}
                        className="w-28 h-28"
                    />
                    <AppText className="text-black text-xl font-medium text-center px-6 mt-5">
                        No models scanned yet
                    </AppText>
                    <AppText className="w-full text-[#6b7280] text-sm text-center px-6 mt-2">
                        Scan a QR code to add your first 3D model here
                    </AppText>
                </View>
            ) : (
                <FlatList
                    data={models}
                    keyExtractor={(item) => item.url}
                    numColumns={2}
                    columnWrapperStyle={{ justifyContent: "space-between" }}
                    contentContainerStyle={{ paddingBottom: 20 }}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            className="bg-white rounded-2xl mb-4 shadow-2xl w-[48%]"
                            onPress={() =>
                                router.push(
                                    `/model-viewer?modelUrl=${encodeURIComponent(item.url)}`
                                )
                            }
                        >
                            <Image
                                source={{ uri: item.thumbnail }}
                                className="w-full h-32 rounded-t-2xl"
                                resizeMode="cover"
                            />
                            <View className="p-3">
                                <AppText
                                    numberOfLines={1}
                                    className="text-gray-900 font-semibold text-sm"
                                >
                                    {item.name}
                                </AppText>
                                <AppText
                                    numberOfLines={2}
                                    className="text-gray-500 text-xs mt-1"
                                >
                                    {item.description}
                                </AppText>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            )}
        </SafeAreaView>
    )
}
