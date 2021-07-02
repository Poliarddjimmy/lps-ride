import React from 'react';
import Navigators from './navigators';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from "styled-components/native";
import * as linking from "expo-linking";
import theme from './utils/theme';
import { navigationRef } from './services/navigationServices';

export default function App() {
  return (
    <NavigationContainer linking={linking} ref={navigationRef}>
      <ThemeProvider theme={theme}>
        <Navigators />
      </ThemeProvider>
    </NavigationContainer>
  );
}
