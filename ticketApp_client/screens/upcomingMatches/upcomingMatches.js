import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { UpcomingMatches, matchDay } from '../../data/data';
import theme from '../../utils/theme';
 
import MatchesTemplate from '../../components/MatchesTemplate';
 
// Upcoming matches screen
const Matches = () => {
  return (
    <ScrollView  style={styles.container}>
      <View
        style={{
          borderBottomWidth: StyleSheet.hairlineWidth,
          paddingHorizontal: 20,
          borderColor: '#c4c4c4',
          paddingVertical: 15,
        }}>
        <Text style={styles.upcomingSchedule}>
          Upcoming
          <Text style={{ fontWeight: 'normal', fontFamily:'AirbnbCereal-Book' }}> Schedule</Text>
        </Text>
      </View>
      {matchDay.map(matchDays => (
        <View key={matchDays.id}>
          <Text style={styles.matchDay}>{matchDays.matchday}</Text>
          <FlatList
            data={UpcomingMatches}
            renderItem={obj => <MatchesTemplate {...obj.item} />}
            keyExtractor={(index, item) => item.id}      
          />
          <View style={styles.divider} />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.COLORS.SECONDARY,
  },
  upcomingSchedule: {
    fontSize: 19,
    color: theme.COLORS.HEADER,
    fontWeight: 'bold',
    fontFamily:'AirbnbCereal-Black'
  },
  matchDay: {
    fontSize: 16,
    color: theme.COLORS.GRADIENT_START,
    marginTop: 12,
    fontWeight: 'bold',
    marginLeft: 20,
    fontFamily:'AirbnbCereal-Medium'
  },
  divider: {
    backgroundColor: '#e1e2',
    shadowColor: theme.COLORS.DEFAULT,
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 1 },
    height: 20,
  },
});
export default Matches;
