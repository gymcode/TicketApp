import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import {
  ScrollView,
  FlatList,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { useIsFocused } from "@react-navigation/native";
import FAB from "react-native-fab";
import { MaterialIcons } from "@expo/vector-icons";

import * as appConst from "../../config/Config";
import NewsItems from "../../components/NewsItems";
import theme from "../../utils/theme";

const Home = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [responseStatus, setResponseStatus] = useState(0);
  const [newFeedList, setNewsFeedList] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const isFocused = useIsFocused();

  useEffect(() => {
    getData();
  }, []);

  // get news feed data
  async function getData() {
    fetch(appConst.NEWS_URL)
      .then((response) => response.json())
      .then((responseJson) => {
        setNewsFeedList(responseJson.articles),
          setLoading(true),
          setResponseStatus(1);
      })
      .catch((error) => {
        setResponseStatus(2);
      });
  }

  // wait function
  function wait(timeout) {
    return new Promise((resolve) => {
      setTimeout(resolve, timeout);
    });
  }

  // onRefresh
  const onRefresh = useCallback(() => {
    setRefreshing(true);

    wait(1000).then(() => {
      setRefreshing(false);
      fetch(appConst.NEWS_URL)
        .then((response) => response.json())
        .then((responseJson) => {
          setNewsFeedList(responseJson.articles),
            setLoading(true),
            setResponseStatus(1);
        })
        .catch((error) => {
          setResponseStatus(2);
        });
    });
  }, [refreshing]);

  function onclickNews(item) {
    navigation.navigate("News", { ...item });
  }

  let NewsFeed;
  if (responseStatus === 0) {
    NewsFeed = (
      <View>
        <ActivityIndicator size="small" />
      </View>
    );
  } else if (responseStatus === 1) {
    NewsFeed = (
      <FlatList
        data={newFeedList}
        renderItem={({ item }) => (
          <TouchableWithoutFeedback onPress={() => onclickNews(item)}>
            <NewsItems {...item} navigation={navigation} />
          </TouchableWithoutFeedback>
        )}
        keyExtractor={(item, index) => index.toString()}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    );
  } else {
    NewsFeed = (
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <Text>Unable to get news item, check your internet connection...</Text>
      </ScrollView>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>
        Latest
        <Text style={{ fontWeight: "normal", fontFamily: "AirbnbCereal-Book" }}>
          {" "}
          News
        </Text>
      </Text>
      {NewsFeed}
      <FAB
        style={{
          position: "absolute",
          width: 50,
          height: 50,
        }}
        buttonColor="#e9446a"
        iconTextColor="#FFFFFF"
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
  shadow: {
    backgroundColor: theme.COLORS.SECONDARY,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.2,
    elevation: 5,
  },
  matchCenterView: {
    backgroundColor: theme.COLORS.SECONDARY,
  },
  mainText: {
    marginTop: 20,
    fontSize: 19,
    color: theme.COLORS.HEADER,
    fontWeight: "bold",
    fontFamily: "AirbnbCereal-Black",
    marginLeft: 20,
  },
});
export default Home;
