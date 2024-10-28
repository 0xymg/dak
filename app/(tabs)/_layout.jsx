import { View, Text, Image } from 'react-native'
import React from 'react'
import { Stack, Tabs } from 'expo-router'
import { icons } from '../../constants';
import Icon from 'react-native-vector-icons/AntDesign';


const TabIcon = ({ name, title, color, focused }) => {
  return (
    <View className='items-center justify-center gap-2'>
      <Icon name={name} size={30} color={color} />
      <Text className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs text-white`} > {title} </Text>
    </View>
  )
}


const TabsLayout = () => {
  return (
    <>
      <Tabs screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#FAA234',
        tabBarInactiveTintColor: '#CDCDE0',
        tabBarStyle: {
          backgroundColor: '#161622',
          borderTopWidth: 1,
          borderTopColor: '#232533',
          height: 100
        }
      }}>
        <Tabs.Screen
          name='home'
          options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                name='home'
                title='Anasayfa'
                color={color}
                focused={focused}

              />
            )
          }}
        />

        <Tabs.Screen
          name='settings'
          options={{
            title: 'Settings',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                name='setting'
                title='Ayarlar'
                color={color}
                focused={focused}

              />)
          }}
        />
        <Tabs.Screen
          name='profile'
          options={{
            title: 'Profile',
            headerShown: false,
            tabBarIcon: ({ color,focused }) => (
              <TabIcon
                name='user'
                title='Profil'
                color={color}
                focused={focused}
              />)
          }}
        />
      </Tabs>
    </>
    //   <Stack.Screen name="home" options={{ headerShown: false }} />
    // </Stack>
  )
}

export default TabsLayout