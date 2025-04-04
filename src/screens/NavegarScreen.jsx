import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Pressbutton from '../Components/button'; // Asegúrate de que la ruta sea correcta

const NavegarScreen = () => {
  const handlePress = () => {
    console.log('¡Presionaste el botón!');
  };

  return (
    <View style={styles.container} backgroundColor="#32CD32">
      <Text style={styles.header} >Navegation Screen</Text>
 <Text style={styles.message}>Generic Screen Insert Text </Text>
          </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
});

export default NavegarScreen;
