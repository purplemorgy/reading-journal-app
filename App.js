import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { auth } from './firebase';
import AccountScreen from './screens/Account';
import CurrentBookScreen from './screens/CurrentBook';
import EntryDisplay from './screens/EntryDisplay';
import JournalEntriesScreen from './screens/JournalEntries';
import LibraryScreen from './screens/Library';
import LoginScreen from './screens/Login';
import SignupScreen from './screens/Signup';

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

  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setIsLoading(false);
    });

    return unsubscribe;
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          <>
            <Stack.Screen name="Tabs" component={TabNavigator} />
            <Stack.Screen name="JournalEntries" component={JournalEntriesScreen} />
            <Stack.Screen name="Entry" component={EntryDisplay} />
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
//options={{ headerShown: false }}