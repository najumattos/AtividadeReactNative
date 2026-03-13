import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons'; // Biblioteca de ícones

// Navegação
import HomeScreen                  from "./screens/HomeScreen";
import SimuladorPedagioScreen      from './screens/SimuladorPedagioScreen';
import SimuladorCobrancaLuzScreen  from './screens/SimuladorCobrancaLuzScreen';
import CalculadoraSalarioScreen    from './screens/CalculadoraSalarioScreen';
import TabuleiroXadrezScreen       from './screens/TabuleiroXadrezScreen';
import CalculadoraIMCScreen        from './screens/CalculadoraIMCScreen';
import ModeloScreen                from './screens/ModeloScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator 
        initialRouteName='Home'
        screenOptions={{
          // Estilo do Header (Barra superior)
          headerStyle: {
            backgroundColor: '#221927',
            elevation: 0, // Remove sombra no Android
            shadowOpacity: 0, // Remove sombra no iOS
          },
          headerTintColor: '#ccc1db', // Cor do ícone de menu e título
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          // Estilo do Menu Lateral (Drawer)
          drawerStyle: {
            backgroundColor: '#221927',
            width: 280,
          },
          drawerActiveBackgroundColor: '#552b91',
          drawerActiveTintColor: '#ffffff',
          drawerInactiveTintColor: '#aaa',
          drawerLabelStyle: {
            marginLeft: -10, // Ajusta o texto mais perto do ícone
            fontSize: 16,
          },
        }}
      >
        <Drawer.Screen 
          name='Home' 
          component={HomeScreen} 
          options={{
            title: 'Home',
            drawerIcon: ({ color, size }) => (
              <Ionicons name="person-outline" size={size} color={color} />
            )
          }}
        />

        <Drawer.Screen 
          name='Calculadora Salário' 
          component={CalculadoraSalarioScreen} 
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="cash-outline" size={size} color={color} />
            )
          }}
        />

        <Drawer.Screen 
          name='Simulador Pedágio' 
          component={SimuladorPedagioScreen} 
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="car-outline" size={size} color={color} />
            )
          }}
        />

        <Drawer.Screen 
          name='Simulador Cobranca de Luz' 
          component={SimuladorCobrancaLuzScreen} 
          options={{
            title: 'Simulador Cobrança de Luz',
            drawerIcon: ({ color, size }) => (
              <Ionicons name="flash-outline" size={size} color={color} />
            )
          }}
        />

        <Drawer.Screen 
          name='Tabuleiro de Xadrez' 
          component={TabuleiroXadrezScreen} 
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="grid-outline" size={size} color={color} />
            )
          }}
        />

        <Drawer.Screen 
          name='Calculadora IMC' 
          component={CalculadoraIMCScreen} 
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="fitness-outline" size={size} color={color} />
            )
          }}
        />
          <Drawer.Screen 
          name='Modelo Atividade' 
          component={ModeloScreen} 
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="fitness-outline" size={size} color={color} />
            )
          }}
        />

      </Drawer.Navigator>
    </NavigationContainer>
  );
}