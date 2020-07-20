import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import { TableArray } from '../data/tableData';
import { ScrollView } from 'react-native-gesture-handler';
import theme from '../utils/theme';

const TableList = props => {
  return (
    <View style={styles.data}>
      <Text style={{ fontWeight: 'bold' }}>{props.pos}</Text>
      <Image source={props.logo} style={styles.img} />
      <Text style={styles.teamName}>{props.team}</Text>
      <Text style={styles.point}>{props.points}</Text>
      <Text>{props.played}</Text>
      <Text>{props.wins}</Text>
      <Text>{props.draws}</Text>
      <Text>{props.losses}</Text>
      <Text>{props.goalsFor}</Text>
      <Text>{props.goalAgainst}</Text>
    </View>
  );
};

const TableTemplate = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 5,
        }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image
            style={{ height: 40, width: 40, borderRadius: 20 }}
            source={require('../assets/images/logoMain.png')}
          />
          <Text
            style={{
              color: theme.COLORS.HEADER,
              fontWeight: 'bold',
              fontSize: 20,
              fontFamily: 'AirbnbCereal-Black',
            }}>
            GPL
          </Text>
        </View>
        <View>
          <Text style={{ fontSize: 10 }}>
            LAST UPDATED:10 MARCH, 2020 20:45
          </Text>
          <Text style={{ fontSize: 12 }}>
            2019/2020 {''}
            <Text style={{ fontWeight: 'bold' }}>Match Week 27</Text>
          </Text>
        </View>
      </View>
      <View style={styles.title}>
        <Text style={styles.titleText}>Pos</Text>
        <Text style={styles.titleText}>Team</Text>
        <Text style={styles.titleText}>Pts</Text>
        <Text style={styles.titleText}>Pl</Text>
        <Text style={styles.titleText}>W</Text>
        <Text style={styles.titleText}>D</Text>
        <Text style={styles.titleText}>L</Text>
        <Text style={styles.titleText}>GF</Text>
        <Text style={styles.titleText}>GA</Text>
      </View>
      <FlatList
        data={TableArray}
        renderItem={obj => <TableList {...obj.item} />}
        keyExtractor={(item, index) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    marginTop: 10,
    width: 'auto',
    height: 'auto',
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
  titleText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#430db6',
  },
  data: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginLeft: -2,
    paddingVertical: 20,
    backgroundColor: '#e4e4e4',
  },
  img: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginLeft: -22,
    marginTop: -10,
  },
  teamName: {
    fontWeight: 'bold',
    marginLeft: -24,
  },
  point: {
    marginLeft: -15,
  },
});
export default TableTemplate;