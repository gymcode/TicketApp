import React, { useState, useContext } from "react";
import { View, Text, Modal, StyleSheet, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Constants from "expo-constants";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Dropdown } from "react-native-material-dropdown";
import Animation from "lottie-react-native";
import { newsContext } from "../../../Main";

const winHeight = Dimensions.get("window").height;
const windWidth = Dimensions.get("window").width;

const PaymentScreen = ({ visible, closeBtn, ticketDetails }) => {
  const { addTicket } = useContext(newsContext);
  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(50);

  const inreaseCount = () => {
    setCount(count + 1);
    setPrice(50 * count);
  };
  const reduceCount = () => {
    if (count > 0) {
      setCount(count - 1);
      setPrice(price * count);
    } else {
      setCount(0);
      setPrice(price);
    }
  };

  let data = [
    {
      value: "MTN Mobile Money",
    },
    {
      value: "Visa Card",
    },
    {
      value: "Credit Card",
    },
  ];

  return (
    <Modal visible={visible} animationType={"slide"}>
      <View style={styles.container}>
        {/* Header and close icon */}
        <View style={styles.header}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: "bold",
              fontFamily: "AirbnbCereal-Black",
              color: "#373A42",
            }}
          >
            Payment Options
          </Text>
          <TouchableOpacity
            style={{
              width: 35,
              height: 35,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "white",
              shadowColor: "#000",
              shadowOpacity: 0.1,
              shadowOffset: { width: 0, height: 1 },
            }}
            onPress={closeBtn}
          >
            <Ionicons name="md-close" size={26} color="#F00F0F" />
          </TouchableOpacity>
        </View>
        {/* Payment method icons */}
        {/* <View style={styles.paymentMethodIcons}>
          <Animation
            source={require('../../../assets/lottie-animation/17477-orange-payment.json')}
            autoPlay
            loop
            style={{ height: 70, width: 50 }}
          />
        </View> */}
        {/* Payment method dropdown */}
        <View style={{ marginLeft: 25, marginRight: 25, marginTop: 25 }}>
          <Dropdown label="Select payment method" data={data} />
        </View>
        {/* Total order */}
        <View style={styles.totalOrder}>
          <Text
            style={{
              color: "white",
              fontSize: 17,
              fontFamily: "AirbnbCereal-Medium",
            }}
          >
            Total Order
          </Text>
          <Text style={{ color: "white", marginTop: 10 }}>
            {" "}
            ────────────────────
          </Text>
        </View>
        {/* Ticket details */}
        <View style={styles.ticketDetails}>
          {/* Team and Price */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginLeft: 10,
              marginRight: 10,
            }}
          >
            <View style={{ flexDirection: "row" }}>
              {/* Home team */}
              <Text style={styles.mainText}>{ticketDetails.homeTeam}</Text>
              <Text style={styles.mainText}>-</Text>
              {/* Away team */}
              <Text style={styles.mainText}>{ticketDetails.awayTeam}</Text>
            </View>
            {/* Price */}
            <Text
              style={{
                fontSize: 13,
                fontWeight: "normal",
                color: "#0A3C85",
                fontFamily: "AirbnbCereal-Medium",
              }}
            >
              GHS {price}.00
            </Text>
          </View>
          {/* Number of tickets */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginLeft: 10,
            }}
          >
            <Text style={styles.mainText}>Number of tickets</Text>
            {/* Reduce Ticket count */}
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                onPress={reduceCount}
                style={styles.ticketCount}
              >
                <Text
                  style={{ color: "white", fontFamily: "AirbnbCereal-Medium" }}
                >
                  -
                </Text>
              </TouchableOpacity>
              {/* Number */}
              <Text style={styles.mainText}>{ticketDetails.price}</Text>
              {/* Increase Ticket count */}
              <TouchableOpacity
                onPress={inreaseCount}
                style={styles.ticketCount}
              >
                <Text
                  style={{ color: "white", fontFamily: "AirbnbCereal-Medium" }}
                >
                  +
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* Ticket type */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              margin: 10,
            }}
          >
            <Text style={styles.mainText}>Ticket type</Text>
            <Text style={styles.mainText}>VIP</Text>
          </View>
        </View>
        {/* Total purchase */}
        <View style={styles.finalCost}>
          <Text style={styles.mainText}>Total Purchase</Text>
          <Text style={{ color: "tomato", fontFamily: "AirbnbCereal-Medium" }}>
            GHS {ticketDetails.total}
          </Text>
        </View>

        {/* Button */}
        <View style={{ alignItems: "center", marginTop: 40 }}>
          <TouchableOpacity
            onPress={() => addTicket(ticketDetails)}
            style={styles.buyNowBtn}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>
              BUY TICKET NOW
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Constants.statusBarHeight + 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 35,
  },
  paymentMethodIcons: {
    alignItems: "flex-end",
  },
  totalOrder: {
    backgroundColor: "#0A3C85",
    height: winHeight / 12,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
  ticketDetails: {
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    height: winHeight / 7,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    justifyContent: "space-evenly",
    marginLeft: 20,
    marginRight: 20,
    marginTop: -30,
  },
  mainText: {
    fontSize: 15,
    color: "#0A3C85",
    fontFamily: "AirbnbCereal-Medium",
  },
  ticketCount: {
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0A3C85",
    marginLeft: 10,
    marginRight: 10,
  },
  ticketType: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  finalCost: {
    backgroundColor: "#c4c4c4",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: winHeight / 22,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginLeft: 20,
    marginRight: 20,
    paddingHorizontal: 10,
  },
  buyNowBtn: {
    backgroundColor: "#0B8E86",
    height: 40,
    width: windWidth / 2,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
});

export default PaymentScreen;
