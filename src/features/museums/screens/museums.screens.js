import React, { useContext } from "react";
import { Searchbar } from "react-native-paper";
import { FlatList } from "react-native";
import styled from "styled-components/native";
import { ActivityIndicator, Colors } from "react-native-paper";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { MuseumInfoCard } from "../components/museum-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";

import { MuseumsContext } from "../museums.context";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const MuseumList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;


  export const MuseumsScreen = () => {
  const { isLoading, error, museums } = useContext(MuseumsContext);

  console.log(error);
  return (
     //Inhoud weergeven van Searchbar binnen de Safe Area View van de iPhone
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue300} />
        </LoadingContainer>
      )}
      <SearchContainer>
         {/* Zoekbalk */}
        <Searchbar />
      </SearchContainer>
      <MuseumList
        data={museums}
        renderItem={({ item }) => {
          return (
            <Spacer position="bottom" size="large">
              <MuseumInfoCard museum={item} />
            </Spacer>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};