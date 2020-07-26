import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import FAB from "react-native-fab";
import { TeamInfoData } from "../../data/data";
import TeamInfoItems from "../../components/TeamInfoItems";
import { MaterialIcons } from "@expo/vector-icons";
import { useIsFocused } from "@react-navigation/native";

import theme from "../../utils/theme";

const winWidth = Dimensions.get("window").width;
const winHeight = Dimensions.get("window").height;

const TeamInfoScreen = ({ navigation }) => {
  const [team, setTeam] = useState(TeamInfoData);

  const isFocused = useIsFocused();
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.overview}>Club Overview</Text>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Image
              style={{ width: 60, height: 60, borderRadius: 30 }}
              source={require("../../assets/images/club1.png")}
            />
            <View>
              <Text style={styles.clubName}>Kumasi Asante Kotoko FC</Text>
              <Text
                style={{
                  fontSize: 14,
                  textAlign: "center",
                  fontFamily: "Inter-Italic",
                }}
              >
                Ashanti Region, Ghana.
              </Text>
              <View style={styles.social}>
                <TouchableOpacity
                  style={[{ backgroundColor: "#4b76eb" }, styles.shadow]}
                >
                  <Text style={styles.facebook}>Facebook</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    { marginLeft: 10, backgroundColor: "#1DA1EF" },
                    styles.shadow,
                  ]}
                >
                  <Text style={styles.twitter}>Twitter</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    { marginLeft: 10, backgroundColor: "#ff3046" },
                    styles.shadow,
                  ]}
                >
                  <Text style={styles.Youtube}>Youtube</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: "bold",
              paddingVertical: 15,
              paddingHorizontal: 15,
            }}
          >
            Squad
          </Text>
          <TeamInfoItems team={team} />
          <Text
            style={{
              fontSize: 17,
              fontWeight: "bold",
              paddingVertical: 15,
              paddingHorizontal: 15,
            }}
          >
            Coach : CK Akonnor
          </Text>
        </View>
      </ScrollView>
      <FAB
        style={{
          position: "absolute",
          width: 50,
          height: 50,
        }}
        buttonColor="#e9446a"
        iconTextColor="#FFFFFF"
        // onClickAction={() => {
        //   navigation.navigate('League');
        // }}
        visible={isFocused}
        iconTextComponent={<MaterialIcons name="filter-list" />}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.COLORS.SECONDARY,
  },
  header: {
    backgroundColor: theme.COLORS.SECONDARY,
    shadowColor: theme.COLORS.DEFAULT,
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 1 },
    elevation: 5,
    margin: 11,
    height: winHeight / 3.5,
    borderRadius: 10,
  },
  overview: {
    fontSize: 18,
    fontWeight: "bold",
    paddingHorizontal: 20,
    paddingVertical: 20,
    fontFamily: "AirbnbCereal-Black",
    color: theme.COLORS.HEADER,
  },
  itemContainer: {
    margin: 2,
  },
  clubName: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "AirbnbCereal-Bold",
  },
  social: {
    flexDirection: "row",
    padding: 10,
    paddingBottom: 10,
  },
  facebook: {
    textAlign: "center",
    padding: 3,
    color: "white",
    fontWeight: "bold",
  },
  twitter: {
    width: 70,
    height: 25,
    padding: 3,
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    height: 25,
  },
  Youtube: {
    width: 70,
    height: 25,
    padding: 3,
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
  shadow: {
    shadowColor: "black",
    shadowOpacity: 3,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 4,
    elevation: 5,
  },
});

export default TeamInfoScreen;
