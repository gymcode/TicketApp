import React, { useState } from "react";
import { Text, StyleSheet, View, Image, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import moment from "moment";

import theme from "../../../utils/theme";

const winWidth = Dimensions.get("window").width;
const windHeight = Dimensions.get("window").height;

// alternate image to show when image is loading from the server
const altImage = require("../../../assets/images/thumbnail.png");
const NewsDetails = ({ navigation, route }) => {
  const [loadingImage, setLoadingImage] = useState(false);
  const {
    title,
    author,
    content,
    publishedAt,
    urlToImage,
    description,
  } = route.params;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            width: 32,
            height: 32,
            borderRadius: 16,
            backgroundColor: "rgba(21,22,48,0.1)",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: 20,
          }}
        >
          <Ionicons name="ios-arrow-round-back" size={32} color="#fff" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* Image container */}
      <Image style={styles.imageContainer} source={{ uri: urlToImage }} />
      {/* Article Container */}
      <View style={styles.bodyContainer}>
        <View style={styles.dateTime}>
          <Ionicons name="md-time" size={14} color="red" />
          <Text
            style={{
              marginLeft: 4,
              color: "grey",
              fontWeight: "bold",
              fontSize: 12,
            }}
          >
            {moment(publishedAt).format("ddd, MMM DD, YYYY")}
          </Text>
        </View>
        {/* Article title  */}
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.bodyText}>{content}</Text>
        <Text style={styles.author}>By: {author || "Unknown"}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  title: {
    margin: 15,
    fontSize: 20,
    color: theme.COLORS.GRADIENT_START,
    fontFamily: "AirbnbCereal-Medium",
  },
  imageContainer: {
    width: winWidth,
    height: windHeight / 2.3,
  },
  bodyContainer: {
    width: winWidth,
    borderRadius: 15,
    backgroundColor: theme.COLORS.SECONDARY,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    marginTop: -10,
    height: windHeight,
  },
  bodyText: {
    marginLeft: 15,
    marginRight: 15,
    fontSize: 18,
    fontFamily: "TTCommons-Regular",
  },
  dateTime: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "center",
  },
  author: {
    marginTop: windHeight / 13,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 30,
    fontSize: 18,
  },
});

export default NewsDetails;
