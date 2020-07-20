import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons, Entypo, AntDesign } from '@expo/vector-icons';

const Services = ({ navigation }) => {

    React.useLayoutEffect(() => {
         navigation.setOptions({
             headerLeft: () => (
                 <TouchableOpacity onPress={() => navigation.goBack()} style={{ width:32, height:32,borderRadius:16, backgroundColor:"rgba(21,22,48,0.1)", justifyContent:'center',alignItems:'center', marginLeft:20}}>
                    <Ionicons name="ios-arrow-round-back" size={32} color="#fff"  />
                 </TouchableOpacity>
             )
         })
    } )
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Ticket Pouch</Text>
            <View style={styles.contact}>
              <Entypo name="mail" size={25} color="#073068"/>  
              <Text style={{marginLeft:10,marginTop:5, color:"#073068",}}>Send us an email:{" "}
                <Text style={{fontSize:15, fontFamily:'TTCommons-Bold'}}>ticketPouch@gmail.com</Text>
              </Text>
            </View>
            <View style={styles.contact}>
              <Ionicons name="md-call" size={25} color="#073068"/>  
              <Text style={{marginLeft:10,marginTop:5,color:"#073068",}}>Call us now:{" "}
                <Text  style={{fontSize:15, fontFamily:'TTCommons-Bold'}}>+233 (0) 000 000</Text>
              </Text>
            </View>
            <View style={{flexDirection:'row', marginTop:100}}> 
              <Text style={{marginLeft:10,marginTop:5, color:'grey'}}>Copyright{" "}
                <AntDesign name="copyright" size={13} color="grey"/>{" "} 
                 2020 Ticket Pouch. All rights reserved
              </Text>
            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:200,
    },
    logo:{
        width:50,
        height:50,
        borderRadius:25,
        backgroundColor:'#e1e2'
    },
    title:{
        color:'#e9446a',
        fontWeight:'bold',
        fontSize:35,
        fontFamily:'AirbnbCereal-Black',
    },
    contact:{
        flexDirection:'row'
    }
})

export default Services;