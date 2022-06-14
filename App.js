import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { Text } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { theme } from "./src/infrastructure/theme";
import { MuseumsScreen } from "./src/features/museums/screens/museums.screens"; 
import { SafeArea } from "./src/components/utility/safe-area.component";

// Core function creeërt tabs 
const Tab = createBottomTabNavigator();

const Settings = () => (
  //Inhoud weergeven van Settings binnen de Safe Area View van de iPhone
  <SafeArea> 
    <Text>Settings</Text>
  </SafeArea>
);

const Map = () => (
  //Inhoud weergeven van Map binnen de Safe Area View van de iPhone
  <SafeArea>
    <Text>Map</Text>
  </SafeArea>
);

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        {/* Navigatie */}
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              // Tab Icons
              tabBarIcon: ({ color, size }) => {
                let iconName;

                if (route.name === "Museums") {
                  iconName = "museum";
                } else if (route.name === "Settings") {
                  iconName = "settings";
                } else if (route.name === "Map") {
                  iconName = "map";
                }

                return <MaterialIcons name={iconName} size={size} color={color} />;
                
              },
            })}
            tabBarOptions={{
              activeTintColor: "tomato",
              inactiveTintColor: "gray",
            }}
          >
            {/* Tab naar Landing component MuseumsScreen */}
            <Tab.Screen name="Museums" component={MuseumsScreen} /> 
            {/* Tab naar component Map */}
            <Tab.Screen name="Map" component={Map} />
            {/* Tab naar component Settings */}
            <Tab.Screen name="Settings" component={Settings} />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}