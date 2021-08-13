import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppleActivity from './src/AppleActivity';
import Rings from './src/rings';

export default function App() {
  return (
    <View style={styles.container}>
<View style={{flex:1/4,justifyContent:"center",alignItems:"center",marginVertical:100}}>
<Rings/>

   </View>
   <View style={{flex:1/2,marginVertical:10}}>

      <AppleActivity/>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
   
  },
});
