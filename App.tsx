import React from 'react';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';
import AppLoading  from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { PortalProvider } from '@gorhom/portal';
import {
 Ubuntu_400Regular,
 Ubuntu_700Bold
} from '@expo-google-fonts/ubuntu';
import {
  Montserrat_300Light,
  Montserrat_600SemiBold,
  Montserrat_900Black
} from '@expo-google-fonts/montserrat';

import theme from './src/styles/theme';
import { Routes } from './src/routes';
import store from './src/store';

export default function App() {

  const [ fontsLoaded ] = useFonts({
    Ubuntu_400Regular,
    Ubuntu_700Bold,
    Montserrat_300Light,
    Montserrat_600SemiBold,
    Montserrat_900Black
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <GestureHandlerRootView style={{flex:1}}>
          <ThemeProvider theme={theme}>
            <PortalProvider>
              <Routes/>
            </PortalProvider>
          </ThemeProvider>
        </GestureHandlerRootView>
      </NavigationContainer>
    </Provider>
  );
}

