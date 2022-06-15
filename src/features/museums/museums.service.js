import { mocks, mockImages } from "./mock";
import camelize from "camelize";

export const museumsRequest = (location = "37.7749295,-122.4194155") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  });
};

export const museumsTransform = ({ results = [] }) => {
  const mappedResults = results.map((museum) => {
    museum.photos = museum.photos.map((p) => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    });

    return {
      ...museum,
      isOpenNow: museum.opening_hours && museum.opening_hours.open_now,
      isClosedTemporarily: museum.business_status === "CLOSED_TEMPORARILY",
    };
  });

  return camelize(mappedResults);
};