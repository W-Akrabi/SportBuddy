import { View, Text, Image } from 'react-native'
import { Tabs, Redicrect} from 'expo-router'
import { icons } from '../../constants'

const TabIcon = ({ icon, color, name, focused }) => {
    return (
        <View className='items-center justify-center gap-2'>
            <Image
                source={icon}
                resizeMode='contain'
                tintColor={color}
                className="w-6 h-6"
            />
            <Text className={`${focused  ? 'font-presemibold' : 
            'font-pregular'} text-xs`} style={{ color: color}}>
                {name}
            </Text>
        </View>
    )
}

const TabsLayout = () => {
  return (
    <>
    <Tabs
        screenOptions={{
            tabBarShowLabel: false,
            tabBarActiveTintColor: '#19E301',
            tabBarInactiveInactiveColor: '#CDCDE0',
            tabBarStyle:{
                backgroundColor: '#000000',
                borderTopWidth: 1,
                borderTopColor: '#232533',
                height: 84,
            }
        }}
    >
        <Tabs.Screen
        name='games'
        options={{
            title: "Games",
            headerShown: false,
            tabBarIcon: ({ color, focused}) => (
                <TabIcon
                icon={icons.sport}
                color={color}
                name={"Games"}
                focused={focused}
                />
            )
        }}
        />
        <Tabs.Screen
        name='messages'
        options={{
            title: "Messages",
            headerShown: false,
            tabBarIcon: ({ color, focused}) => (
                <TabIcon
                icon={icons.speechbubble}
                color={color}
                name={"Messages"}
                focused={focused}
                />
            )
        }}
        />
        <Tabs.Screen
        name='host'
        options={{
            title: "Host",
            headerShown: false,
            tabBarIcon: ({ color, focused}) => (
                <TabIcon
                icon={icons.host}
                color={color}
                name={"host"}
                focused={focused}
                />
            )
        }}
        />
        <Tabs.Screen
        name='profile'
        options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused}) => (
                <TabIcon
                icon={icons.profile}
                color={color}
                name={"Profile"}
                focused={focused}
                />
            )
        }}
        />
    </Tabs>
    </>
  )
}

export default TabsLayout