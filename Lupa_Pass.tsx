import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Lupa_Pass = () => {
  const navigation = useNavigation();
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [nik, setNik] = useState('');

  const handleSubmit = () => {
    // Aksi lanjutan bisa ditambahkan di sini
    navigation.replace('MainApp');
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Lupa Password</Text>
      </View>

      {/* Title */}
      <Text style={styles.title}>Atur ulang password</Text>
      <Text style={styles.subtitle}>
        Masukkan alamat email/nomor ponsel dan NIK kamu untuk lanjut.
      </Text>

      {/* Input */}
      <View style={styles.inputBox}>
        <Ionicons name="person-outline" size={20} color="#888" style={styles.inputIcon} />
        <TextInput
          placeholder="Email atau nomor ponsel"
          placeholderTextColor="#999"
          style={styles.input}
          value={emailOrPhone}
          onChangeText={setEmailOrPhone}
        />
      </View>

      <View style={styles.inputBox}>
        <Ionicons name="card-outline" size={20} color="#888" style={styles.inputIcon} />
        <TextInput
          placeholder="NIK"
          placeholderTextColor="#999"
          style={styles.input}
          value={nik}
          onChangeText={setNik}
        />
      </View>

      {/* Submit */}
      <TouchableOpacity style={styles.button} onPress={handleSubmit} disabled={!emailOrPhone || !nik}>
        <Text style={[styles.buttonText, (!emailOrPhone || !nik) && { color: '#aaa' }]}>
          Lanjut
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Lupa_Pass;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#444',
    marginTop: 8,
    marginBottom: 20,
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    paddingHorizontal: 12,
    marginBottom: 15,
  },
  inputIcon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    height: 50,
    color: '#000',
  },
  button: {
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#ccc',
    fontWeight: 'bold',
  },
});
