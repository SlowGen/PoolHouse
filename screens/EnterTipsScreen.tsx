import * as React from 'react';
import { StyleSheet } from 'react-native';
import EnterTipsForm from '../components/EnterTipsForm';
import { Text, View } from '../components/Themed';

export default function EnterTips() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Tips</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EnterTipsForm />
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
