import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { MuseumsScreen } from "./src/features/museums/screens/museums.screens";

// console.log(StatusBar.currentHeight); //For Android
export default function App() {
  return (
    <>
      <MuseumsScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}

