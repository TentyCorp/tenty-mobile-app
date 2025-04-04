// App.js para definir la lógica y estructura de tu aplicación.

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AnimTab1 from './src/bottomTab/BottomNavigation.Bar'; // Asegúrate de que la ruta sea correcta

export default function App() {
  return (
    <NavigationContainer>
      <AnimTab1 />
    </NavigationContainer>
  );
}



