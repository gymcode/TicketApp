import React from "react";
import { View, Text, Modal, StyleSheet, Image } from "react-native";
import Constants from "expo-constants";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { teams } from "../../data/data";
import { Ionicons } from "@expo/vector-icons";

const TeamList = (props) => {
  return (
    <TouchableOpacity
      onPress={() => props.select(props.data)}
      style={styles.listItems}
    >
      <Image style={styles.image} source={props.logo} />
      <Text style={{ marginLeft: 8, fontSize: 15, fontWeight: "500" }}>
        {props.name}
      </Text>
    </TouchableOpacity>
  );
};
const SelectTeams = ({ visible, closeButton, selectedTeam }) => {
  return (
    <Modal visible={visible} animationType={"slide"}>
      <View style={styles.modalView}>
        <TouchableOpacity style={{ margin: 20 }} onPress={closeButton}>
          <Ionicons name="ios-close" size={30} />
        </TouchableOpacity>
        <FlatList
          data={teams}
          renderItem={(obj) => (
            <TeamList
              {...obj.item}
              data={obj.item}
              select={(data) => {
                selectedTeam({ ...data });
                closeButton();
              }}
            />
          )}
          keyExtractor={(index, item) => item.id}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 20,
  },
  listItems: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "grey",
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 25,
  },
});

export default SelectTeams;
