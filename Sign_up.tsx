import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const Sign_up = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [referral, setReferral] = useState('');

  const handleSubmit = () => {
    navigation.replace('MainApp'); // masuk langsung ke tab navigator
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.backText}>← Buat Akun</Text>

      <Text style={styles.step}>Langkah 1 dari 7</Text>
      <Text style={styles.title}>Ayo buat akun kamu</Text>
      <Text style={styles.subText}>Masukkan alamat email dan nomor ponsel kamu yang aktif.</Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      
      <View style={styles.phoneInputWrapper}>
        <Text style={styles.flag}>🇮🇩</Text>
        <Text style={styles.code}>62</Text>
        <TextInput
          placeholder="Nomor ponsel"
          value={phone}
          onChangeText={setPhone}
          style={styles.phoneInput}
          keyboardType="phone-pad"
        />
      </View>

      <TextInput
        placeholder="Kode promo/referral (opsional)"
        value={referral}
        onChangeText={setReferral}
        style={styles.input}
      />

      <Text style={styles.privacyText}>
        Dengan melanjutkan, saya setuju bahwa Bank Jago dapat menggunakan data pribadi saya sesuai
        dengan Kebijakan Privasi di bawah.
      </Text>

      <Text style={styles.privacyLink}>Kebijakan Privasi</Text>

      <TouchableOpacity
        onPress={handleSubmit}
        style={[styles.button, !(email && phone) && { backgroundColor: '#ccc' }]}
        disabled={!(email && phone)}
      >
        <Text style={styles.buttonText}>Lanjut</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Sign_up;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFB200',
    padding: 20,
  },
  backText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  step: {
    marginTop: 20,
    color: '#333',
    fontSize: 14,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
  },
  subText: {
    fontSize: 16,
    marginTop: 5,
    color: '#333',
  },
  input: {
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 10,
    marginTop: 20,
  },
  phoneInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 20,
    paddingHorizontal: 10,
  },
  flag: {
    fontSize: 18,
  },
  code: {
    marginLeft: 5,
    marginRight: 10,
    fontSize: 16,
  },
  phoneInput: {
    flex: 1,
    padding: 14,
  },
  privacyText: {
    fontSize: 14,
    marginTop: 20,
    color: '#333',
  },
  privacyLink: {
    fontSize: 14,
    marginTop: 5,
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
  button: {
    marginTop: 30,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#aaa',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
