import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import AppNavigator from './Main';

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <AppNavigator />
      </View>
    );
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Ionicons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free to
      // remove this if you are not using it in your app
      'Inter-Italic': require('./assets/fonts/Inter-Italic.otf'),
      'TTCommons-Regular':require('./assets/fonts/TTCommons-Regular.ttf'),
      'TTCommons-BoldItalic':require('./assets/fonts/TTCommons-BoldItalic.ttf'),
      'TTCommons-Bold':require('./assets/fonts/TTCommons-Bold.ttf'),
      'AirbnbCereal-Black':require('./assets/fonts/AirbnbCereal-Black.ttf'),
      'AirbnbCereal-Medium':require('./assets/fonts/AirbnbCereal-Medium.ttf'),
      'AirbnbCereal-Book':require('./assets/fonts/AirbnbCereal-Book.ttf'),
      'AirbnbCereal-Bold':require('./assets/fonts/AirbnbCereal-Bold.ttf'),
    }),
  ]);
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
