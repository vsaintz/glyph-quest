import React from "react"
import { Text, TextProps, StyleProp, TextStyle } from "react-native"

interface AppTextProps extends TextProps {
    style?: StyleProp<TextStyle>
    className?: string
}

export default function AppText({ style, className, ...props }: AppTextProps) {
    return <Text {...props} className={className} style={[{ fontFamily: "Montserrat", fontWeight: 700 }, style]} />
}
