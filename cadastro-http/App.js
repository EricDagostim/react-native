import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import MenuScreen from './MenuScreen';
import CadastroScreen from './CadastroScreen';
import ListagemScreen from './ListagemScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
        <Stack.Screen name="Listagem" component={ListagemScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;