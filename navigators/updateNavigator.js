import React, { useLayoutEffect } from "react";
import { createStackNavigator } from '@react-navigation/stack';
import UpdateScreen from "../screens/updateScreen";
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import theme from "../utils/theme"
 
const UpdateNavigator = ({ navigation, route }) => {
  const { Screen, Navigator } = createStackNavigator();

  const routeName = getFocusedRouteNameFromRoute(route) ?? 'notification';

  return <Navigator initialRouteName="notification">
    <Screen name="notification" options={theme.header.update} component={UpdateScreen} />
  </Navigator>

}

export default UpdateNavigator;