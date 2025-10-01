import React, { useState } from "react"
import { useRouter } from "expo-router"
import { useFocusEffect } from "@react-navigation/native"
import { SafeAreaView } from "react-native-safe-area-context"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { View, Text, TouchableOpacity, FlatList, Image } from "react-native"

type ModelItem = {
    url: string
    name: string
    thumbnail: any
    description?: string
}

const modelMetadata: Record<
    string,
    { name: string; thumbnail: any; description: string }
> = {
    "https://vsaintz.github.io/glb-assets/tiefling.glb": {
        name: "Tiefling",
        thumbnail: require("@/assets/models/tiefling.png"),
        description: "View and examine this model with dynamic 3D controls.",
    },
    "https://vsaintz.github.io/glb-assets/hornet.glb": {
        name: "Hornet",
        thumbnail: require("@/assets/models/hornet.png"),
        description: "View and examine this model with dynamic 3D controls.",
    },
    "https://vsaintz.github.io/glb-assets/spidercat.glb": {
        name: "Spider Cat",
        thumbnail: require("@/assets/models/spidercat.png"),
        description: "View and examine this model with dynamic 3D controls.",
    },
    "https://vsaintz.github.io/glb-assets/anime_girl.glb": {
        name: "Anime Girl",
        thumbnail: require("@/assets/models/anime_girl.png"),
        description: "View and examine this model with dynamic 3D controls.",
    },
    "https://vsaintz.github.io/glb-assets/higokumaru.glb": {
        name: "Higokumaru",
        thumbnail: require("@/assets/models/higokumaru.png"),
        description: "View and examine this model with dynamic 3D controls.",
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
                                    "https://via.placeholder.com/300x300.png?text=No+Preview",
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
                <Text className="text-2xl font-bold">
                    Models
                </Text>
                <TouchableOpacity
                    className="bg-red-400 py-2 px-4 rounded-xl self-end"
                    onPress={async () => {
                        await AsyncStorage.removeItem("scannedModels")
                        setModels([])
                        console.log("Models Cleared!")
                    }}
                >
                    <Text className="text-white font-medium">Clear All</Text>
                </TouchableOpacity>
            </View>

            {models.length === 0 ? (
                <View className="flex-1 items-center justify-center">
                    <Image
                        source={require('@/assets/illustration/roadmap.png')}
                        className="w-28 h-28"
                    />
                    <Text className="text-black text-xl font-medium text-center px-6 mt-5">
                        No models scanned yet
                    </Text>
                    <Text className="w-full text-[#6b7280] text-sm text-center px-6 mt-2">
                        Scan a QR code to add your first 3D model here
                    </Text>
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
                                source={item.thumbnail}
                                className="w-full h-32 rounded-t-2xl"
                                resizeMode="cover"
                            />
                            <View className="p-3">
                                <Text
                                    numberOfLines={1}
                                    className="text-gray-900 font-semibold text-sm"
                                >
                                    {item.name}
                                </Text>
                                <Text
                                    numberOfLines={2}
                                    className="text-gray-500 text-xs mt-1"
                                >
                                    {item.description}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            )}
        </SafeAreaView>
    )
}
