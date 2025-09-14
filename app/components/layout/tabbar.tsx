import React from 'react'
import { Pressable } from 'react-native'
import type { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs'

const CustomTabBar = React.forwardRef<any, BottomTabBarButtonProps>(
    ({ children, onPress, accessibilityState }, ref) => {
        const isFocused = accessibilityState?.selected;

        return (
            <Pressable
                ref={ref}
                onPress={onPress}
                android_ripple={{ color: 'transparent' }}
                className={`flex-1 items-center justify-center ${isFocused ? 'opacity-100' : 'opacity-70'
                    }`}
            >
                {children}
            </Pressable>
        )
    }
)

export default CustomTabBar
