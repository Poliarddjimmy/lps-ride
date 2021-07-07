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

export default function Navigators(props) {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: '#2197b4ff',
        itemStyle: { marginVertical: 5 },
        labelStyle: {
          fontFamily: "Inter_600SemiBold"
        }
      }}
      drawerContent={(props) => <CustomSidebarMenu {...props} />}>
      <Drawer.Screen
        name="Akèy"
        component={HomeNavigator}
        options={{
          drawerIcon: config => <Octicons
            size={23}
            color={ "#171a23ff" }
            name={Platform.OS === 'android' ? 'home' : 'home'}></Octicons>
        }}
      />

      <Drawer.Screen
        name="Notifikasyon"
        component={UpdateNavigator}
        options={{
          drawerIcon: config => <Fontisto
            size={23}
            color={"#171a23ff"}
            name={Platform.OS === 'android' ? 'bell' : 'bell'}></Fontisto>
        }}
      />

      <Drawer.Screen
        name="Lokalite"
        component={LocationsNavigator}
        options={{
          drawerIcon: config => <SimpleLineIcons
            size={23}
            color="#171a23ff"
            name={Platform.OS === 'android' ? 'location-pin' : 'location-pin'}></SimpleLineIcons>
        }}
      />

      <Drawer.Screen
        name="Kont"
        component={AccountNavigator}
        options={{
          drawerIcon: config => <MaterialCommunityIcons
            size={23}
            color="#171a23ff"
            name={Platform.OS === 'android' ? 'account-outline' : 'account-outline'}></MaterialCommunityIcons>
        }}
      />
    </Drawer.Navigator>
  )
}