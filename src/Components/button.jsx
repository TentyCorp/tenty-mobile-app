// archivo de botón
// Este archivo define un componente de botón reutilizable para una aplicación React Native.



import React from 'react';
import { Button } from 'react-native';
// Import the Button component from React Native
// This component is used to create a button that can be pressed by the user.


// Define the Presbutton component using React.FC and the defined prop types
export default function Pressbutton({ title, onPress }) {
  // This is a functional component that returns a button with an onPress event handler.
  return (
    <Button
      title={title}
      onPress={onPress}
// Ejemplo de personalización
    />
);
}


// Define styles for the button using a JavaScript object
// This is a simple style object that can be used to customize the button's appearance.
const style = {
  backgroundColor: 'blue', // Color de fondo del botón
  color: 'white', // Color del texto del botón
  padding: 10, // Espaciado interno del botón
  borderRadius: 5, // Bordes redondeados del botón
  borderWidth: 1, // Ancho del borde del botón
  borderColor: 'blue', // Color del borde del botón
  margin: 10, // Margen alrededor del botón
  };

