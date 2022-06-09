import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { MuseumsScreen } from "./src/features/museums/screens/museums.screens"; 

// console.log(StatusBar.currentHeight); //For Android
export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <MuseumsScreen />
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}