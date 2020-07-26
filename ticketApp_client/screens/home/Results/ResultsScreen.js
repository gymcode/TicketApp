import React, { useContext } from "react";
import { FlatList, View, StyleSheet, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { newsContext } from "../../../Main";
import Results from "../../../components/results";
import theme from "../../../utils/theme";

const ResultsScreen = () => {
  const { matches } = useContext(newsContext);
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Date container */}
      <View style={styles.matchSchedule}>
        <Text
          style={{
            color: theme.COLORS.HEADER,
            fontWeight: "bold",
            fontSize: 20,
            fontFamily: "AirbnbCereal-Black",
          }}
        >
          Match {""}
          <Text
            style={{
              fontWeight: "normal",
              color: "grey",
              fontFamily: "AirbnbCereal-Book",
            }}
          >
            Results
          </Text>
        </Text>
      </View>
      <FlatList
        data={matches}
        renderItem={(obj) => <Results {...obj.item} />}
        keyExtractor={(index, item) => index.toString()}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.COLORS.SECONDARY,
    shadowColor: theme.COLORS.DEFAULT,
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  matchSchedule: {
    borderBottomWidth: 0.5,
    paddingVertical: 13,
    borderColor: theme.COLORS.BORDER,
  },
});

export default ResultsScreen;
