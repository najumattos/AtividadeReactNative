import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import CarroScreen from './screens/CarroScreen';
import DescontoScreen from './screens/DescontoScreen';

const Stack = createStackNavigator()

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen}  />
        <Stack.Screen name='Carro' component={CarroScreen} />
        <Stack.Screen name='Desconto' component={DescontoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}