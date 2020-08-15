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
    <View>
      <form onSubmit={handleSubmit(onSubmit)}>
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
        name="name"
        rules={{ required: false }}
        defaultValue="server"
      />
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
        name="metric"
        rules={{ required: true, min: 0 }}
        defaultValue="1"
      />
      {errors.metric && <Text>This is required. If server is to receive no cut, enter '0'</Text>}
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
        name="amount"
        rules={{ required: true }}
        defaultValue="0"
      />
      {errors.amount && <Text>This is required. If server contribution is zero, enter '0'</Text>}

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
