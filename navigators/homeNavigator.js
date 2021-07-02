import React, { useLayoutEffect } from "react";
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "../screens/homeScreen";
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import theme from "../utils/theme"
 
const HomeNavigator = ({ navigation, route }) => {
  const { Screen, Navigator } = createStackNavigator();

  const routeName = getFocusedRouteNameFromRoute(route) ?? 'index';

  return <Navigator initialRouteName="index">
    <Screen name="index" options={theme.header.default} component={HomeScreen} />
  </Navigator>

}

export default HomeNavigator;