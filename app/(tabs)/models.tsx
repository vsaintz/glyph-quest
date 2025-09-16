import { View, Text, Platform, StatusBar } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default function Models() {
    return (
        <SafeAreaProvider style={[{ flex: 1, backgroundColor: "black", paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }]}>
            <StatusBar barStyle="light-content" backgroundColor="black" />
            <View className='flex flex-1 justify-center items-center bg-white'>
                <Text className='text-red-400 text-md font-medium'>
                    You'll see all your models here after scanning.
                </Text>
            </View>
        </SafeAreaProvider>
    )
}