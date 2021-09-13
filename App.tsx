import React from 'react';
import { useFonts } from 'expo-font';
import { StatusBar } from 'react-native';
import { Chivo_900Black } from '@expo-google-fonts/chivo';
import { Overpass_400Regular, Overpass_800ExtraBold } from '@expo-google-fonts/overpass';
import { ThemeProvider } from 'styled-components';
import AppLoading from 'expo-app-loading';

import theme from './src/styles/theme';

import { Routes } from './src/routes/index';

export default function App() {

	const [fontsLoaded] = useFonts({
		Chivo_900Black,
		Overpass_400Regular,
		Overpass_800ExtraBold
	})

	if (!fontsLoaded) {
		return <AppLoading />
	}

	return (
		<ThemeProvider theme={theme}>
			<StatusBar
				barStyle="dark-content"
				translucent
				backgroundColor="transparent"
			/>
			<Routes />
		</ThemeProvider>
	);
}