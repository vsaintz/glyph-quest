import React from "react"
import { Tabs } from "expo-router"
import { Ionicons } from "@expo/vector-icons"
import TabBar from "@/components/layout/tabbar"
import Feather from "@expo/vector-icons/Feather"
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons"
import type { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs"

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }): BottomTabNavigationOptions => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#000",
        tabBarInactiveTintColor: "#808080",
        tabBarButton: (props) => <TabBar {...props} />,

        tabBarIcon: ({ color }) => {
          switch (route.name) {
            case "index":
              return (
                <MaterialCommunityIcons
                  name="home-roof"
                  size={30}
                  color={color}
                />
              )
            case "camera":
              return (
                <MaterialCommunityIcons
                  name="google-lens"
                  size={26}
                  color={color}
                />
              )
            case "models":
              return <Feather name="box" size={26} color={color} />
            case "rules":
              return (
                <MaterialCommunityIcons
                  name="invoice-text-outline"
                  size={26}
                  color={color}
                />
              )
            default:
              return <Ionicons name="ellipse-outline" size={26} color={color} />
          }
        },
      })}
    />
  )
}
