import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import theme from '../utils/theme';
import moment from 'moment';

const winWidth = Dimensions.get('window').width;
const windHeight = Dimensions.get('window').height;


const NewsItems = ({ urlToImage, title, publishedAt }) => {
 
    let altImage = "https://raw.githubusercontent.com/satishtamada/NewsApp-React-Native/master/src/images/ic_news_placeholder.png";
  
  return (
      <View style={styles.container}>
          <Image  style={styles.imageContainer} source={{ uri : urlToImage || altImage}} />
          {/* News Item Number */}
          {/* <View style={styles.newsItemNumber}>
            <Text
              style={{
                fontSize: 24,
                color: 'gold',
                fontFamily: 'AirbnbCereal-Black',
              }}>
              {articleNumber}
            </Text>
          </View> */}
        <View
          style={{  paddingHorizontal: 10, marginTop: 30, alignSelf:'flex-start' }}>
          <View style={styles.firstTeam}>
              <Text>First team</Text>
            </View>
          <Text style={{fontFamily: 'AirbnbCereal-Bold'}}>{title}</Text>
          {/* Date and time of article */}
          <View
            style={{ flexDirection: 'row', marginVertical:20 }}>
            <Ionicons name="md-time" size={14} color="red" />
            <Text
              style={{
                marginLeft: 4,
                color: 'grey',
                fontWeight: 'bold',
                fontSize: 10,
              }}>
             {moment(publishedAt).format('ddd,MMM DD, YYYY')}
            </Text>
          </View>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.COLORS.SECONDARY,
    shadowColor: theme.COLORS.DEFAULT,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.2,
    marginHorizontal: 20,
    marginVertical: 20,
    borderWidth: 0.2,
    elevation:5,
    height: 'auto',
    width: winWidth/1.1,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
 
    alignItems: 'center', 
    justifyContent: 'center' 
  },
  imageContainer: {
    width: winWidth/1.1,
    height: 220,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  // newsItemNumber: {
  //   position: 'absolute',
  //   right: 200,
  //   bottom: 120,
  //   padding: 10,
  //   width: 150,
  //   height: 133,
  // },
  firstTeam: {
    width: 120,
    height: 25,
    borderRadius: 10,
    borderColor:'grey',
    borderWidth: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    marginVertical:20
  },
});

export default NewsItems;
