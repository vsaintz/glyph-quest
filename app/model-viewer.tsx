import { WebView } from "react-native-webview"
import { View, TouchableOpacity, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { useLocalSearchParams, useRouter } from "expo-router"

export default function ModelViewer() {
  const { modelUrl } = useLocalSearchParams<{ modelUrl: string }>()
  const router = useRouter()

  const html = `
    <html>
      <head>
        <script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
        <style>
          body, html { margin:0; padding:0; width:100%; height:100%; overflow:hidden; background-color:#DDE4E9; }
          model-viewer { width:100%; height:100%; }
        </style>
      </head>
      <body>
        <model-viewer 
          src="${modelUrl}" 
          alt="3D Model"
          auto-rotate
          camera-controls
          interaction-prompt="auto"
        ></model-viewer>
      </body>
    </html>
  `;

  return (
    <SafeAreaView className="flex-1 bg-[#DDE4E9] p-3" edges={["top"]}>
      <View className="flex-1">
        <WebView source={{ html }} style={{ flex: 1 }} />
      </View>
    </SafeAreaView>
  )
}
