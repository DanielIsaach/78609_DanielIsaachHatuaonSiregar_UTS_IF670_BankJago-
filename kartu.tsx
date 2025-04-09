import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Kartu = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kartu</Text>

      <View style={styles.content}>
        <MaterialIcons name="credit-card" size={100} color="#FFA500" style={styles.icon} />
        <Text style={styles.description}>
          Buat kartu debit untuk kemudahan bertransaksi.
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Buat Kartu</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Kartu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFCFC',
    paddingTop: 60,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -40,
  },
  icon: {
    marginBottom: 30,
  },
  description: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#FFA500',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 12,
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
