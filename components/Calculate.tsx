import React, { useState } from 'react';
import { StyleSheet, TextInput, Button, ScrollView } from 'react-native';

import { Text, View } from './Themed';

export default function Calculate(props) {

  //first we need to convert strings to numbers for calculations
  // const met1 = Number(formData.metric1)
  // const met2 = Number(formData.metric2)
  // const met3 = Number(formData.metric3)
  // const met4 = Number(formData.metric4)

  // const amt1 = Number(formData.amount1)
  // const amt2 = Number(formData.amount2)
  // const amt3 = Number(formData.amount3)
  // const amt4 = Number(formData.amount4)

  // const tipTotal = amt1 + amt2 + amt3 + amt4

console.log('props', props)
  return (
    <Text>
      {/* {formData.metric1}
      {tipTotal} */}
    </Text>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },


});
