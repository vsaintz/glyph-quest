import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import Octicons from '@expo/vector-icons/Octicons'
import type { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs'
import CustomTabBar from '@/app/components/layout/tabbar'

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }): BottomTabNavigationOptions => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 70,
          backgroundColor: '#fff',
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          elevation: 10,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.08,
          shadowRadius: 6,
        },
        tabBarActiveTintColor: '#111827',
        tabBarInactiveTintColor: '#9CA3AF',
        tabBarButton: (props) => <CustomTabBar {...props} />,
        tabBarIcon: ({ color }) => {
          switch (route.name) {
            case 'index':
              return (
                <MaterialCommunityIcons
                  name="home-roof"
                  size={26}
                  color={color}
                />
              )
            case 'camera':
              return (
                <Octicons
                  name="dot-fill"
                  size={26}
                  color={color}
                />
              )
            default:
              return (
                <Ionicons
                  name="ellipse-outline"
                  size={24}
                  color={color}
                />
              )
          }
        },
      })}
    />
  )
}
