import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Switch } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Pengaturan = () => {
  const [isFingerprintEnabled, setIsFingerprintEnabled] = useState(true);

  const renderItem = (icon: JSX.Element, label: string, subtitle?: string, rightContent?: JSX.Element) => (
    <TouchableOpacity style={styles.item}>
      <View style={styles.itemLeft}>
        {icon}
        <View style={{ marginLeft: 12 }}>
          <Text style={styles.label}>{label}</Text>
          {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
        </View>
      </View>
      {rightContent || <Icon name="chevron-right" size={22} color="#999" />}
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} />
        <Text style={styles.headerTitle}>Pengaturan</Text>
      </View>

      {/* NOTIFIKASI */}
      <Text style={styles.sectionTitle}>NOTIFIKASI</Text>
      {renderItem(<Icon name="bell" size={22} />, 'Pengaturan notifikasi')}

      {/* KEAMANAN */}
      <Text style={styles.sectionTitle}>KEAMANAN</Text>
      {renderItem(<MaterialIcons name="form-textbox-password" size={22} />, 'Ubah PIN')}
      {renderItem(
        <MaterialIcons name="fingerprint" size={22} />,
        'Sidik Jari',
        undefined,
        <Switch
          value={isFingerprintEnabled}
          onValueChange={setIsFingerprintEnabled}
          trackColor={{ false: '#ccc', true: '#FFB300' }}
          thumbColor="#fff"
        />
      )}
      {renderItem(<Icon name="lock" size={22} />, 'Ubah password')}
      {renderItem(<Icon name="unlock" size={22} />, 'Lupa password')}
      {renderItem(<MaterialIcons name="sync-circle" size={22} />, 'Autentikasi transaksi', 'Rp2.000.000')}

      {/* OPSIONAL */}
      <Text style={styles.sectionTitle}>OPSIONAL</Text>
      {renderItem(<MaterialIcons name="cash-fast" size={22} />, 'Pengaturan BI-FAST')}
      {renderItem(<MaterialIcons name="face-woman" size={22} />, 'Pindah ke Jago Syariah')}

      {/* BAHASA */}
      <Text style={styles.sectionTitle}>BAHASA</Text>
      {renderItem(<MaterialIcons name="translate" size={22} />, 'Bahasa', 'Bahasa Indonesia')}

      {/* PERANGKAT */}
      <Text style={styles.sectionTitle}>PERANGKAT</Text>
      {renderItem(<MaterialIcons name="cellphone" size={22} />, 'Perangkat saya')}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 16,
  },
  sectionTitle: {
    marginTop: 20,
    fontSize: 12,
    color: '#999',
    fontWeight: 'bold',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderColor: '#EFEFEF',
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    color: '#111',
  },
  subtitle: {
    fontSize: 12,
    color: '#666',
  },
});

export default Pengaturan;
