import React from "react";
import { Text, View, StyleSheet, Dimensions, Image } from "react-native";
import theme from "../utils/theme";

const winWidth = Dimensions.get("window").width;
const winHeight = Dimensions.get("window").height;

const TeamInfoItems = (props) => {
  return (
    <View style={styles.container}>
      {props.team.map((teams) => (
        <View key={teams.id} style={styles.card}>
          <View style={styles.cardItem}>
            <Image
              source={teams.profile}
              style={{ width: winWidth / 2.5, height: 200 }}
            />
            {/* <Text style={styles.number}>{teams.playerNumber}</Text> */}
            <View style={{ marginTop: 10 }}>
              <Text style={styles.text}>
                {" "}
                {teams.firstName} {""}
                <Text style={{ color: "#e9446a" }}>{teams.surName}</Text>
              </Text>
              <Text style={{ fontWeight: "bold", marginLeft: 5 }}>
                {teams.pos}
              </Text>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  card: {
    paddingVertical: 30,
    marginLeft: 25,
    display: "flex",
  },
  cardItem: {
    flex: 1,
    height: 220,
  },
  text: {
    fontSize: 17,
    fontFamily: "AirbnbCereal-Black",
    color: theme.COLORS.HEADER,
  },
  number: {
    fontSize: 50,
    color: "grey",
    fontFamily: "AirbnbCereal-Black",
    position: "absolute",
    left: 10,
  },
});

export default TeamInfoItems;
