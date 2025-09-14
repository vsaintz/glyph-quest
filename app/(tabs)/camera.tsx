import React, { useState, useEffect } from 'react'
import { View, Text, Button } from 'react-native'
import { CameraView, useCameraPermissions } from 'expo-camera'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default function Camera() {
    const [permission, requestPermission] = useCameraPermissions();

    if (!permission) {
        return <View />
    }

    if (!permission.granted) {
        return (
            <View className="flex-1 items-center justify-center">
                <Text className="mb-4">We need your permission to show the camera</Text>
                <Button onPress={requestPermission} title="Grant permission" />
            </View>
        )
    }

    return (
        <SafeAreaProvider>
            <CameraView
                style={{ flex: 1 }}
                facing="back"
                onBarcodeScanned={({ data }) => {
                    console.log('Scanned data:', data);
                }}
            />
        </SafeAreaProvider>
    );
}
