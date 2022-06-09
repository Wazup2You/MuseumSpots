import React from "react";
import styled from "styled-components/native";
import { Text, Image, View } from "react-native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";

import star from "../../../../assets/star";
import open from "../../../../assets/open";

const MuseumCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const MuseumCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const Title = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;
const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;
const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

export const MuseumInfoCard = ({ museum = {} }) => {
  const {
    name = "Dodo Museum",
    icon,
    photos = [
      "data:image/jpeg;base64,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",
    ],
    address = "Eenadresstraat 12",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = museum;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <MuseumCard elevation={5}>
      <MuseumCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Section>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="label" style={{ color: "red" }}>
                CLOSED TEMPORARILY
              </Text>
            )}
            <View />
            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            <View />
            <Image source={{ uri: icon }} />
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </MuseumCard>
  );
};