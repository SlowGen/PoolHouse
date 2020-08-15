import React, { useState } from 'react';
import { StyleSheet, TextInput, Button, ScrollView } from 'react-native';
import { useForm, Controller } from 'react-hook-form'
import { useNavigation } from '@react-navigation/native';

// import Colors from '../constants/Colors';
// import { MonoText } from './StyledText';
import { Text, View } from './Themed';
import { FormInputs } from '../types'
import DistributionScreen from '../screens/DistributionScreen';

export default function EnterTipsForm() {

  const [ server1, setServer1 ] = useState('')
  const [ server2, setServer2 ] = useState('')
  const [ server3, setServer3 ] = useState('')
  const [ server4, setServer4 ] = useState('')
  const [ metric1, setMetric1 ] = useState('')
  const [ metric2, setMetric2 ] = useState('')
  const [ metric3, setMetric3 ] = useState('')
  const [ metric4, setMetric4 ] = useState('')
  const [ amount1, setAmount1 ] = useState('')
  const [ amount2, setAmount2 ] = useState('')
  const [ amount3, setAmount3 ] = useState('')
  const [ amount4, setAmount4 ] = useState('')

  const formData = {
    server1: server1,
    server2: server2,
    server3: server3,
    server4: server4,
    metric1: metric1,
    metric2: metric2,
    metric3: metric3,
    metric4: metric4,
    amount1: amount1,
    amount2: amount2,
    amount3: amount3,
    amount4: amount4
  }

  const { control, handleSubmit, errors } = useForm<FormInputs>();
  const navigation = useNavigation()
  const onSubmit = (data: FormInputs) => {
    console.log('data', data)
    console.log('formdata', formData)
    navigation.navigate('Distribution')
  };

  return (
    //for now we are hardcoding 4 servers in, will change to a dynamic form that accomodates user-selected number of servers (when we learn how to do that)

    <ScrollView>
        <View>
          <Text>Server Name:</Text>
          <Controller
            control={control}
            render={({ onChange, onBlur, value }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={value => {
                setServer1(value)
                onChange(value)
              }}
              value={value}
            />
            )}
            name="name1"
            rules={{ required: false }}
            defaultValue="server1"
          />
          <Text>Metric:</Text>
          <Controller
            control={control}
            render={({ onChange, onBlur, value }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={value => {
                setMetric1(value)
                onChange(value)
              }}
              value={value}
            />
            )}
            name="metric1"
            rules={{ required: true }}
            defaultValue="1"
          />
          {errors.metric1 && <Text>This is required. If server is to receive no cut, enter '0'</Text>}
          <Text>Amount Contributed:</Text>
          <Controller
            control={control}
            render={({ onChange, onBlur, value }) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => {
                  setAmount1(value)
                  onChange(value)
                }}
                value={value}
              />
            )}
            name="amount1"
            rules={{ required: true }}
            defaultValue="0"
          />
          {errors.amount1 && <Text>This is required. If server contribution is zero, enter '0'</Text>}
        </View>
        <View>
          <Text>Server Name:</Text>
          <Controller
            control={control}
            render={({ onChange, onBlur, value }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={value => {
                setServer2(value)
                onChange(value)
              }}
              value={value}
            />
            )}
            name="name2"
            rules={{ required: false }}
            defaultValue="server2"
          />
          <Text>Metric:</Text>
          <Controller
            control={control}
            render={({ onChange, onBlur, value }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={value => {
                setMetric2(value)
                onChange(value)
              }}
              value={value}
            />
            )}
            name="metric2"
            rules={{ required: true }}
            defaultValue="1"
          />
          {errors.metric2 && <Text>This is required. If server is to receive no cut, enter '0'</Text>}
          <Text>Amount Contributed:</Text>
          <Controller
            control={control}
            render={({ onChange, onBlur, value }) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => {
                  setAmount2(value)
                  onChange(value)
                }}
                value={value}
              />
            )}
            name="amount2"
            rules={{ required: true }}
            defaultValue="0"
          />
          {errors.amount2 && <Text>This is required. If server contribution is zero, enter '0'</Text>}
        </View>
        <View>
          <Text>Server Name:</Text>
          <Controller
            control={control}
            render={({ onChange, onBlur, value }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={value => {
                setServer3(value)
                onChange(value)
              }}
              value={value}
            />
            )}
            name="name3"
            rules={{ required: false }}
            defaultValue="server3"
          />
          <Text>Metric:</Text>
          <Controller
            control={control}
            render={({ onChange, onBlur, value }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={value => {
                setMetric3(value)
                onChange(value)
              }}
              value={value}
            />
            )}
            name="metric3"
            rules={{ required: true }}
            defaultValue="1"
          />
          {errors.metric3 && <Text>This is required. If server is to receive no cut, enter '0'</Text>}
          <Text>Amount Contributed:</Text>
          <Controller
            control={control}
            render={({ onChange, onBlur, value }) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => {
                  setAmount3(value)
                  onChange(value)
                }}
                value={value}
              />
            )}
            name="amount3"
            rules={{ required: true }}
            defaultValue="0"
          />
          {errors.amount3 && <Text>This is required. If server contribution is zero, enter '0'</Text>}
        </View>
        <View>
          <Text>Server Name:</Text>
          <Controller
            control={control}
            render={({ onChange, onBlur, value }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={value => {
                setServer4(value)
                onChange(value)
              }}
              value={value}
            />
            )}
            name="name4"
            rules={{ required: false }}
            defaultValue="server4"
          />
          <Text>Metric:</Text>
          <Controller
            control={control}
            render={({ onChange, onBlur, value }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={value => {
                setMetric4(value)
                onChange(value)
              }}
              value={value}
            />
            )}
            name="metric4"
            rules={{ required: true }}
            defaultValue="1"
          />
          {errors.metric4 && <Text>This is required. If server is to receive no cut, enter '0'</Text>}
          <Text>Amount Contributed:</Text>
          <Controller
            control={control}
            render={({ onChange, onBlur, value }) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => {
                  setAmount4(value)
                  onChange(value)
                }}
                value={value}
              />
            )}
            name="amount4"
            rules={{ required: true }}
            defaultValue="0"
          />
          {errors.amount4 && <Text>This is required. If server contribution is zero, enter '0'</Text>}
        </View>

      <Button title="Calculate" onPress={handleSubmit(onSubmit)} />
    </ScrollView>
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
  input: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
});
