import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, FlatList } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const Kantong = () => {
  const [showSaldo, setShowSaldo] = useState(false);
  const [activeTab, setActiveTab] = useState('Kantong saya');

  const kantongData = [
    { id: '1', title: 'Kantong Utama', saldo: 'Rp951.382', icon: 'cash' },
    { id: '2', title: 'GoPay Tabungan', saldo: 'Rp16', subtitle: 'dengan bunga 2.5% p.a.', icon: 'piggy-bank-outline', color: '#00BFE6' },
    { id: '3', title: 'Bibit', subtitle: 'Mulai berinvestasi\nTap untuk hubungkan', icon: 'chart-box-outline' },
    { id: '4', title: 'Deposito', subtitle: 'Hingga 6.0% p.a.\nTap untuk buka deposito', icon: 'bank-outline' },
    { id: '5', title: 'Makan', icon: 'credit-card-outline' },
    { id: '6', title: 'Jajan', icon: 'credit-card-outline' },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Kantong</Text>

      {/* Search */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#999" style={{ marginRight: 8 }} />
        <TextInput placeholder="Cari Kantong" placeholderTextColor="#999" style={styles.searchInput} />
      </View>

      {/* Tabs */}
      <View style={styles.tabs}>
        {['Semua', 'Kantong saya', 'Dibagi ke saya'].map(tab => (
          <TouchableOpacity
            key={tab}
            style={[styles.tab, activeTab === tab && styles.activeTab]}
            onPress={() => setActiveTab(tab)}
          >
            <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>{tab}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={styles.plusButton}>
          <Ionicons name="add" size={20} />
        </TouchableOpacity>
      </View>

      {/* Saldo */}
      <TouchableOpacity style={styles.saldoCard} onPress={() => setShowSaldo(!showSaldo)}>
        <Text style={styles.saldoText}>Saldo Saya</Text>
        <Text style={styles.saldoAmount}>{showSaldo ? 'Rp954.229' : '••••••'}</Text>
        <Ionicons name={showSaldo ? 'eye-outline' : 'eye-off-outline'} size={18} style={{ marginLeft: 5 }} />
      </TouchableOpacity>

      {/* Kantong Grid */}
      <FlatList
        data={kantongData}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingBottom: 100 }}
        renderItem={({ item }) => (
          <View style={[styles.kantongCard, item.color && { backgroundColor: item.color }]}>
            <MaterialCommunityIcons name={item.icon} size={32} />
            <Text style={styles.kantongTitle}>{item.title}</Text>
            {item.saldo && <Text style={styles.kantongSaldo}>{item.saldo}</Text>}
            {item.subtitle && <Text style={styles.kantongSub}>{item.subtitle}</Text>}
          </View>
        )}
      />
    </View>
  );
};

export default Kantong;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1F1F1',
    borderRadius: 12,
    padding: 10,
    marginVertical: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  tabs: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  tab: {
    paddingVertical: 6,
    paddingHorizontal: 14,
    backgroundColor: '#F2F2F2',
    borderRadius: 20,
    marginRight: 8,
  },
  activeTab: {
    backgroundColor: '#000',
  },
  tabText: {
    color: '#333',
    fontSize: 14,
  },
  activeTabText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  plusButton: {
    marginLeft: 'auto',
    backgroundColor: '#eee',
    padding: 6,
    borderRadius: 20,
  },
  saldoCard: {
    backgroundColor: '#FDFDFD',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    elevation: 1,
  },
  saldoText: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
  },
  saldoAmount: {
    fontSize: 16,
    marginRight: 5,
  },
  kantongCard: {
    backgroundColor: '#F6F6F6',
    borderRadius: 16,
    padding: 16,
    width: '48%',
    marginBottom: 16,
  },
  kantongTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 8,
  },
  kantongSaldo: {
    fontSize: 14,
    marginTop: 4,
  },
  kantongSub: {
    fontSize: 12,
    marginTop: 4,
    color: '#333',
  },
});
