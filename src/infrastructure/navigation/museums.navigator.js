import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import { MuseumsScreen } from "../../features/museums/screens/museums.screens";
import { MuseumDetailScreen } from "../../features/museums/screens/museum-detail.screen";

const MuseumStack = createStackNavigator();

export const MuseumsNavigator = () => {
  return (
    <MuseumStack.Navigator
      screenOptions={{ ...TransitionPresets.ModalPresentationIOS, headerShown: false}}
    >
      <MuseumStack.Screen
        name="Museums"
        component={MuseumsScreen}
      />
      <MuseumStack.Screen
        name="MuseumDetail"
        component={MuseumDetailScreen}
      />
    </MuseumStack.Navigator>
  );
};