// Transaksi.tsx
import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

const Transaksi = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Transaksi</Text>

      {/* Transfer & Bayar */}
      <Text style={styles.sectionTitle}>Transfer & Bayar</Text>
      <View style={styles.grid}>
        <GridButton icon="bank-transfer" label="Bank Transfer" />
        <GridButton icon="account-balance-wallet" label="Topup e-Wallet" />
        <GridButton icon="mobile-screen-share" label="Topup Pulsa & Data" />
        <GridButton icon="tv" label="Internet & TV" />
        <GridButton icon="bolt" label="PLN" />
        <GridButton icon="credit-card" label="Kartu Kredit" />
        <GridButton icon="email" label="Jago Amal" />
        <GridButton icon="more-horiz" label="Fitur Lainnya" />
      </View>

      {/* Tagih Uang & Scan QRIS */}
      <View style={styles.actionRow}>
        <ActionButton label="Tagih Uang" icon="money" />
        <ActionButton label="Scan QRIS" icon="qrcode-scan" />
      </View>

      {/* Kartu Debit */}
      <View style={styles.cardSection}>
        <Text style={styles.cardTitle}>Kartu Debit Jago</Text>
        <Text style={styles.cardDesc}>
          Lengkapi pengalaman Jago Anda dengan buat kartu debit gratis*
        </Text>
        <View style={styles.debitCards}>
          <DebitCard type="Visa" desc="Transaksi Offline & Online, Pembayaran Internasional" />
          <DebitCard type="Jago" desc="Kartu Virtual, Transaksi Online" />
        </View>
      </View>

      {/* Analisis Pembayaran */}
      <Text style={styles.sectionTitle}>Analisis Pembayaran</Text>
      <View style={styles.analysisCard}>
        <Text style={styles.analysisText}>Mau tahu laporan bulanan kamu?</Text>
        {/* You can add an image or icon here if needed */}
      </View>
    </ScrollView>
  );
};

const GridButton = ({ icon, label }: { icon: string; label: string }) => (
  <TouchableOpacity style={styles.gridButton}>
    <MaterialIcons name={icon as any} size={24} color="#FF9900" />
    <Text style={styles.gridLabel}>{label}</Text>
  </TouchableOpacity>
);

const ActionButton = ({ label, icon }: { label: string; icon: string }) => (
  <TouchableOpacity style={styles.actionButton}>
    <FontAwesome5 name={icon as any} size={20} color="#6A0DAD" />
    <Text style={styles.actionLabel}>{label}</Text>
  </TouchableOpacity>
);

const DebitCard = ({ type, desc }: { type: string; desc: string }) => (
  <View style={styles.debitCard}>
    <Text style={styles.cardType}>Kartu {type}</Text>
    <Text style={styles.cardDescSmall}>{desc}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  header: { fontSize: 28, fontWeight: 'bold', marginBottom: 20 },
  sectionTitle: { fontSize: 18, fontWeight: '600', marginVertical: 12 },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridButton: {
    width: '23%',
    backgroundColor: '#F8F8F8',
    borderRadius: 12,
    padding: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  gridLabel: { fontSize: 12, textAlign: 'center', marginTop: 6 },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 16,
  },
  actionButton: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    borderRadius: 20,
    padding: 14,
    marginHorizontal: 4,
    alignItems: 'center',
  },
  actionLabel: { fontSize: 14, fontWeight: '600', marginTop: 4 },
  cardSection: { marginVertical: 20 },
  cardTitle: { fontSize: 16, fontWeight: '700' },
  cardDesc: { fontSize: 14, color: '#666', marginVertical: 4 },
  debitCards: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  debitCard: {
    flex: 1,
    backgroundColor: '#FDF1FF',
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 4,
  },
  cardType: { fontSize: 14, fontWeight: '700' },
  cardDescSmall: { fontSize: 12, color: '#333', marginTop: 4 },
  analysisCard: {
    backgroundColor: '#FFE7C7',
    borderRadius: 14,
    padding: 20,
    marginTop: 10,
  },
  analysisText: { fontSize: 15, fontWeight: '600' },
});

export default Transaksi;
