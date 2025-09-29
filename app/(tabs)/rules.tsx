import { View, Text, Image } from "react-native"

export default function Rules() {

    const rules = [
        {
            id: 1,
            icon: <Image
                source={require('@/assets/illustration/double-check.png')}
                className="w-10 h-10"
            />, title: 'First Rule', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
        },
        {
            id: 2,
            icon: <Image
                source={require('@/assets/illustration/double-check.png')}
                className="w-10 h-10"
            />, title: 'Second Rule', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
        },

        {
            id: 3,
            icon: <Image
                source={require('@/assets/illustration/double-check.png')}
                className="w-10 h-10"
            />, title: 'Third Rule', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
        },

        {
            id: 4,
            icon: <Image
                source={require('@/assets/illustration/double-check.png')}
                className="w-10 h-10"
            />, title: 'Fourth Rule', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
        },

        {
            id: 5,
            icon: <Image
                source={require('@/assets/illustration/double-check.png')}
                className="w-10 h-10"
            />, title: 'Fifth rule', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
        },
    ]

    return (
        <View className="flex flex-1 items-center justify-center px-3 bg-white">
            <View className="w-full p-2">
                <View className="flex flex-col justify-center items-center border-b border-[#989a9f]">
                    <Image
                        source={require('@/assets/illustration/checklist.png')}
                        className="w-16 h-16"
                    />
                    <Text className="text-black text-2xl my-2"> Event Guidelines </Text>
                    <Text className="text-center text-sm text-[#6b7280] mb-5">
                        Please review the rules and regulations carefully to ensure a smooth and fair experience for all participants.
                    </Text>
                </View>

                <View className="flex flex-col gap-5 mt-3">
                    {rules.map((items) => (
                        <View
                            key={items.id}
                            className="flex flex-row gap-2 w-full">
                            {items.icon}
                            <View className="flex flex-col gap-1 flex-1">
                                <Text className="text-lg">{items.title}</Text>
                                <Text className="text-sm text-[#6b7280]">{items.description}</Text>
                            </View>
                        </View>
                    ))}
                </View>
            </View>
        </View>
    )
}