import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useEffect, useRef } from 'react';
import { SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import Icon, { Icons } from '../Components/Icon'; // Renombrar si es necesario
import Colors from '../constants/Colors';
import * as Animatable from 'react-native-animatable';
import ChatScreen from '../screens/ChatScreen';
import NavegarScreen from '../screens/NavegarScreen';
import InteraccionScreen from '../screens/InteraccionScreen';
import ProfileScreen from '../screens/ProfileScreen';

// Array de pestañas con configuraciones
const TabArr = [
  {
    route: 'Navegar',
    label: 'Navegar',
    type: Icons.MaterialCommunityIcons,
    activeIcon: 'grid',
    inActiveIcon: 'grid',
    component: NavegarScreen,
  },
  {
    route: 'Interaccion',
    label: 'Interaccion',
    type: Icons.MaterialCommunityIcons,
    activeIcon: 'heart-plus',
    inActiveIcon: 'heart-plus-outline',
    component: InteraccionScreen,
  },
  {
    route: 'Chat',
    label: 'Chat',
    type: Icons.MaterialCommunityIcons,
    activeIcon: 'timeline-plus',
    inActiveIcon: 'timeline-plus-outline',
    component: ChatScreen,
  },
  {
    route: 'Account',
    label: 'Account',
    type: Icons.FontAwesome,
    activeIcon: 'user-circle',
    inActiveIcon: 'user-circle-o',
    component: ProfileScreen,
  },
];

// Crea el Tab Navigator
const Tab = createBottomTabNavigator();

// Componente personalizado para los botones de las pestañas
const TabButton = ({ item, onPress, accessibilityState }) => {
  const focused = accessibilityState.selected; // Determina si la pestaña está seleccionada
  const viewRef = useRef(null); // Referencia para animaciones

  // Efecto para manejar las animaciones al enfocar/desenfocar
  useEffect(() => {
    if (viewRef.current) {
      if (focused) {
        viewRef.current.animate({
          0: { scale: 0.5, rotate: '0deg' },
          1: { scale: 1.5, rotate: '360deg' },
        });
      } else {
        viewRef.current.animate({
          0: { scale: 1.5, rotate: '360deg' },
          1: { scale: 1, rotate: '0deg' },
        });
      }
    }
  }, [focused]);

  // Función para manejar el evento onPress con animación
  const handlePress = () => {
    if (viewRef.current) {
      // Animación de rebote al presionar
      viewRef.current.animate({
        0: { scale: 1 },
        0.5: { scale: 1.2 },
        1: { scale: 1 },
      });
    }
    onPress(); // Llama a la función onPress original
  };

  // Renderiza el botón con animaciones
  return (
    <TouchableOpacity
      onPress={handlePress} // Usa la función handlePress para agregar animación
      activeOpacity={1}
      style={[styles.container, { top: 0 }]}
    >
      <Animatable.View ref={viewRef} duration={1000}>
        <Icon
          type={item.type}
          name={focused ? item.activeIcon : item.inActiveIcon}
          color={focused ? Colors.primary : Colors.primaryLite}
        />
      </Animatable.View>
    </TouchableOpacity>
  );
};

// Componente principal que renderiza el Tab Navigator
const AnimTab1 = () => {
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
        {TabArr.map((item, index) => (
          <Tab.Screen
            key={index}
            name={item.route}
            component={item.component}
            options={{
              tabBarShowLabel: false, // Oculta las etiquetas de las pestañas
              tabBarButton: (props) => (
                <TabButton
                  {...props}
                  item={item}
                  onPress={() => props.onPress?.()} // Asegura que onPress sea válido
                />
              ), // Usa el TabButton personalizado
            }}
          />
        ))}
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default AnimTab1;

// Estilos para el TabButton
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
  },
});