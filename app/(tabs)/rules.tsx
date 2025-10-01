import { View, Text, Image } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function Rules() {
    const rules = [
        {
            id: 1,
            icon: require('@/assets/illustration/double-check.png'),
            title: 'First Rule',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
        },
        {
            id: 2,
            icon: require('@/assets/illustration/double-check.png'),
            title: 'Second Rule',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
        },
        {
            id: 3,
            icon: require('@/assets/illustration/double-check.png'),
            title: 'Third Rule',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
        },
        {
            id: 4,
            icon: require('@/assets/illustration/double-check.png'),
            title: 'Fourth Rule',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
        },
        {
            id: 5,
            icon: require('@/assets/illustration/double-check.png'),
            title: 'Fifth Rule',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
        },
    ]

    return (
        <SafeAreaView className="flex-1 bg-white" edges={["top"]}>
            <View className="flex-1 items-center px-3 bg-white mt-12">
                <View className="w-full p-2">
                    <View className="flex-col justify-center items-center border-b border-[#989a9f] mb-5">
                        <Image
                            source={require('@/assets/illustration/checklist.png')}
                            className="w-16 h-16"
                        />
                        <Text className="text-black text-2xl my-2"> Event Guidelines </Text>
                        <Text className="text-center text-sm text-[#6b7280] mb-5">
                            Please review the rules and regulations carefully to ensure a smooth and fair experience for all participants.
                        </Text>
                    </View>

                    <View className="flex-col gap-5 mt-3">
                        {rules.map((item) => (
                            <View
                                key={item.id}
                                className="flex-row gap-2 w-full"
                            >
                                <Image source={item.icon} className="w-10 h-10" />
                                <View className="flex-1 flex-col gap-1">
                                    <Text className="text-lg">{item.title}</Text>
                                    <Text className="text-sm text-[#6b7280]">
                                        {item.description}
                                    </Text>
                                </View>
                            </View>
                        ))}
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}
