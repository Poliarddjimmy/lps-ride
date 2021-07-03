import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HomeNavigator from "./homeNavigator";
import AccountNavigator from "./accountNavigator";
import UpdateNavigator from "./updateNavigator";
import OtherNavigator from "./otherNavigator"
import { isAndroid } from '../utils/platform';

const Tab = createBottomTabNavigator();

export default function Navigators() {
  return (
    <Tab.Navigator
      initialRouteName="home"
      tabBarOptions={{
        activeTintColor: '#F1222D',
        inactiveTintColor: "#858585",
        style: {
          height: isAndroid ? 60 : 90,
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
          tabBarLabel: 'Akèy',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home-circle" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="request"
        component={OtherNavigator}
        options={{
          tabBarLabel: 'Rekèt',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="plus-circle" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="update"
        component={UpdateNavigator}
        options={{
          tabBarLabel: 'Notifikasyon',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell-circle" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="account"
        component={AccountNavigator}
        options={{
          tabBarLabel: 'Kont',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-circle" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}