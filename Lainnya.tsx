import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const Lainnya = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Lainnya</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Pengaturan')}>
          <Ionicons name="settings-outline" size={24} />
        </TouchableOpacity>
      </View>

      {/* Level Akun Section */}
      <TouchableOpacity
        style={styles.levelContainer}
        onPress={() => navigation.navigate('Level_Akun')}
      >
        <View style={styles.levelTextContainer}>
          <Text style={styles.levelTitle}>Silver Jagoan</Text>
          <Text style={styles.levelSubtitle}>Level akun kamu saat ini</Text>
        </View>
        <Ionicons name="chevron-forward" size={20} color="#999" />
      </TouchableOpacity>

      {/* Konten menu lainnya bisa ditambahkan di bawah */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  levelContainer: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 2,
  },
  levelTextContainer: {
    flexDirection: 'column',
  },
  levelTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  levelSubtitle: {
    fontSize: 13,
    color: '#666',
  },
});

export default Lainnya;
