export default {
  expo: {
    name: "Glyph Quest",
    slug: "glyph-quest",
    version: "1.0.4",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "glyphquest",
    userInterfaceStyle: "automatic",
    newArchEnabled: true,

    ios: {
      supportsTablet: true,
    },

    android: {
      adaptiveIcon: {
        backgroundColor: "#E6F4FE",
        foregroundImage: "./assets/images/android-icon-foreground.png",
        backgroundImage: "./assets/images/android-icon-background.png",
        monochromeImage: "./assets/images/android-icon-monochrome.png",
      },
      edgeToEdgeEnabled: true,
      predictiveBackGestureEnabled: false,
      permissions: [
        "android.permission.CAMERA",
        "android.permission.RECORD_AUDIO",
      ],
      package: "com.anonymous.glyphquest",
    },

    web: {
      output: "static",
      favicon: "./assets/images/favicon.png",
    },

    plugins: [
      "expo-router",
      [
        "expo-camera",
        {
          cameraPermission: "Allow $(PRODUCT_NAME) to access your camera",
          microphonePermission: "Allow $(PRODUCT_NAME) to access your microphone",
          recordAudioAndroid: true,
        },
      ],
      [
        "expo-splash-screen",
        {
          image: "./assets/images/splash-icon.png",
          imageWidth: 200,
          resizeMode: "contain",
          backgroundColor: "#ffffff",
          dark: {
            backgroundColor: "#000000",
          },
        },
      ],
      "expo-font",
    ],

    experiments: {
      typedRoutes: true,
      reactCompiler: true,
    },

    extra: {
      router: {},
      eas: {
        projectId: "5ddb5d77-11cd-448f-ab7e-2709edbd997e",
      },
      firebase: {
        apiKey: "AIzaSyDr8C2UXG2YoSfCPu8S0IhTUqrVIOARBrM",
        authDomain: "glyph-quest-49aeb.firebaseapp.com",
        projectId: "glyph-quest-49aeb",
        storageBucket: "glyph-quest-49aeb.firebasestorage.app",
        messagingSenderId: "981705871431",
        appId: "1:981705871431:android:d5957e92e3728e5439a162",
      },
    },
  },
};
