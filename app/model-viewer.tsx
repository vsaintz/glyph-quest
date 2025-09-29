import React from "react"
import { View, TouchableOpacity, Text } from "react-native"
import { WebView } from "react-native-webview"
import { useLocalSearchParams, useRouter } from "expo-router"

export default function ModelViewer() {
  const { modelUrl } = useLocalSearchParams<{ modelUrl: string }>()
  const router = useRouter()

  const html = `
    <html>
      <head>
        <script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
        <style>
          body, html { margin:0; padding:0; width:100%; height:100%; overflow:hidden; background-color:#000; }
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
    <View style={{ flex: 1 }}>
      <TouchableOpacity
        style={{
          position: "absolute",
          top: 40,
          right: 20,
          zIndex: 10,
          backgroundColor: "rgba(255,255",
          paddingVertical: 8,
          paddingHorizontal: 12,
          borderRadius: 8,
        }}
        onPress={() => router.back()}
      >
        <Text style={{ color: "black", fontWeight: "600" }}>Close</Text>
      </TouchableOpacity>

      <WebView source={{ html }} style={{ flex: 1 }} />
    </View>
  )
}
