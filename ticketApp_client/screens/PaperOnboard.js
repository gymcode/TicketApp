import React from "react";
import PaperOnboarding from "@gorhom/paper-onboarding";

const data = [
  {
    title: "Hotels",
    description: "All hotels and hostels are sorted by hospitality rating",
    color: "#698FB8",
  },
  {
    title: "Banks",
    description: "We carefully verify all banks before add them into the app",
    color: "#6CB2B8",
  },
  {
    title: "Stores",
    description: "All local stores are categorized for your convenience",
    color: "#9D8FBF",
  },
];

export default function Onboarding({ navigation }) {
  const handleBtn = () => {
    navigation.navigate("Login");
  };
  return (
    <PaperOnboarding
      data={data}
      indicatorSize={25}
      closeButtonText="Next"
      onCloseButtonPress={handleBtn}
    />
  );
}
