import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Image,
  Switch,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Constants from "expo-constants";

import theme from "../../utils/theme";

import SelectTeams from "./TeamsModal";
//Library to add a switch

const winwidth = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const CustomizeFeed = ({ navigation }) => {
  const [club, setClub] = useState({
    name: "Select team",
    logo: null,
  });
  const [visible, setVisible] = useState(false);
  const [isOn, setIsOn] = useState(false);

  function toggleSwitch() {
    setIsOn((previousState) => !previousState);
  }

  function closeButton() {
    setVisible(false);
  }

  function openModal() {
    setVisible(true);
  }

  function selectedTeam(data) {
    console.log(data);
    setClub({ ...data });
  }
  return (
    <View style={styles.container}>
      <Text style={styles.head}>Customize Your Feed</Text>
      <View style={styles.form}>
        <View style={{ flexDirection: "row", marginTop: 32 }}>
          <Text
            style={{
              marginTop: 5,
              paddingRight: 20,
              fontWeight: "100",
              color: "#C4C4C4",
            }}
          >
            ────────
          </Text>
          <Text style={{ fontSize: 20, color: "#FC1055" }}>Optional</Text>
          <Text
            style={{
              marginTop: 5,
              paddingLeft: 20,
              fontWeight: "100",
              color: "#C4C4C4",
            }}
          >
            ────────
          </Text>
        </View>
        <View style={{ marginTop: 32, alignSelf: "flex-start", padding: 5 }}>
          <Text style={styles.text}>Select Your Favourite Team</Text>
          {/* Implementing the dropdown */}
          <TouchableOpacity onPress={openModal} style={styles.selectTeam}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={club.logo}
                style={{ width: 30, height: 30, borderRadius: 15 }}
              />
              <Text style={{ marginLeft: 10, fontWeight: "500" }}>
                {club.name}
              </Text>
            </View>
            <Ionicons name="ios-arrow-down" size={18} color="grey" />
            <SelectTeams
              selectedTeam={selectedTeam}
              visible={visible}
              closeButton={closeButton}
            />
          </TouchableOpacity>
          <View
            style={{
              marginTop: 32,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={styles.text}>Turn On Notification</Text>
            {/* Implementing the ToogleSwitch */}
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isOn ? "#e9446a" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isOn}
            />
          </View>
        </View>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("BottomTab")}
      >
        <Text style={{ fontWeight: "bold", color: "#fff" }}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.COLORS.SECONDARY,
    paddingTop: Constants.statusBarHeight + 20,
  },
  button: {
    marginHorizontal: 30,
    marginTop: 32,
    backgroundColor: "#e9446a",
    borderRadius: 4,
    height: height / 17,
    alignItems: "center",
    justifyContent: "center",
  },
  head: {
    marginTop: 32,
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    fontFamily: "AirbnbCereal-Medium",
    color: "#000a43",
  },

  form: {
    marginBottom: 38,
    marginHorizontal: 30,
    marginTop: 40,
    alignItems: "center",
  },

  text: {
    color: "#000a43",
    fontSize: 13,
    textTransform: "uppercase",
    fontFamily: "AirbnbCereal-Medium",
  },
  selectTeam: {
    flexDirection: "row",
    backgroundColor: theme.COLORS.SECONDARY,
    shadowColor: theme.COLORS.PRIMARY,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 4,
    shadowOpacity: 0.2,
    elevation: 5,
    justifyContent: "space-between",
    paddingHorizontal: 10,
    height: 40,
    width: winwidth / 1.2,
    alignItems: "center",
    marginVertical: 20,
  },
});

export default CustomizeFeed;
