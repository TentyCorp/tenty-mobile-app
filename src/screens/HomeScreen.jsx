// Importaciones necesarias
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useEffect, useRef } from 'react';
import { SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import Icon, { Icons } from '../Components/Icon'; // Componente personalizado para íconos
import Colors from '../constants/Colors'; // Archivo de colores personalizados
import ColorScreen from './ColorScreen'; // Pantalla de ejemplo
import * as Animatable from 'react-native-animatable'; // Biblioteca para animaciones

// Array de pestañas con configuraciones
const TabArr = [
  {
    route: 'Home',
    label: 'Home',
    type: Icons.Ionicons,
    activeIcon: 'grid',
    inActiveIcon: 'grid-large',
    component: ColorScreen, // Componente asociado a esta pestaña
  },
  {
    route: 'Like',
    label: 'Like',
    type: Icons.MaterialCommunityIcons,
    activeIcon: 'heart-plus',
    inActiveIcon: 'heart-plus-outline',
    component: ColorScreen,
  },
  {
    route: 'Search',
    label: 'Search',
    type: Icons.MaterialCommunityIcons,
    activeIcon: 'timeline-plus',
    inActiveIcon: 'timeline-plus-outline',
    component: ColorScreen,
  },
  {
    route: 'Account',
    label: 'Account',
    type: Icons.FontAwesome,
    activeIcon: 'user-circle',
    inActiveIcon: 'user-circle-o',
    component: ColorScreen,
  },
];

// Crea el Tab Navigator
const Tab = createBottomTabNavigator();

// Componente personalizado para los botones de las pestañas
const TabButton = ({ item, onPress, accessibilityState }) => {
  // `accessibilityState.selected` indica si la pestaña está seleccionada (activa).
  // Si está seleccionada, `focused` será `true`; de lo contrario, será `false`.
  const focused = accessibilityState.selected;

  // `useRef` se utiliza para crear una referencia a la vista animada (`Animatable.View`).
  // Esto nos permite controlar directamente las animaciones de este componente.
  const viewRef = useRef(null);

  // `useEffect` es un hook que se ejecuta cada vez que cambia el valor de `focused`.
  // Aquí lo usamos para manejar las animaciones cuando una pestaña se selecciona o se deselecciona.
  useEffect(() => {
    if (viewRef.current) {
      if (focused) {
        // Si la pestaña está seleccionada, ejecuta esta animación:
        // - Escala la vista de 0.5x a 1.5x.
        // - Rota la vista 360 grados.
        viewRef.current.animate({
          0: { transform: [{ scaleX: 0.5 }, { scaleY: 0.5 }, { rotate: '0deg' }] },
          1: { transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }, { rotate: '360deg' }] },
        });
      } else {
        // Si la pestaña no está seleccionada, ejecuta esta animación:
        // - Escala la vista de 1.5x a 1x.
        // - Rota la vista de 360 grados a 0 grados.
        viewRef.current.animate({
          0: { transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }, { rotate: '360deg' }] },
          1: { transform: [{ scaleX: 1 }, { scaleY: 1 }, { rotate: '0deg' }] },
        });
      }
    }
  }, [focused]); // El efecto se ejecuta cada vez que cambia el valor de `focused`.

  // Renderiza el botón con animaciones.
  return (
    <TouchableOpacity
      // `onPress` es la función que se ejecuta cuando el usuario presiona el botón.
      onPress={onPress}
      // `activeOpacity` controla la opacidad del botón cuando se presiona.
      activeOpacity={1}
      // `style` aplica estilos al botón. Aquí usamos un estilo base y ajustamos la posición (`top`).
      style={[styles.container, { top: 0 }]}
    >
      {/* `Animatable.View` es un contenedor que permite animaciones. */}
      <Animatable.View ref={viewRef} duration={1000}>
        {/* Componente de ícono dinámico */}
        <Icon
          // `type` especifica la biblioteca de íconos que se usará (por ejemplo, MaterialCommunityIcons).
          type={item.type}
          // `name` selecciona el ícono según si la pestaña está activa o inactiva.
          name={focused ? item.activeIcon : item.inActiveIcon}
          // `color` cambia el color del ícono según si la pestaña está activa o inactiva.
          color={focused ? Colors.primary : Colors.primaryLite}
        />
      </Animatable.View>
    </TouchableOpacity>
  );
};

// Componente principal que renderiza el Tab Navigator
export default function AnimTab1() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false, // Oculta el encabezado superior
          tabBarStyle: {
            height: 60,
            position: 'absolute',
            margin: 16,
            borderRadius: 16,
            justifyContent: 'center',
            alignItems: 'center',
          },
        }}
      >
        {/* Mapea las pestañas definidas en TabArr */}
        {TabArr.map((item, index) => {
          return (
            <Tab.Screen
              key={index}
              name={item.route}
              component={item.component}
              options={{
                tabBarShowLabel: false, // Oculta las etiquetas de las pestañas
                tabBarButton: ({ onPress = () => {}, ...props }) => (
                  <TabButton
                    {...props}
                    item={item}
                    onPress={() => onPress()} // Asegura que onPress sea válido
                  />
                ), // Usa el TabButton personalizado
              }}
            />
          );
        })}
      </Tab.Navigator>
    </SafeAreaView>
  );
}

// Estilos para el TabButton
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
  },
});