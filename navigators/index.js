import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import HomeNavigator from "./homeNavigator";
import AccountNavigator from "./accountNavigator";
import UpdateNavigator from "./updateNavigator";
import OtherNavigator from "./otherNavigator"

const Tab = createBottomTabNavigator();

export default function Navigators() {
  return (
    <Tab.Navigator
      initialRouteName="home"
      tabBarOptions={{
        activeTintColor: '#F1222D',
        inactiveTintColor: "#858585",
        style: {
          height: 90,
          paddingVertical: 5,
          backgroundColor: "#fff"
        },
        labelStyle: {
          fontSize: 14,
          fontWeight: "bold",
          lineHeight: 20,
        }
      }}
    >
      <Tab.Screen
        name="home"
        component={HomeNavigator}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="update"
        component={UpdateNavigator}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="other"
        component={OtherNavigator}
        options={{
          tabBarLabel: 'Other',
          tabBarIcon: ({ color, size }) => (
            <Feather name="plus-circle" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="account"
        component={AccountNavigator}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}