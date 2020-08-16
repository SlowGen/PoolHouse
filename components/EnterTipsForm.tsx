import React, { useState } from 'react';
import { StyleSheet, TextInput, Button, ScrollView } from 'react-native';
import { useForm, Controller } from 'react-hook-form'

import { totalTips, totalMetric, amtPerMet } from '../constants/helpers'
import { Text, View } from './Themed';
import { FormInputs } from '../types'

export default function EnterTipsForm() {

  const [ server1, setServer1 ] = useState('server1')
  const [ server2, setServer2 ] = useState('server2')
  const [ server3, setServer3 ] = useState('server3')
  const [ server4, setServer4 ] = useState('server4')
  const [ metric1, setMetric1 ] = useState('1')
  const [ metric2, setMetric2 ] = useState('1')
  const [ metric3, setMetric3 ] = useState('1')
  const [ metric4, setMetric4 ] = useState('1')
  const [ amount1, setAmount1 ] = useState('0')
  const [ amount2, setAmount2 ] = useState('0')
  const [ amount3, setAmount3 ] = useState('0')
  const [ amount4, setAmount4 ] = useState('0')
  const [ tipOut, setTipOut ] = useState('25')

  const a1 = Number(amount1)
  const a2 = Number(amount2)
  const a3 = Number(amount3)
  const a4 = Number(amount4)

  const m1 = Number(metric1)
  const m2 = Number(metric2)
  const m3 = Number(metric3)
  const m4 = Number(metric4)

  const tipOutPct = Number(tipOut)


  let tipTotal = totalTips(a1, a2, a3, a4, tipOutPct)
  let metTotal = totalMetric(m1, m2, m3, m4)
  let dollarsPerMetric = amtPerMet(tipTotal, metTotal)

  let s1 = Math.floor(m1 * dollarsPerMetric) / 100
  let s2 = Math.floor(m2 * dollarsPerMetric) / 100
  let s3 = Math.floor(m3 * dollarsPerMetric) / 100
  let s4 = Math.floor(m4 * dollarsPerMetric) / 100
  let toT = Math.floor((tipOutPct * tipTotal / 100) / 100)


  const { control, handleSubmit, errors } = useForm<FormInputs>();
  const onSubmit = (data: FormInputs) => {
    console.log('data', data)
  };

  return (
    //for now we are hardcoding 4 servers in, will change to a dynamic form that accomodates user-selected number of servers (when we learn how to do that)

    <ScrollView>
        <View style={styles.container}>
          <Text>Name:
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
          /></Text>
          <Text>Metric:
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
          /></Text>
          {errors.metric1 && <Text>This is required. If server is to receive no cut, enter '0'</Text>}
          <Text>Amount:
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
          /></Text>
          {errors.amount1 && <Text>This is required. If server contribution is zero, enter '0'</Text>}
        </View>
        <View style={styles.container}>
          <Text>Name:
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
          /></Text>
          <Text>Metric:
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
          /></Text>
          {errors.metric2 && <Text>This is required. If server is to receive no cut, enter '0'</Text>}
          <Text>Amount:
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
          /></Text>
          {errors.amount2 && <Text>This is required. If server contribution is zero, enter '0'</Text>}
        </View>
        <View style={styles.container}>
          <Text>Name:
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
          /></Text>
          <Text>Metric:
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
          /></Text>
          {errors.metric3 && <Text>This is required. If server is to receive no cut, enter '0'</Text>}
          <Text>Amount:
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
          /></Text>
          {errors.amount3 && <Text>This is required. If server contribution is zero, enter '0'</Text>}
        </View>
        <View style={styles.container}>
          <Text>Name:
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
          /></Text>
          <Text>Metric:
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
          /></Text>
          {errors.metric4 && <Text>This is required. If server is to receive no cut, enter '0'</Text>}
          <Text>Amount:
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
          /></Text>
          {errors.amount4 && <Text>This is required. If server contribution is zero, enter '0'</Text>}
        </View>
        <View style={styles.container}>
        <Text>Tipout:
          <Controller
            control={control}
            render={({ onChange, onBlur, value }) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => {
                  setTipOut(value)
                  onChange(value)
                }}
                value={value}
              />
            )}
            name="tipOut"
            rules={{ required: true }}
            defaultValue="25"
          />%</Text>
          {errors.amount4 && <Text>This is required. If tip out is zero, enter '0'</Text>}
        </View>
      <View>
        <Text>Your current (rounded) total tips are ${Math.floor((tipTotal / 100) + toT)}</Text>
        <Text>***</Text>
        <Text>Live totals below.</Text>
      </View>
      <View style={styles.container}>
        <Text>{server1} gets: ${s1}</Text>
        <Text>{server2} gets: ${s2}</Text>
        <Text>{server3} gets: ${s3}</Text>
        <Text>{server4} gets: ${s4}</Text>
        <Text>Tip out Total: ${toT}</Text>
        <Text>***</Text>
        <Text>Current (rounded) distribution total is: ${Math.floor(s1+s2+s3+s4+toT)}</Text>
      </View>


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
    width: 75

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
