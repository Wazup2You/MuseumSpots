import React, { useContext } from "react";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

import { FavoritesContext } from "../../services/favorites/favorites.context";

const FavoriteButton = styled(TouchableOpacity)`
    position: absolute;
    top: 25px;
    right: 25px;
    z-index: 9;
`;

export const Favorite = ({ museum }) => {
    const { favorites, addToFavorites, removeFromFavorites } = useContext(FavoritesContext);
    const isFavorite = favorites.find((r) => r.placeId === museum.placeId);
    return (
        <FavoriteButton onPress={() => 
            !isFavorite ? addToFavorites(museum)
            : removeFromFavorites(museum)}>
        <AntDesign 
            name={isFavorite ? "heart" : "hearto"}
            size={24}
            color={isFavorite ? "red" : "white"}
        />
        </FavoriteButton>
    );
};