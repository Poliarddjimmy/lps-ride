import React, { useLayoutEffect } from "react";
import { createStackNavigator } from '@react-navigation/stack';
import AccountScreen from "../screens/accountScreen";
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import theme from "../utils/theme"
 
const AccountNavigator = ({ navigation, route }) => {
  const { Screen, Navigator } = createStackNavigator();

  const routeName = getFocusedRouteNameFromRoute(route) ?? 'index';

  return <Navigator initialRouteName="index">
    <Screen name="index" options={theme.header.account} component={AccountScreen} />
  </Navigator>

}

export default AccountNavigator;