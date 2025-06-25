import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import AccountScreen from './screens/Account';
import CurrentBookScreen from './screens/CurrentBook';
import JournalEntriesScreen from './screens/JournalEntries';
import LibraryScreen from './screens/Library';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
        screenOptions={
          ({ route }) => ({
            tabBarStyle: {
              height: 80,
              position: 'absolute',
              paddingBottom: 10,
            },
            tabBarIcon: ({ focused }) => {
              let iconName;
              if (route.name === 'Library') iconName = 'menu';
              else if (route.name === 'Current Book') iconName = 'book';
              else if (route.name === 'Profile') iconName = 'person';

              return <Ionicons name={iconName} size={22} color={focused ? '#8b6fc6' : 'gray'} />;
            },
            tabBarActiveTintColor: '#8b6fc6',
            tabBarInactiveTintColor: 'gray',
    })}>
      <Tab.Screen name="Library" component={LibraryScreen}  options={{ headerShown: false }}/>
      <Tab.Screen name="Current Book" component={CurrentBookScreen} options={{ headerShown: false }}/>
      <Tab.Screen name="Profile" component={AccountScreen} options={{ headerShown: false }}/>
  </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator >
        <Stack.Screen name="Tabs" component={TabNavigator} options={{ headerShown: false }}/>
        <Stack.Screen name="JournalEntries" component={JournalEntriesScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
//options={{ headerShown: false }}