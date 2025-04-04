import React, { useState } from 'react';
import { View, Image } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Lógica de autenticación
    navigation.navigate('Home');
  };

  return (
    <View className="flex-1 items-center justify-center bg-white p-4">
      {/* Logo */}
      <Image
        source={require('../../assets/tenty-logo.png')} // Ajusta la ruta a tu logo
        className="w-32 h-32 mb-6"
        resizeMode="contain"
      />

      {/* Título */}
      <Text variant="headlineLarge" className="mb-6">
        Iniciar Sesión
      </Text>

      {/* Campos de entrada */}
      <TextInput
        label="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        mode="outlined"
        className="w-full mb-4"
      />
      <TextInput
        label="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        mode="outlined"
        className="w-full mb-4"
      />

      {/* Botón de login */}
      <Button
        mode="contained"
        onPress={handleLogin}
        className="w-full bg-blue-500"
        contentStyle={{ paddingVertical: 8 }}
      >
        Ingresar
      </Button>

      <StatusBar style="auto" />
    </View>
  );
}
