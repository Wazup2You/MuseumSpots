import React from "react";

import { CompactMuseumInfo } from "../../../components/museum/compact-museum-info.component";

export const MapCallout = ({ museum }) => (
  <CompactMuseumInfo isMap museum={museum} />
);