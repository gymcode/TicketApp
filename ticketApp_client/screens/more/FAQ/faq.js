import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

const FAQ = ({ navigation }) => {
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
  });
  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          justifyContent: "center",
          paddingHorizontal: 15,
          paddingTop: 15,
        }}
      >
        <Text style={styles.header}>TICKET POUCH FAQs</Text>
      </View>
      <View style={{ justifyContent: "center", paddingHorizontal: 15 }}>
        <Text style={styles.question}>1. What is Ticket Pouch?</Text>
        <Text style={styles.answers}>
          Ticket Pouch as the name denotes, is an app that helps football
          activists purchase tickets right from the comfort of their homes and
          keep them until the time of the said game. Users get to choose the
          number of tickets they would like to purchase and the type of ticket
          they want: whether Regular or VIP tickets. Aside purchasing and
          keeping the tickets, Ticket Pouch also provides its users with news
          feed, the list of upcoming matches and the team information of their
          favourite teams. This also includes fixtures and statistics of their
          team.Ticket Pouch runs on iPhone and Android phones, as well as iPads
          and Android tablets.
        </Text>

        <Text style={styles.question}>
          2. What do I need to sign up for Ticket Pouch?
        </Text>
        <Text style={styles.answers}>
          In order to gain all the functionalities of Ticket Pouch, one must
          sign in. In signing in, user needs a valid email account and a strong
          password. For the user to purchase tickets, the person must have a
          registered MTN MOMO account or Vodafone Cash account, with enough
          money to purchase the tickets.
        </Text>

        <Text style={styles.question}>3. Why do people like Ticket Pouch?</Text>
        <Text style={styles.answers}>
          Ticket Pouch was developed as an antedote to other means of purchasing
          Ghana Primier League Tickets, where one has to join long queues to
          purchase tickets for their favourite games and face the high risk of
          misplacing their tickets before the time of the match. Ticket Pouch
          allows users to buy tickets from the comfort of their homes, and also
          helps them to keep these tickets till the day of the match. It also
          provides users with information about their favourite teams,
          statistics, fixtures, list of upcoming matches and latest news feed.
        </Text>

        <Text style={styles.question}>
          4. Does Ticket Pouch have a minimum age?
        </Text>
        <Text style={styles.answers}>
          Ticket Pouch does not ask users to specify their age when signing up
          for the application. But Ticket Pouch has a minimum age of 13, which
          is the standard age for obtaining a valid email address according to
          the Childrens' Online Privacy Protection Act. Without a valid email
          address, one cannot sign in to the ticket Pouch.
        </Text>

        <Text style={styles.question}>
          5. Are there risks in using Ticket Pouch?
        </Text>
        <Text style={styles.answers}>
          There is nothing inherently difficult about Ticket Pouch. Users can
          buy and keep their tickets without any fear of loosing them.
        </Text>

        <Text style={styles.question}>
          6. Is it important that aside the news feed, Ticket Pouch gives team
          information?
        </Text>
        <Text style={styles.answers}>
          In Ticket Pouch, News feed is for a general overview and news about
          all the games and new updates in the Ghana Primier League. This does
          not give any detail about a user's favourite team and their
          performance in respect to the competion. The Team Information pane
          gives some more detail about the the selected team. Fans can now know
          the players of their favourite team and some other basic information
          about their favourite teams.
        </Text>

        <Text style={styles.question}>7. How flexible is Ticket Pouch?</Text>
        <Text style={styles.answers}>
          Our Developers have put up a user friendly and interactive UI which is
          easy to use. Aside that, it is possible for a user to sign in to their
          account from as many devices as they please.
        </Text>

        <Text style={styles.question}>
          8. What is the best way to ensure that tickets purchased using Ticket
          Pouch are safe?
        </Text>
        <Text style={styles.answers}>
          In signing in, Ticket Pouch checks the strength of passwords to ensure
          that they are strong enough. Users are advised to avoid using
          consecutive characters (i.e abcd and 1234) and only one character (i.e
          1111 oe aaaa) as passwords. In addition to that, users of Ticket Pouch
          are advised to keep their passwords discrete. Users can also sync the
          app to their email in such a way that, anytime there is a log in, they
          are notified to verify whether they logged into the app on the said
          device.
        </Text>
        <Text style={styles.question}>
          9. In which country can Ticket Pouch be used?
        </Text>
        <Text style={styles.answers}>
          Ticket Pouch can only be used in Ghana.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "whitesmoke",
  },
  header: {
    fontSize: 21,
    marginBottom: 20,
    color: "#000a43",
    fontFamily: "AirbnbCereal-Black",
  },
  question: {
    fontSize: 21,
    marginBottom: 20,
    color: "#073068",
    fontFamily: "TTCommons-Bold",
  },
  answers: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: "justify",
    lineHeight: 20,
    fontFamily: "TTCommons-Regular",
  },
});
export default FAQ;
