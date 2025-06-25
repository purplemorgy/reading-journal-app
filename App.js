import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import AccountScreen from './screens/Account';
import CurrentBookScreen from './screens/CurrentBook';
import LibraryScreen from './screens/Library';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
  screenOptions={({ route }) => ({
    tabBarStyle: {
      height: 80,
      position: 'absolute',
      paddingBottom: 10,
    },
    tabBarIcon: ({ focused }) => {
      let iconName;
      if (route.name === 'Library') iconName = 'menu';
      else if (route.name === 'Reading') iconName = 'book';
      else if (route.name === 'Profile') iconName = 'person';

      return <Ionicons name={iconName} size={22} color={focused ? '#8b6fc6' : 'gray'} />;
    },
    tabBarActiveTintColor: '#8b6fc6',
    tabBarInactiveTintColor: 'gray',
  })}
>
  <Tab.Screen name="Library" component={LibraryScreen} />
  <Tab.Screen name="Reading" component={CurrentBookScreen} />
  <Tab.Screen name="Profile" component={AccountScreen} />
</Tab.Navigator>

    </NavigationContainer>
  );
}
