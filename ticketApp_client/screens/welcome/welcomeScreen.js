import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const WelcomeScreen = ({ navigation }) => {
    return(
        <View style={{backgroundColor:"#e9446a", flex:1, justifyContent:'center', alignItems:'center'}}>
            <View style={{marginBottom:90,justifyContent:'center', alignItems:'center'}}>
                <Text style={{fontSize:26, fontWeight:'bold', color:'#fff', fontFamily:'AirbnbCereal-Black', textAlign:'center'}}>Welcome to Ticket Pouch</Text>
                <Text style={{fontSize:18, color:'#fff',fontWeight:'600', marginTop:20,fontFamily:'AirbnbCereal-Medium'}}>Store tickets to GPL matches  </Text>
                <Text style={{fontSize:18, color:'#fff',fontWeight:'600',fontFamily:'AirbnbCereal-Medium'}}>in a virtual wallet </Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{width:140, height:50, borderRadius:10, backgroundColor:'#fff', justifyContent:'center',alignItems:'center', borderWidth:0.5}}>
                <Text style={{fontWeight:'600',fontFamily:'AirbnbCereal-Medium'}}>Let's get started</Text>
            </TouchableOpacity>
        </View>
    );
};


export default WelcomeScreen;