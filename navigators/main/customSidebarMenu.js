import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import { isAndroid } from '../../utils/platform';

import LogoHeaderTitle from "../../components/layout/logoHeaderTitle";

const CustomSidebarMenu = (props) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{
        height: isAndroid ? 70 : 0,
        flex: 0.1,
        padding: 10,
        marginBottom: isAndroid ? 35: 0,
        borderBottomColor:'#858585',
        borderBottomWidth: 1,
        flexDirection: "row",
        alignItems: "center"
      }}>
        {/* <LogoHeaderTitle /> */}
        <Image 
          source={ require("../../assets/logo.png") }
          style={{ width: 250, height: 50 }}
        />
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <Text
        style={{
          fontSize: 16,
          textAlign: 'center',
          color: '#016C73'
        }}>
        Freedom Ride
      </Text>
    </SafeAreaView>
  );
};

export default CustomSidebarMenu;