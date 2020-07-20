import React,{useContext} from 'react';
import { View, Text, StyleSheet,Dimensions, Image,Button } from 'react-native';
import { newsContext } from '../../Main';
import { ScrollView } from 'react-native-gesture-handler';
import theme from '../../utils/theme';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const winScreen = Dimensions.get('screen').width
const TicketHistory = () => {
    const {deleteTicket, tickets} = useContext(newsContext)
    
    return(
        <View style={styles.container}>
            {tickets.length > 0 ? (
              <ScrollView>
                  {tickets.map(ticket => (
                      <View key={ticket.id} style={styles.card}>
                          <View style={{flexDirection:'row', justifyContent:"space-evenly",paddingVertical:20}}>
                             <View style={{justifyContent:'space-between'}}>
                                <Image style={styles.logo} source={ticket.homeTeamLogo}/>
                                <Text style={styles.team}>{ticket.homeTeam}</Text>
                             </View>
                             <View style={{alignItems:'center'}}>
                                 <Text style={styles.time}>{ticket.date}</Text>
                                 <Text style={styles.venueName}>{ticket.venue}</Text>
                             </View>
                             <View style={{justifyContent:'space-between'}}>
                                <Image style={styles.logo} source={ticket.awayTeamLogo}/>
                                <Text style={styles.team}>{ticket.awayTeam}</Text>
                             </View>
                          </View>
                          <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                              <MaterialCommunityIcons color="#e9446a" name="delete-empty" size={26} />
                             <Button title="Remove" color="#e9446a"  onPress={() => {deleteTicket(ticket)}}  />
                          </View>
                      
                      </View>
                  ))}
              </ScrollView>    
            ):(
                <Text></Text>
            )}
            <View style={{justifyContent:'center', alignItems:'center'}}>
                {tickets.length <=0 ? (
                
                    <Text style={{fontSize:17}}>No history</Text>
                ):(
                    <Text></Text>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
        
    },
    card:{
        width: winScreen/1.1 ,
        height: 160,
        borderRadius: 10,
        backgroundColor: 'white',
        marginVertical: 20,
        shadowColor: theme.COLORS.DEFAULT,
        shadowOffset: { x: 0, y: 1 },
        shadowOpacity: 0.2,
        elevation: 3,
        marginLeft:15 
    },
    logo:{
        height:40,
        width:40
    },
    venueName: {
        fontSize: 15,
        fontFamily:  'TTCommons-BoldItalic',
      },
      time: {
        fontSize: 15,
        fontFamily: 'AirbnbCereal-Book',
      },
      team:{
        fontFamily: 'AirbnbCereal-Bold',
        color: theme.COLORS.HEADER,
      }
})

export default TicketHistory;