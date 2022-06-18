import React, { useContext } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { ActivityIndicator, Colors } from "react-native-paper";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { MuseumInfoCard } from "../components/museum-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Search } from "../components/search.component";
import { MuseumsContext } from "../../../services/museums/museums.context";

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

  export const MuseumsScreen = ({ navigation}) => {
    const { isLoading, museums } = useContext(MuseumsContext);

  return (
     //Inhoud weergeven van Searchbar binnen de Safe Area View van de iPhone
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue300} />
        </LoadingContainer>
      )}
      {/* Zoekbalk */}
      <Search />
      <MuseumList
        data={museums}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("MuseumDetail", { museum: item })
              }
            >
              <Spacer position="bottom" size="large">
                <MuseumInfoCard museum={item} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};