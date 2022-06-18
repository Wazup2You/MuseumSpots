import React, { useState } from "react";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";

import { MuseumInfoCard } from "../components/museum-info-card.component";
import { SafeArea } from "../../../components/utility/safe-area.component";

export const MuseumDetailScreen = ({ route }) => {
  const [historyExpanded, setHistoryExpanded] = useState(false);
  const [buildingExpanded, setBuildingExpanded] = useState(false);
  const [collectionExpanded, setCollectionExpanded] = useState(false);
  const [linkExpanded, setLinkExpanded] = useState(false);

  const { museum } = route.params;
  return (
    <SafeArea>
      <MuseumInfoCard museum={museum} />
      <ScrollView>
        <List.Accordion
          title="Geschiedenis"
          left={(props) => <List.Icon {...props} icon="history" />}
          expanded={historyExpanded}
          onPress={() => setHistoryExpanded(!historyExpanded)}
        >
          <List.Item title="Het museum is gesticht in 1874 " />
          <List.Item title="Na opheffing van de Yachtclub in 1882 werd in 1885 de gemeente Rotterdam eigenaar van de collectie." />
        </List.Accordion>

        <List.Accordion
          title="Gebouw"
          left={(props) => <List.Icon {...props} icon="domain" />}
          expanded={buildingExpanded}
          onPress={() => setBuildingExpanded(!buildingExpanded)}
        >
          <List.Item title="Sinds 1986 is het museum gevestigd aan de Leuvehaven, een van de oudste havens van Rotterdam. " />
        </List.Accordion>

        <List.Accordion
          title="Collectie"
          left={(props) => <List.Icon {...props} icon="image-multiple" />}
          expanded={collectionExpanded}
          onPress={() => setCollectionExpanded(!collectionExpanded)}
        >
          <List.Item title="Mataró-Model" />
          <List.Item title="Hasselter Aak Annigje" />
        </List.Accordion>

        <List.Accordion
          title="Link"
          left={(props) => <List.Icon {...props} icon="link-variant" />}
          expanded={linkExpanded}
          onPress={() => setLinkExpanded(!linkExpanded)}
        >
          <List.Item title="https://www.maritiemmuseum.nl/" />
        </List.Accordion>
      </ScrollView>
    </SafeArea>
  );
};