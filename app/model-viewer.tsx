import React from "react"
import { WebView } from "react-native-webview"
import { View, ScrollView, StatusBar } from "react-native"
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context"
import { useLocalSearchParams } from "expo-router"

import AppText from "@/components/layout/app-text"

const modelMetadata: Record<
  string,
  { color?: string; image?: string; hint?: string }
> = {
  "https://vsaintz.github.io/glb-assets/grandfather_clock.glb": {
    image: "https://res.cloudinary.com/defh2c1db/image/upload/v1761398180/5615eb835be1cd207e53_hvlqru.jpg",
    hint: "I have a face you'll find in this place. I have hands, but I've given up the race.",
  },
}

export default function ModelViewer() {
  const { modelUrl } = useLocalSearchParams<{ modelUrl: string }>()
  const insets = useSafeAreaInsets()

  const metadata = modelMetadata[modelUrl] || {}
  const bgColor = metadata.color || "#000"
  const bgImage = metadata.image
  const hint = metadata.hint

  const backgroundStyle = bgImage
    ? `background: url('${bgImage}') center/cover no-repeat;`
    : `background-color: ${bgColor};`

  const html = `
    <html>
      <head>
        <script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
        <style>
          body, html { 
            margin: 0; padding: 0; width: 100%; height: 100%; overflow: hidden;
            ${backgroundStyle}
          }
          model-viewer { width: 100%; height: 100%; background-color: transparent; }
        </style>
      </head>
      <body>
        <model-viewer 
          src="${modelUrl}" 
          camera-controls
          interaction-prompt="auto"
          shadow-intensity="1"
        ></model-viewer>
      </body>
    </html>
  `

  return (
    <SafeAreaView className="flex-1 bg-[#000]" edges={["top"]}>
      <StatusBar barStyle="light-content" />
      <View className="flex-1 relative">
        <WebView source={{ html }} style={{ flex: 1 }} />

        {hint && (
          <View
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              backgroundColor: "rgba(0,0,0,0.6)",
              paddingHorizontal: 16,
              paddingTop: 12,
              paddingBottom: insets.bottom + 12,
              maxHeight: "40%",
            }}
          >
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingBottom: 8 }}
            >
              <AppText
                style={{
                  color: "#fff",
                  fontSize: 13,
                  lineHeight: 22,
                  textAlign: "center",
                }}
              >
                {hint}
              </AppText>
            </ScrollView>
          </View>
        )}
      </View>
    </SafeAreaView>
  )
}
