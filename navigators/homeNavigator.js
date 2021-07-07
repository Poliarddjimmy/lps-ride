import React, { useLayoutEffect } from "react";
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "../screens/homeScreen";
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import theme from "../utils/theme"
 
const HomeNavigator = ({ navigation, route }) => {
  const { Screen, Navigator } = createStackNavigator();

  const routeName = getFocusedRouteNameFromRoute(route) ?? 'home';

  return <Navigator initialRouteName="home">
    <Screen name="home" options={theme.header.default} component={HomeScreen} />
  </Navigator>

}

export default HomeNavigator;