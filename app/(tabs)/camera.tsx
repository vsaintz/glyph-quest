import React from "react";
import { View, Text, Button, StatusBar, Platform } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Camera() {
    const [permission, requestPermission] = useCameraPermissions();

    if (!permission) {
        return <View />;
    }

    if (!permission.granted) {
        return (
            <View className="flex-1 items-center justify-center bg-black">
                <Text className="mb-4 text-white">
                    We need your permission to show the camera
                </Text>
                <Button onPress={requestPermission} title="Grant permission" />
            </View>
        );
    }

    return (
        <SafeAreaProvider
            style={{
                flex: 1,
                backgroundColor: "black",
                paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
            }}
        >
            <StatusBar barStyle="light-content" backgroundColor="black" translucent />

            <CameraView
                style={{ flex: 1 }}
                facing="back"
                onBarcodeScanned={({ data }) => {
                    console.log("Scanned data:", data);
                }}
            >
                <View
                    style={{
                        flex: 1,
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <View
                        style={{
                            width: 250,
                            height: 250,
                            borderRadius: 20,
                            borderWidth: 2,
                            borderColor: "white",
                            backgroundColor: "transparent",
                        }}
                    />
                    <Text className="text-white text-center w-full mt-5 text-xs">
                        Align the QR code within the frame
                    </Text>
                </View>
            </CameraView>
        </SafeAreaProvider>
    );
}
