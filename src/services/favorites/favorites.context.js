import React, { createContext, useState, useEffect } from "react"
import AsyncStorage from '@react-native-async-storage/async-storage';

export const FavoritesContext = createContext();

export const FavoritesContextProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    const saveFavorites = async (value) => {
        try {
          const jsonValue = JSON.stringify(value)
          await AsyncStorage.setItem('@favorites', jsonValue)
        } catch (e) {
          // saving error
          console.log("error storing", e);
        }
      }

      
const loadFavorites = async () => {
    try {
      const value = await AsyncStorage.getItem('@favorites')
      if(value !== null) {
        // value previously stored
        setFavorites(JSON.parse(value));
      }
    } catch(e) {
      // error reading value
      console.log("error loading", e)
    }
  }
  

    const add = (museum) => {
        setFavorites([...favorites, museum]);
    };

    const remove = (museum) => {
        const newFavorites = favorites.filter(
            (x) => x.placeId !== museum.placeId
            );

        setFavorites(newFavorites);
    }

    useEffect(() => {
        loadFavorites(favorites);
    }, []);

    useEffect(() => {
        saveFavorites(favorites);
    }, [favorites]);

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