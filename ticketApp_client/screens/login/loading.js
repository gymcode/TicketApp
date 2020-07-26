import React from "react";
import { View, Text } from "react-native";
import LottieView from "lottie-react-native";
import * as load from "../../assets/lottie-animation/890-loading-animation.json";

const Loading = ({ loading }) => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      {!loading ? (
        <LottieView
          source={load}
          autoPlay
          loop
          style={{ height: 100, width: 100 }}
        />
      ) : (
        <Text>Authenticated successfully</Text>
      )}
    </View>
  );
};

export default Loading;
