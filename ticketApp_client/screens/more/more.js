import React, { useContext } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import {
  TouchableWithoutFeedback,
  TouchableOpacity,
  ScrollView,
} from 'react-native-gesture-handler';
import {
  Ionicons,
  AntDesign,
  EvilIcons,
  FontAwesome,
  Feather,
} from '@expo/vector-icons';
import theme from '../../utils/theme';
import { newsContext } from '../../Main';

const { width, height } = Dimensions.get('screen');


const MoreScreen = ({ navigation }) => {
  const { authContext : {signOut}} = useContext(newsContext)
  
  return (
    <ScrollView style={styles.container}>
      <Text
        style={{ fontSize:16, fontWeight: 'bold',color:theme.COLORS.HEADER, marginTop: 30, paddingHorizontal: 15 }}>
        About Ticket Pouch
      </Text>
      <View style={styles.itemContainer}>
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate('Contact Us');
          }}>
          <View style={styles.items}>
            <View style={{ flexDirection: 'row' }}>
              <AntDesign color="#e9446a" name="mail" size={22} />
              <Text
                style={{
                  fontWeight: 'bold',
                  color: 'grey',
                  marginLeft: 10,
                  marginTop: 5,
                }}>
                Contact Us
              </Text>
            </View>
            <Ionicons
              style={{ marginTop: 5 }}
              name="ios-arrow-forward"
              size={25}
              color="grey"
            />
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate('Terms');
          }}>
          <View style={styles.items}>
            <View style={{ flexDirection: 'row' }}>
              <Feather name="alert-circle" color="#e9446a" size={22} />
              <Text
                style={{
                  fontWeight: 'bold',
                  color: 'grey',
                  marginLeft: 10,
                  marginTop: 5,
                }}>
                Terms and Conditions
              </Text>
            </View>
            <Ionicons name="ios-arrow-forward" size={25} color="grey" />
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate('FAQ');
          }}>
          <View style={styles.items}>
            <View style={{ flexDirection: 'row' }}>
              <AntDesign name="questioncircleo" color="#e9446a" size={22} />
              <Text
                style={{
                  fontWeight: 'bold',
                  color: 'grey',
                  marginLeft: 10,
                  marginTop: 5,
                }}>
                FAQ
              </Text>
            </View>
            <Ionicons name="ios-arrow-forward" size={25} color="grey" />
          </View>
        </TouchableWithoutFeedback>
      </View>
      <Text
        style={{ fontSize:16, fontWeight: 'bold',color:theme.COLORS.HEADER, marginTop: 10, paddingHorizontal: 15 }}>
        Settings
      </Text>
      <View style={styles.itemContainer}>
        <TouchableWithoutFeedback>
          <View style={styles.items}>
            <View style={{ flexDirection: 'row' }}>
              <FontAwesome name="bell-o" color="#e9446a" size={22} />
              <Text
                style={{
                  fontWeight: 'bold',
                  color: 'grey',
                  marginLeft: 10,
                  marginTop: 5,
                }}>
                Notifications
              </Text>
            </View>
            <Ionicons name="ios-arrow-forward" size={25} color="grey" />
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <View style={styles.items}>
            <View style={{ flexDirection: 'row' }}>
              <FontAwesome name="flag-o" color="#e9446a" size={22} />
              <Text
                style={{
                  fontWeight: 'bold',
                  color: 'grey',
                  marginLeft: 10,
                  marginTop: 5,
                }}>
                Country
              </Text>
            </View>
            <Ionicons
              style={{ marginTop: 1 }}
              name="ios-arrow-forward"
              size={25}
              color="grey"
            />
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <View style={styles.items}>
            <View style={{ flexDirection: 'row' }}>
              <AntDesign name="tago" color="#e9446a" size={22} />
              <Text
                style={{
                  fontWeight: 'bold',
                  color: 'grey',
                  marginLeft: 10,
                  marginTop: 5,
                }}>
                Language
              </Text>
            </View>
            <Ionicons name="ios-arrow-forward" size={25} color="grey" />
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => {signOut()}}>
          <View style={{ flexDirection: 'row' }}>
            <AntDesign name="logout" size={20} color="#e9446a" />
            <Text style={{ fontWeight: 'bold', marginLeft: 10, color: 'grey' }}>
              Log out
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
      <Text
        style={{ fontSize:16, fontWeight: 'bold', marginTop: 10, color:theme.COLORS.HEADER,  paddingHorizontal: 15 }}>
        Join the discussion
      </Text>
      <View style={styles.discussionContainer}>
        <View style={styles.discussion}>
          <TouchableOpacity>
            <AntDesign name="twitter" size={26} color="#00a4f3" />
          </TouchableOpacity>
          <TouchableOpacity>
            <EvilIcons
              name="sc-facebook"
              style={{ marginRight: 20, marginLeft: 20 }}
              size={35}
              color="#2966b0"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome name="instagram" size={26} color="#ff0045" />
          </TouchableOpacity>
        </View>
       
        <Text
          style={{ fontWeight: 'bold', color: 'grey', textAlign: 'center' }}>
          Visit GFA Offical Website
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.COLORS.SECONDARY,
  },
  itemContainer: {
    justifyContent: 'space-evenly',
    backgroundColor: theme.COLORS.SECONDARY,
    shadowColor: theme.COLORS.DEFAULT,
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    elevation:3,
    height: height/4.2,
    paddingHorizontal: 15,
    marginVertical: 10,
  },
  items: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  discussionContainer: {
    justifyContent: 'space-evenly',
    backgroundColor:theme.COLORS.SECONDARY,
    shadowColor: theme.COLORS.DEFAULT,
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    elevation:3,
    height: height/6.8,
    marginVertical: 10,
    paddingHorizontal: 15,
  },
  discussion: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default MoreScreen;
