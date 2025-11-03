import React, { useState } from "react"
import { WebView } from "react-native-webview"
import { View, ScrollView, StatusBar, ActivityIndicator } from "react-native"
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context"
import { useLocalSearchParams } from "expo-router"

import AppText from "@/components/layout/app-text"

const modelMetadata: Record<
  string,
  { color?: string; image?: string; hint?: string }
> = {
  "https://vsaintz.github.io/glb-assets/sphere_shading.glb": {
    hint: "I wear a coat of green or blue, with white lines straight and borders true. A net divides my steady face, Where paddles sing and balls race.",
  },
  "https://vsaintz.github.io/glb-assets/fire_extinguisher.glb": {
    image:
      "https://res.cloudinary.com/defh2c1db/image/upload/v1761843479/eba320827e821befbe92_mxeiuu.jpg",
    hint: "I wait on the level that is neither prime nor composite. I have a pin but cannot sew, a hose but cannot water, I am the last resort when things get hotter.",
  },
  "https://vsaintz.github.io/glb-assets/recyclebin.glb": {
    image:
      "https://res.cloudinary.com/defh2c1db/image/upload/v1761927998/eee176eb01c76f487eec_qo9xmo.jpg",
    hint: "I wait where twice of two rooms rise, beside the lessons and busy sighs. I swallow your crumbs, your notes, your haste, a silent keeper of all you waste.",
  },
  "https://vsaintz.github.io/glb-assets/grandfather_clock.glb": {
    image:
      "https://res.cloudinary.com/defh2c1db/image/upload/v1761398180/5615eb835be1cd207e53_hvlqru.jpg",
    hint: "I have a face that marks no race, my hands are frozen in their place. Seek what the time my twin displays, behind my face, the code awaits.",
  },
  "https://vsaintz.github.io/glb-assets/papers_envelopes.glb": {
    image:
      "https://res.cloudinary.com/defh2c1db/image/upload/v1761816798/a9b5ee2257984e3b0a44_euckbf.jpg",
    hint: "Climb up twice and you’ll find me there, I guard your thoughts with patient care. I keep your whispers, never told. Look beneath where secrets unfold.",
  },
  "https://vsaintz.github.io/glb-assets/hologram_projector.glb": {
    image:
      "https://res.cloudinary.com/defh2c1db/image/upload/v1761673839/a29bb743497a0f0c805d9_y34qdd.jpg",
    hint: "I linger where the climb is no more, I rise and fall yet touch the floor. I help your lessons shine so bright, your hidden clue stays out of sight.",
  },
  "https://vsaintz.github.io/glb-assets/magic_book.glb": {
    image:
      "https://res.cloudinary.com/defh2c1db/image/upload/v1761711545/80a8ceecaef65d89c833_udql29.jpg",
    hint: "I hold every word, both big and small, I speak to none, yet define them all. Seek my pages where meanings hide, your treasure waits deep inside.",
  }
}

export default function ModelViewer() {
  const { modelUrl } = useLocalSearchParams<{ modelUrl: string }>()
  const insets = useSafeAreaInsets()
  const [loading, setLoading] = useState(true)

  const metadata = modelMetadata[modelUrl] || {}
  const bgColor = metadata.color || "#000"
  const bgImage = metadata.image
  const hint = metadata.hint

  const html = `
  <html>
    <head>
      <script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
      <style>
        body, html { 
          margin: 0; padding: 0; width: 100%; height: 100%; overflow: hidden;
          position: relative;
        }

        body::before {
          content: "";
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          ${bgImage
      ? `background: url('${bgImage}') center/cover no-repeat;`
      : `background-color: ${bgColor};`}
          filter: blur(5px);
          transform: scale(1.1);
          z-index: 0;
        }

        model-viewer { 
          width: 100%; 
          height: 100%; 
          background-color: transparent; 
          position: relative;
          z-index: 1;
        }
      </style>
    </head>
    <body>
      <model-viewer 
        id="model"
        src="${modelUrl}" 
        camera-controls
        interaction-prompt="auto"
        shadow-intensity="1"
      ></model-viewer>

      <script>
        const viewer = document.getElementById('model');
        viewer.addEventListener('load', () => {
          window.ReactNativeWebView.postMessage('MODEL_LOADED');
        });
      </script>
    </body>
  </html>
`

  return (
    <SafeAreaView className="flex-1 bg-[#000]" edges={["top"]}>
      <StatusBar barStyle="light-content" />
      <View className="flex-1 relative">
        <WebView
          source={{ html }}
          style={{ flex: 1 }}
          onMessage={(event) => {
            if (event.nativeEvent.data === "MODEL_LOADED") {
              setLoading(false)
            }
          }}
          onError={() => setLoading(false)}
        />

        {loading && (
          <View
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0,0,0,0.7)",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 10,
            }}
          >
            <ActivityIndicator size="large" color="#fff" />
            <AppText style={{ color: "#fff", marginTop: 10 }}>
              Loading model...
            </AppText>
          </View>
        )}

        {!loading && hint && (
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
