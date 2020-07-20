import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import theme from '../../utils/theme';

const { width, height } = Dimensions.get('screen');

const ResetPassword = ({navigation}) => {
    return(
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{
                width: 32,
                height: 32,
                borderRadius: 16,
                backgroundColor: 'rgba(21,22,48,0.1)',
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: 20,
        }}>
        <Ionicons name="ios-arrow-round-back" size={32} color="#e9446a" />
      </TouchableOpacity>
            <Text style={styles.greeting}>
                Reset Password
            </Text>
            <Text style={styles.resetText}>To reset your password, enter the E-mail address you used to create
                your account
            </Text>
            <View style={styles.form}>
        {/* Email Address */}
        <View>
          <Text style={styles.inputTitle}>Email Address</Text>
          <TextInput style={styles.input} autoCapitalize="none" />
        </View>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={{ fontWeight: 'bold', color: '#fff' }}>Reset Password</Text>
      </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.COLORS.SECONDARY,
      paddingTop:Constants.statusBarHeight + 30
    },
    greeting: {
      marginTop: 25,
      fontSize: 18,
      fontWeight: '500',
      textAlign: 'center',
      fontFamily:'AirbnbCereal-Medium'
    },
    resetText:{
        margin: 32,
        fontSize: 15,
        fontWeight: '500',
        textAlign: 'center',
        color: theme.COLORS.ERROR,
    },
    form: {
        marginBottom: 38,
        marginHorizontal: 30,
        marginTop: 70,
      },
      inputTitle: {
        color: '#8a8f9e',
        fontSize: 13,
        textTransform: 'uppercase',
        fontFamily:'AirbnbCereal-Medium'
      },
      input: {
        borderBottomColor: '#8a8f9e',
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: height / 20,
        fontSize: 15,
        color: '#161f3d',
      },
      button: {
        marginHorizontal: 30,
        marginTop: 32,
        backgroundColor: '#e9446a',
        borderRadius: 4,
        height: height/17,
        alignItems: 'center',
        justifyContent: 'center',
      },
})    

export default ResetPassword;