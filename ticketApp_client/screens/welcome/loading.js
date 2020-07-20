import React,{useEffect} from 'react';
import { Text, View, ActivityIndicator, AsyncStorage} from 'react-native';

const Loading = (props) => {

    // useEffect( async() => {
    //     const token = await AsyncStorage.getItem('token');
    //     props.navigation.navigate(token ? "MainApp": "AuthStack")
    //   },[])
    return(
        <View style={{flex:1,justifyContent:'center', alignItems:'center'}}>
            <Text style={{ color:'#e9446a', fontWeight:'bold', fontSize:50, fontFamily:'AirbnbCereal-Black',}}>Ticket Pouch</Text>
            <ActivityIndicator color="black" />
        </View>
    );
};

export default Loading;