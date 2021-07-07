import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StatusBar } from "react-native";
import Navigators from './navigators/main/index';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from "styled-components/native";
import * as linking from "expo-linking";
import theme from './utils/theme';
import { navigationRef } from './services/navigationServices';
import { Inter_600SemiBold, Inter_400Regular } from "@expo-google-fonts/inter";
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { Asset } from 'expo-asset';

export default function App() {
  const [areAssetsLoaded, setAreAssetsLoaded] = useState(false)

  const cacheFonts = (fonts) => {
    return fonts.map(font => Font.loadAsync(font));
  }
  
  const cacheImages = (images) => {
    return images.map(image => {
      if (typeof image === 'string') {
        return Image.prefetch(image);
      } else {
        return Asset.fromModule(image).downloadAsync();
      }
    });
  }

  const loadAssetsAsync = async () => {
    const imageAssets = cacheImages([
      require('./assets/logo.png'),
    ]);
    const fontAssets = cacheFonts([{ Inter_600SemiBold, Inter_400Regular }]);
    await Promise.all([...imageAssets, ...fontAssets]);
  }

  if (!areAssetsLoaded) return <AppLoading
    startAsync={loadAssetsAsync}
    onFinish={() => setAreAssetsLoaded(true)}
    onError={console.warn}
  />

  return (
    <NavigationContainer linking={linking} ref={navigationRef}>
      <ThemeProvider theme={theme}>
        <StatusBar barStyle="dark-content" />
        <Navigators />
      </ThemeProvider>
    </NavigationContainer>
  );
}
