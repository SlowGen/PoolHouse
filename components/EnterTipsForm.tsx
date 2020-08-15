import React from 'react';
import { StyleSheet, TextInput, Button } from 'react-native';
import { useForm, Controller } from 'react-hook-form'

// import Colors from '../constants/Colors';
// import { MonoText } from './StyledText';
import { Text, View } from './Themed';
import { FormInputs } from '../types'

export default function EnterTipsForm() {
  const { control, handleSubmit, errors } = useForm<FormInputs>();

  const onSubmit = (data: FormInputs) => console.log(data);

  return (
    //for now we are hardcoding 4 servers in, will change to a dynamic form that accomodates user-selected number of servers

    <View>
      <form onSubmit={handleSubmit(onSubmit)}>
        <View>
          <Text>Server Name:</Text>
          <Controller
            control={control}
            render={({ onChange, onBlur, value }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
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
              onChangeText={value => onChange(value)}
              value={value}
            />
            )}
            name="metric1"
            rules={{ required: true, min: 0 }}
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
                onChangeText={value => onChange(value)}
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
              onChangeText={value => onChange(value)}
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
              onChangeText={value => onChange(value)}
              value={value}
            />
            )}
            name="metric2"
            rules={{ required: true, min: 0 }}
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
                onChangeText={value => onChange(value)}
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
              onChangeText={value => onChange(value)}
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
              onChangeText={value => onChange(value)}
              value={value}
            />
            )}
            name="metric3"
            rules={{ required: true, min: 0 }}
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
                onChangeText={value => onChange(value)}
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
              onChangeText={value => onChange(value)}
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
              onChangeText={value => onChange(value)}
              value={value}
            />
            )}
            name="metric4"
            rules={{ required: true, min: 0 }}
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
                onChangeText={value => onChange(value)}
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

      </form>
    </View>
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
