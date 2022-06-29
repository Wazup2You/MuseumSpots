import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Spacer } from "../spacer/spacer.component";
import { CompactMuseumInfo } from '../museum/compact-museum-info.component';
import { Text } from "../typography/text.component";

const FavoritesWrapper = styled.View`
    padding: 10px;
`;

export const FavoritesBar = ({ favorites, onNavigate }) => {
    if(!favorites.length) {
        return null;
    }
    return (
    <FavoritesWrapper>
        <Spacer variant="left.large">
            <Text variant="caption">Favorites</Text>
        </Spacer>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {favorites.map((museum) => {
                const key = museum.name;
                return (
                    <Spacer key={key} position="left" size="medium">
                        <TouchableOpacity onPress={() =>
                            onNavigate("MuseumDetail", { 
                                museum, 
                            })
                        }>
                        <CompactMuseumInfo museum={museum} />
                        </TouchableOpacity>
                    </Spacer>
                );
            })}
        </ScrollView>
    </FavoritesWrapper>
    );
};