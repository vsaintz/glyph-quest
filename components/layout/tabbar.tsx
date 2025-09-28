import React from "react"
import { Pressable, View } from "react-native"
import type { BottomTabBarButtonProps } from "@react-navigation/bottom-tabs"

const TabBar = React.forwardRef<any, BottomTabBarButtonProps>(
    ({ children, onPress, accessibilityState }, ref) => {
        const isFocused = accessibilityState?.selected

        return (
            <Pressable
                ref={ref}
                onPress={onPress}
                android_ripple={{ color: "transparent" }}
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                }}
                className={isFocused ? "opacity-100" : "opacity-70"}
            >
                {children}
            </Pressable>
        )
    }
)

export default TabBar
