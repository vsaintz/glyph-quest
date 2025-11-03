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
    "https://vsaintz.github.io/glb-assets/sphere_shading.glb": {
        name: "Shaded Sphere",
        thumbnail: "https://res.cloudinary.com/defh2c1db/image/upload/v1761931566/aee176eb01c76f487eect_lbfsq8.jpg",
        description: "A smooth sphere shaped by shade and symmetry.",
    },
    "https://vsaintz.github.io/glb-assets/fire_extinguisher.glb": {
        name: "Fire Extinguisher",
        thumbnail: "https://res.cloudinary.com/defh2c1db/image/upload/v1761844476/eba320827e821befbe927_pezf4l.jpg",
        description: "A bright red cylinder with a black grip and yellow nozzle.",
    },
    "https://vsaintz.github.io/glb-assets/recyclebin.glb": {
        name: "Reclaimer",
        thumbnail: "https://res.cloudinary.com/defh2c1db/image/upload/v1761929590/eee176eb01c76f487eect_ixckli.jpg",
        description: "A white vessel marked with the cycle of renewal.",
    },
    "https://vsaintz.github.io/glb-assets/grandfather_clock.glb": {
        name: "Grandfather Clock",
        thumbnail: "https://res.cloudinary.com/defh2c1db/image/upload/v1761675349/833e0870a7700c096e5c_yonizl.jpg",
        description: "Classic clock with intricate details and vintage design.",
    },
    "https://vsaintz.github.io/glb-assets/papers_envelopes.glb": {
        name: "Papers Envelopes",
        thumbnail: "https://res.cloudinary.com/defh2c1db/image/upload/v1761816992/a9b5ee2257984e3b0a447_sn1vot.jpg",
        description: "Model of paper envelopes with folded edges and soft texture.",
    },
    "https://vsaintz.github.io/glb-assets/hologram_projector.glb": {
        name: "Villager Hologram",
        thumbnail: "https://res.cloudinary.com/defh2c1db/image/upload/v1761674762/a29bb743497a0f0c805d99_yqvnew.jpg",
        description: "Model of a Minecraft villager hologram with glow.",
    },
    "https://vsaintz.github.io/glb-assets/magic_book.glb": {
        name: "Magic Book",
        thumbnail: "https://res.cloudinary.com/defh2c1db/image/upload/v1761711777/80a8ceecaef65d89c8339_f12fsy.jpg",
        description: "Aged grimoire collection of forgotten spell books.",
    }
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
                                    "https://res.cloudinary.com/defh2c1db/image/upload/v1762190503/43a8db070542dfbc88d4_ydewet.png",
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
