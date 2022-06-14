import { StatusBar, SafeAreaView } from "react-native";
import styled from "styled-components/native";

// Het doel van SafeAreaView is om inhoud weer te geven binnen de veilige gebiedsgrenzen van een apparaat. 
// Het is momenteel alleen van toepassing op iOS-apparaten met iOS-versie 11 of hoger.

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;