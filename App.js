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
import { MuseumsContextProvider } from "./src/services/museums/museums.context";
import { LocationContextProvider } from "./src/services/location/location.context";

// Core function creeërt tabs 
const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: "museum",
  Map: "map",
  Settings: "settings",
};

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

// Tab Icons
const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <MaterialIcons name={iconName} size={size} color={color}/>
    ),
  };
};

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
        <LocationContextProvider>
          <MuseumsContextProvider>
            {/* Navigatie */}
            <NavigationContainer>
              <Tab.Navigator
                screenOptions={createScreenOptions}
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
          </MuseumsContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}