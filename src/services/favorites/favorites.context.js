import React, { createContext, useState } from "react"

export const FavoritesContext = createContext();

export const FavoritesContextProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    const add = (museum) => {
        setFavorites([...favorites, museum]);
    };

    const remove = (museum) => {
        const newFavorites = favorites.filter(
            (x) => x.placeId !== museum.placeId
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