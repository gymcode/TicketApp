import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import theme from "../utils/theme";

const Results = (props) => {
  return (
    <View>
      {/*Match results container  */}
      <View style={styles.resultsContainer}>
        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          {/* Home team logo */}
          <Image style={styles.homeTeamLogo} source={props.homeTeamLogo} />
          {/*Match date  */}
          <View style={{ marginTop: -15 }}>
            <Text
              style={{
                color: "#FC1055",
                fontWeight: "bold",
                fontSize: 15,
                fontFamily: "TTCommons-BoldItalic",
                marginLeft: -5,
                marginBottom: 4,
              }}
            >
              {props.date}
            </Text>
            <Text
              style={{
                marginLeft: 12,
                marginBottom: 4,
                fontSize: 12,
                fontWeight: "bold",
              }}
            >
              GPL
            </Text>
            {/* Score container */}
            <View style={styles.scoreContainer}>
              <Text style={styles.scoreText}>{props.homeTeamScore}</Text>
              <Text style={styles.scoreText}>-</Text>
              <Text style={styles.scoreText}>{props.awayTeamScore}</Text>
            </View>
          </View>
          {/* Away team logo */}
          <Image style={styles.awayTeamLogo} source={props.awayTeamLogo} />
        </View>
        {/* Team name */}
        <View style={styles.teamName}>
          <Text style={{ fontWeight: "bold" }}>{props.homeTeam}</Text>
          <Text style={styles.regulationTime}>90+3</Text>
          <Text style={{ fontWeight: "bold" }}>{props.awayTeam}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  resultsContainer: {
    borderBottomWidth: 0.5,
    borderColor: theme.COLORS.BORDER,
    paddingVertical: 30,
  },
  homeTeamLogo: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  scoreContainer: {
    width: 50,
    height: 25,
    backgroundColor: "#430db6",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  scoreText: {
    fontWeight: "bold",
    fontSize: 18,
    color: "white",
  },
  awayTeamLogo: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  regulationTime: {
    color: "grey",
    fontWeight: "bold",
    fontSize: 12,
  },
  teamName: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingVertical: 10,
    fontFamily: "AirbnbCereal-Bold",
  },
});
export default Results;
