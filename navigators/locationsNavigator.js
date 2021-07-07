import React, { useLayoutEffect } from "react";
import { createStackNavigator } from '@react-navigation/stack';
import LocationsScreen from "../screens/locationsScreen";
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import theme from "../utils/theme"
 
const LocationsNavigator = ({ navigation, route }) => {
  const { Screen, Navigator } = createStackNavigator();

  const routeName = getFocusedRouteNameFromRoute(route) ?? 'index';

  return <Navigator initialRouteName="index">
    <Screen name="index" options={theme.header.locations} component={LocationsScreen} />
  </Navigator>

}

export default LocationsNavigator;