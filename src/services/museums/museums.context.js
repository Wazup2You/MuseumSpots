import React, { useState, useContext, createContext, useEffect } from "react";

import {
  museumsRequest,
  museumsTransform,
} from "./museums.service";

import { LocationContext } from "../location/location.context";

export const MuseumsContext = createContext();

export const MuseumsContextProvider = ({ children }) => {
  const [museums, setMuseums] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { location } = useContext(LocationContext);

  const retrieveMuseums = (loc) => {
    setIsLoading(true);
    setMuseums([]);

    setTimeout(() => {
      museumsRequest(loc)
        .then(museumsTransform)
        .then((results) => {
          setIsLoading(false);
          setMuseums(results);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    }, 2000);
  };
  useEffect(() => {
    if (location) {
      const locationString = `${location.lat},${location.lng}`;
      retrieveMuseums(locationString);
    }
  }, [location]);

  return (
    <MuseumsContext.Provider
      value={{
        museums,
        isLoading,
        error,
      }}
    >
      {children}
    </MuseumsContext.Provider>
  );
};