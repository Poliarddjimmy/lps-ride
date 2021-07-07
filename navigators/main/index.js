import React from 'react';
import {
  createDrawerNavigator,
} from '@react-navigation/drawer';
import {
  MaterialCommunityIcons,
  Octicons,
  Fontisto,
  SimpleLineIcons
} from '@expo/vector-icons';
import HomeNavigator from "../homeNavigator";
import AccountNavigator from "../accountNavigator";
import UpdateNavigator from "../updateNavigator";
import LocationsNavigator from "../locationsNavigator"
import CustomSidebarMenu from './customSidebarMenu';

const Drawer = createDrawerNavigator();

export default function Navigators() {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: '#00496E',
        itemStyle: { marginVertical: 5 },
      }}
      drawerContent={(props) => <CustomSidebarMenu {...props} />}>
      <Drawer.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          drawerIcon: config => <Octicons
            size={23}
            color="#016C73"
            name={Platform.OS === 'android' ? 'home' : 'home'}></Octicons>
        }}
      />

      <Drawer.Screen
        name="Notifications"
        component={UpdateNavigator}
        options={{
          drawerIcon: config => <Fontisto
            size={23}
            color="#016C73"
            name={Platform.OS === 'android' ? 'bell' : 'bell'}></Fontisto>
        }}
      />

      <Drawer.Screen
        name="Locations"
        component={LocationsNavigator}
        options={{
          drawerIcon: config => <SimpleLineIcons
            size={23}
            color="#016C73"
            name={Platform.OS === 'android' ? 'location-pin' : 'location-pin'}></SimpleLineIcons>
        }}
      />

      <Drawer.Screen
        name="Account"
        component={AccountNavigator}
        options={{
          drawerIcon: config => <MaterialCommunityIcons
            size={23}
            color="#016C73"
            name={Platform.OS === 'android' ? 'account-outline' : 'account-outline'}></MaterialCommunityIcons>
        }}
      />
    </Drawer.Navigator>
  )
}