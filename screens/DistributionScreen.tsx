import * as React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationState, useNavigationState } from '@react-navigation/native';

import Calculate from '../components/Calculate';
import { Text, View } from '../components/Themed';

export default function DistributionScreen() {
  const state = useNavigationState
  console.log('first pass', state)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Distribution</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Calculate />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
