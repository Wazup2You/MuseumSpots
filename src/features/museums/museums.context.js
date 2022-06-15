import React, { useState, createContext, useEffect, useMemo } from "react";

import {
  museumsRequest,
  museumsTransform,
} from "./museums.service";

export const MuseumsContext = createContext();

export const MuseumsContextProvider = ({ children }) => {
  const [museums, setMuseums] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const retrieveMuseums = () => {
    setIsLoading(true);
    setTimeout(() => {
      museumsRequest()
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
    retrieveMuseums();
  }, []);

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