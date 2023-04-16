import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import COLORS from './src/consts/colors';
import OnboardScreen from './src/view/screens/OnBoardScreen';
import BottomNavigator from './src/view/navigation/BottomNavigator';
import DetailsScreen from './src/view/screens/DetailScreen';
type StackParamList = {
  Board: undefined,
  Home: any,
  Details: {food: any},
}

const Stack = createNativeStackNavigator<StackParamList>();

const App = (): JSX.Element => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen component={OnboardScreen} name="Board" />
        <Stack.Screen component={BottomNavigator} name="Home" />
        <Stack.Screen component={DetailsScreen} name="Details" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
