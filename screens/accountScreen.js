import React from "react"
import { Text, View, Button } from 'react-native';

const AccountScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />

      <Text>Account!</Text>
    </View>
  );
}
export default AccountScreen