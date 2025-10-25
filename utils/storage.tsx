import AsyncStorage from "@react-native-async-storage/async-storage"

export async function saveModel(url: string) {
    try {
        const stored = await AsyncStorage.getItem("scannedModels")
        const models = stored ? JSON.parse(stored) : []

        if (!models.includes(url)) {
            models.push(url)
            await AsyncStorage.setItem("scannedModels", JSON.stringify(models))
            console.log("Model saved successfully!")
        }
    } catch (e) {
        console.error("Failed to save model:", e)
    }
}