import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';

import { Home } from './Home.screen';
import { History } from './History.screen';
import { Analytics } from './Analytics.screen';
import { AnalyticsIcon, HistoryIcon, HomeIcon } from '../components/Icons';
import { theme } from '../theme';

export const BottomTabs = createBottomTabNavigator()

export const BottomTabsNavigator: React.FC = () => {
  return (
    <BottomTabs.Navigator screenOptions={({ route }) => ({
      headerTitleStyle: {
        fontFamily: theme.fontFamilyRegular
      },
      tabBarActiveTintColor: theme.colorBlue,
      tabBarInactiveTintColor: theme.colorGrey,
      tabBarShowLabel: false,
      tabBarIcon: ({ color, size }) => {
        if (route.name === 'Home') {
          return <HomeIcon color={color} size={size} />
        }
        if (route.name === 'History') {
          return <HistoryIcon color={color} size={size} />
        }
        if (route.name === 'Analytics') {
          return <AnalyticsIcon color={color} size={size} />
        }
        return <Text>{route.name}</Text>
      }
    })}>
      <BottomTabs.Screen name="Home" component={Home} options={{ title: 'Today\'s Mood'}}></BottomTabs.Screen>
      <BottomTabs.Screen name="History" component={History} options={{ title: 'Past Moods'}}></BottomTabs.Screen>
      <BottomTabs.Screen name="Analytics" component={Analytics} options={{ title: 'Fancy Graphs'}}></BottomTabs.Screen>
    </BottomTabs.Navigator>
  )
}
