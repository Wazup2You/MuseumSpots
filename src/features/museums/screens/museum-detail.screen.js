import react from "react";
import { MuseumInfoCard } from "../components/museum-info-card.component";
import { SafeArea } from "../../../components/utility/safe-area.component";

export const MuseumDetailScreen = ({ route }) => {
  const { museum } = route.params;
  return (
    <SafeArea>
      <MuseumInfoCard museum={museum} />
    </SafeArea>
  );
};