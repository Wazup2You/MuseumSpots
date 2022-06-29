import React, { createContext, useState } from "react"
import { Item } from "react-native-paper/lib/typescript/components/List/List";

export const FavoritesContext = createContext();

export const FavoritesContextProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    const add = (museum) => {
        setFavorites([...favorites, museum]);
    };

    const remove = (museum) => {
        const newFavorites = favorites.filter(
            (x) => x.placeId !== Item.placeId
            );

        setFavorites(newFavorites);
    }
    return (
        <FavoritesContext.Provider value={{
            favorites,
            addToFavorites: add,
            removeFromFavorites: remove,
        }}>
            {children}
        </FavoritesContext.Provider>
    )
}