import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import TableTemplate from "../components/tableTemplate";
import ResultsScreen from "../screens/home/Results/ResultsScreen";
import Home from "../screens/home/home";

const MaterialTopTab = createMaterialTopTabNavigator();

const CreateTopTab = () => {
  // Custom back button for Tab Bar Screen
  return (
    <MaterialTopTab.Navigator
      tabBarOptions={{
        labelStyle: { fontSize: 12, fontWeight: "bold" },
        style: {
          backgroundColor: "#e9446a",
          width: "100%",
          height: 45,
        },
        activeTintColor: "white",
        inactiveTintColor: "black",
        indicatorStyle: { backgroundColor: "white" },
      }}
    >
      <MaterialTopTab.Screen
        name="Feed"
        component={Home}
        options={{ title: "News" }}
      />
      <MaterialTopTab.Screen
        name="Standings"
        component={TableTemplate}
        options={{ title: "Standings" }}
      />
      <MaterialTopTab.Screen
        name="Results"
        component={ResultsScreen}
        options={{ title: "Results" }}
      />
    </MaterialTopTab.Navigator>
  );
};

export default CreateTopTab;
