import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Schools from './scenes/schools';
import SchoolsSat from './scenes/schoolsSat';

const queryClient = new QueryClient()
const Stack = createStackNavigator();
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Schools">
          <Stack.Screen name="Schools" component={Schools} options={{ title: 'Schools' }} />
          <Stack.Screen name="SchoolsSat" component={SchoolsSat} options={{ title: 'Schools Sat' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}

