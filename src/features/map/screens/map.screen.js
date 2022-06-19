import React, { useContext, useState, useEffect } from "react";
import MapView from "react-native-maps";
import styled from "styled-components/native";

import { LocationContext } from "../../../services/location/location.context";
import { MuseumsContext } from "../../../services/museums/museums.context";

import { Search } from "../components/search.component";
import { MapCallout } from "../components/map-callout.component";

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

export const MapScreen = () => {
  const { location } = useContext(LocationContext);
  const { museums = [] } = useContext(MuseumsContext);

  const [latDelta, setLatDelta] = useState(0);

  const { lat, lng, viewport } = location;

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;

    setLatDelta(northeastLat - southwestLat);
  }, [location, viewport]);

  return (
    <>
      <Search />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {museums.map((museum) => {
          return (
            <MapView.Marker
              key={museum.name}
              title={museum.name}
              coordinate={{
                latitude: museum.geometry.location.lat,
                longitude: museum.geometry.location.lng,
              }}
            >
              <MapView.Callout>
                <MapCallout museum={museum} />
              </MapView.Callout>
            </MapView.Marker>
          );
        })}
      </Map>
    </>
  );
};