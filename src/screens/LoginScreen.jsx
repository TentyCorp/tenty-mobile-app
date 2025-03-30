import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text variant="headlineLarge" style={styles.title}>Login</Text>
      <TextInput
        label="Email"
        style={styles.input}
        keyboardType="email-address"
      />
      <TextInput
        label="Contraseña"
        style={styles.input}
        secureTextEntry
      />
      <Button mode="contained" onPress={() => navigation.navigate('Home')}>
        Ingresar
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  title: {
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    marginBottom: 10,
  },
});

export default LoginScreen;
