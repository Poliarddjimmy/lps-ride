import React, { useLayoutEffect } from "react";
import { createStackNavigator } from '@react-navigation/stack';
import OtherScreen from "../screens/otherScreen";
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import theme from "../utils/theme"
 
const OtherNavigator = ({ navigation, route }) => {
  const { Screen, Navigator } = createStackNavigator();

  const routeName = getFocusedRouteNameFromRoute(route) ?? 'index';

  return <Navigator initialRouteName="index">
    <Screen name="index" options={theme.header.other} component={OtherScreen} />
  </Navigator>

}

export default OtherNavigator;