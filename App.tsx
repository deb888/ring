import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppleActivity from './src/AppleActivity';

export default function App() {
  return (
    <View style={styles.container}>
      <AppleActivity/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
   
  },
});
