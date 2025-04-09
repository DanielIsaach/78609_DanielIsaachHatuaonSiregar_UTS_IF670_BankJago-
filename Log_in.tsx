import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Log_in = () => {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Untuk sekarang langsung navigasi ke main tabs
    navigation.replace('MainApp');
  };

  const handleGoToSignUp = () => {
    navigation.navigate('SignUp'); // Navigasi ke halaman daftar
  };

  const handleForgotPassword = () => {
    // sementara hanya alert
    navigation.navigate('Lupa_Pass');
  };

  return (
    <View style={styles.container}>
      {/* Header Branding */}
      <View style={styles.logoWrapper}>
        <Text style={styles.logo}>🟡</Text>
      </View>

      {/* Title */}
      <Text style={styles.version}>V 8.62.2 (7003)</Text>
      <Text style={styles.title}>Halo dari</Text>
      <Text style={styles.brand}>🟡 Jago</Text>
      <Text style={styles.subtitle}>
        Semua jadi Jago. Hidup seutuhnya dengan keluarga dan kerabat. Sekarang, Esok, Bersama-sama.
      </Text>

      {/* Form Login */}
      <View style={styles.inputContainer}>
        <View style={styles.inputBox}>
          <Ionicons name="person-circle-outline" size={24} color="#999" style={styles.icon} />
          <TextInput
            placeholder="Email atau nomor ponsel"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            placeholderTextColor="#999"
          />
        </View>

        <View style={styles.inputBox}>
          <Ionicons name="lock-closed-outline" size={24} color="#999" style={styles.icon} />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            style={styles.input}
            placeholderTextColor="#999"
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Ionicons
              name={showPassword ? 'eye-outline' : 'eye-off-outline'}
              size={22}
              color="#999"
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginText}>Log In</Text>
      </TouchableOpacity>

      {/* OR separator */}
      <Text style={{ marginVertical: 10, color: '#444' }}>atau</Text>

      <View style={styles.bottomOptions}>
        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.linkText}>Lupa Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleGoToSignUp}>
          <Text style={styles.createText}>Buat Akun Jago</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Log_in;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    padding: 20,
    justifyContent: 'center',
  },
  logoWrapper: {
    position: 'absolute',
    top: 50,
    left: 20,
  },
  logo: {
    fontSize: 30,
  },
  version: {
    fontSize: 12,
    color: '#999',
    marginBottom: 4,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#222',
  },
  brand: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFB400',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#333',
    marginBottom: 30,
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 14,
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: '#000',
  },
  loginButton: {
    backgroundColor: '#FFB400',
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    elevation: 3,
  },
  loginText: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 16,
  },
  bottomOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
    paddingHorizontal: 12,
  },
  createButton: {
    backgroundColor: '#fff',
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FFB400',
  },
  linkText: {
    color: '#FDB813',
    fontSize: 14,
  },

  createText: {
    color: '#FFB400',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
