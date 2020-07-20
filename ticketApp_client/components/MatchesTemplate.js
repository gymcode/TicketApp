import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import theme from '../utils/theme';

const windWidth = Dimensions.get('window').width;
import PaymentScreen from '../screens/upcomingMatches/payment/paymentScreen';
 
 
//Upcomimg matches template
const MatchesTemplate = props => {
 
  const [isMode, setMode] = useState(false);
  const [ticketDetails, setDetails]=useState([]);
  const closeBtn = () => {
    setMode(false);
  };

 let data = props


 function passData(data){
    setDetails(data)
    setMode(true)
 }

  return ( 
    <View
      style={{
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: '#c4c4c4',
      }}>
      <View style={styles.matchesContainer}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          {/* Home team logo */}
          <View style={{justifyContent:'space-between'}}>
            <Image style={styles.Logo} source={data.homeTeamLogo} />
            <Text style={styles.team}>{data.homeTeam}</Text>
          </View>
          {/* Kick off  */}
          <View style={{marginRight:20}}>
            <Text style={styles.kickOff}>Kick off</Text>
            <Text style={styles.time}>{data.kickoff}</Text>
          </View>
          {/*Away team logo  */}
          <View style={{justifyContent:'space-between'}}>
            <Image style={styles.Logo} source={data.awayTeamLogo} />
            <Text style={styles.team}>{data.awayTeam}</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 10,
          }}>
          <Text style={styles.venue}>Venue : {''}</Text>
          <Text style={styles.venueName}>{data.venue}</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            passData(data)
          }}
          style={[styles.ticketBtn, styles.shadow]}>
          <Text style={styles.buyTicket}>
            Buy <Text style={{ fontWeight: 'bold' }}>Tickets</Text>
          </Text>
          <PaymentScreen ticketDetails={ticketDetails} visible={isMode} closeBtn={() => closeBtn()} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  matchesContainer: {
    width: windWidth - 40,
    height: 165,
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 40,
    margin: 15,
  },
  Logo: {
    width: 40,
    height: 40,
    borderRadius: 20
  },
  kickOff: {
    color: '#FC1055',
    fontFamily:  'Inter-Italic',
  },
  time: {
    fontSize: 12,
    fontFamily: 'AirbnbCereal-Book',
    textAlign: 'center',
  },

  team: {
    fontSize: 14,
    color: 'black',
    fontFamily: 'AirbnbCereal-Bold',
    marginTop:4
  },
  venue: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FC1055',
    fontFamily:  'TTCommons-Bold',
  },
  venueName: {
    fontSize: 15,
    fontFamily:  'TTCommons-BoldItalic',
  },
  ticketBtn: {
    backgroundColor: 'gold',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 25,
    marginTop: 10,
  },
  buyTicket: {
    fontWeight: 'normal',
    textTransform: 'uppercase',
  },
  shadow: {
    shadowColor: theme.COLORS.DEFAULT,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.2,
    elevation: 3,
  },
});
export default MatchesTemplate;
