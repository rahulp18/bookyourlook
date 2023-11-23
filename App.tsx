import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IoniIcon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FontAsw from 'react-native-vector-icons/FontAwesome5';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import type {PropsWithChildren} from 'react';

import {
  Bookings,
  Favorite,
  Filters,
  Home,
  Listing,
  Location,
  Login,
  Profile,
  SignUp,
  Welcome,
} from './screens';
import {StatusBar} from 'react-native';

type SectionProps = PropsWithChildren<{
  title: string;
}>;
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: '#fff', // Color of the active tab
        tabBarInactiveTintColor: '#d0d5db', // Color of the inactive tabs
        tabBarLabelStyle: {
          fontSize: 14, // Font size for tab labels
          fontWeight: 'normal', // Font weight for tab labels
        },
        tabBarStyle: {
          backgroundColor: '#042c4e', // Background color of the tab bar
          paddingTop: 5,
        },
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => (
            <IoniIcon size={size} name="home" color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Bookings"
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAsw size={size} name="user-clock" color={color} />
          ),
        }}
        component={Bookings}
      />
      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialIcon size={size} name="favorite-outline" color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAsw size={size} name="user-circle" color={color} />
          ),
        }}
        component={Profile}
      />
    </Tab.Navigator>
  );
};

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <StatusBar
        translucent
        backgroundColor="transparent"
        hidden
        showHideTransition={'fade'}
      />
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Listing" component={Listing} />
        <Stack.Screen name="Filters" component={Filters} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Location" component={Location} />
        <Stack.Screen name="HomeTabs" component={HomeTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
