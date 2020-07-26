import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Image } from "react-native";
import { Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const winwidth = Dimensions.get("window").width;

const TableTemplate = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          marginLeft: 10,
          backgroundColor: "white",
          shadowColor: "#000",
          shadowOpacity: 0.1,
          shadowOffset: { width: 0, height: 1 },
          width: 400,
          height: "auto",
        }}
      >
        {/* Title */}
        <View style={styles.title}>
          <Text style={styles.titleText}>Pos</Text>
          <Text style={styles.titleText}>Team</Text>
          <Text style={styles.titleText}>Pts</Text>
          <Text style={styles.titleText}>Pl</Text>
          <Text style={styles.titleText}>W</Text>
          <Text style={styles.titleText}>D</Text>
          <Text style={styles.titleText}>L</Text>
          <Text style={styles.titleText}>GF</Text>
          <Text style={styles.titleText}>GA</Text>
        </View>
        {/* Data */}
        <View style={styles.data}>
          <Text style={{ fontWeight: "bold" }}>1</Text>
          <Image
            source={require("../../../assets/images/club1.png")}
            style={styles.img}
          />
          <Text style={styles.teamName}>Kotoko</Text>
          <Text style={styles.point}>0</Text>
          <Text>0</Text>
          <Text>0</Text>
          <Text>0</Text>
          <Text>0</Text>
          <Text>0</Text>
          <Text>0</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: winwidth * 0.1,
    marginTop: 10,
    marginLeft: -3,
  },
  title: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20,
    marginLeft: -2,
    paddingVertical: 0,
  },
  titleText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#430db6",
  },
  data: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginLeft: -2,
    paddingVertical: 15,
    backgroundColor: "#c4c4c4",
  },
  img: {
    width: 35,
    height: 35,
    borderRadius: 20,
    marginLeft: -22,
    marginTop: -10,
  },
  teamName: {
    fontWeight: "bold",
    marginLeft: -24,
  },
  point: {
    marginLeft: -15,
  },
});
export default TableTemplate;
