import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Log_in from './Log_in';
import Beranda from './Beranda';
import Kantong from './Kantong';
import Sign_up from './Sign_up';
import Lupa_Pass from './Lupa_Pass';
import Transaksi from './Transaksi';
import Kartu from './kartu';
import Lainnya from './Lainnya';
import Pengaturan from './Pengaturan';
import Level_Akun from './Level_Akun';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Tab bar kamu
function BottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Beranda"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#FDB813',
        tabBarInactiveTintColor: '#999',
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 0.5,
          height: 60,
          paddingBottom: 5,
          paddingTop: 5,
        },
        tabBarLabelStyle: {
          fontSize: 12,
        }
      }}
    >
      <Tab.Screen
        name="Beranda"
        component={Beranda}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home-outline" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Kantong"
        component={Kantong}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="wallet-outline" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Transaksi"
        component={Transaksi}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="swap-horizontal" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Kartu"
        component={Kartu}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="credit-card-outline" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Lainnya"
        component={Lainnya}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="dots-horizontal" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

// Final App dengan Login screen duluan
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Log_in} />
        <Stack.Screen name="SignUp" component={Sign_up} />
        <Stack.Screen name="Lupa_Pass" component={Lupa_Pass} />
        <Stack.Screen name="MainApp" component={BottomTabs} />
        <Stack.Screen name="Lainnya" component={Lainnya} />
        <Stack.Screen name="Pengaturan" component={Pengaturan} />
        <Stack.Screen name="Level_Akun" component={Level_Akun} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
