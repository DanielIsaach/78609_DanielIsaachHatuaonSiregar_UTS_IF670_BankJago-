import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons, FontAwesome5, Entypo, Ionicons } from '@expo/vector-icons';

const LevelAkun = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <MaterialIcons name="arrow-back-ios" size={24} color="black" />
        <Text style={styles.headerTitle}>Level Akun</Text>
        <MaterialIcons name="help-outline" size={24} color="black" />
      </View>

      {/* Badge Section */}
      <View style={styles.badgeSection}>
        <MaterialIcons name="shield" size={100} color="#B9B9F3" style={styles.badgeIcon} />
        <Text style={styles.levelTitle}>Silver Jagoan</Text>
        <Text style={styles.levelInfo}>• Level akun kamu saat ini</Text>
      </View>

      {/* Benefits Section */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Manfaat Silver Jagoan</Text>
        <View style={styles.benefitsRow}>
          <View style={styles.benefitItem}>
            <MaterialCommunityIcons name="face-woman-outline" size={28} color="#7B3FE4" />
            <Text style={styles.benefitCount}>25</Text>
            <Text style={styles.benefitText}>gratis transfer & top-up</Text>
          </View>
          <View style={styles.benefitItem}>
            <Entypo name="credit" size={28} color="#7B3FE4" />
            <Text style={styles.benefitCount}>3</Text>
            <Text style={styles.benefitText}>gratis tarik tunai di ATM</Text>
          </View>
          <View style={styles.benefitItem}>
            <FontAwesome5 name="mobile-alt" size={24} color="#7B3FE4" />
            <Text style={styles.benefitCount}>1</Text>
            <Text style={styles.benefitText}>gratis kartu debit digital</Text>
          </View>
          <View style={styles.benefitItem}>
            <FontAwesome5 name="credit-card" size={24} color="#7B3FE4" />
            <Text style={styles.benefitCount}>1</Text>
            <Text style={styles.benefitText}>gratis kartu debit fisik</Text>
          </View>
        </View>
      </View>

      {/* Achievement Section */}
      <View style={styles.card}>
        <View style={styles.achievementHeader}>
          <Text style={styles.sectionTitle}>Pencapaian kamu</Text>
          <Ionicons name="information-circle-outline" size={18} color="orange" />
        </View>

        <View style={styles.achievementRow}>
          <View style={styles.achievementBox}>
            <Text style={styles.achievementLabel}>Saldo rata-rata sekarang</Text>
            <Text style={styles.achievementValue}>Rp1.415.066</Text>
          </View>
          <View style={styles.achievementBox}>
            <Text style={styles.achievementLabel}>Partner terhubung</Text>
            <FontAwesome5 name="wallet" size={24} color="#00B2FF" style={{ marginTop: 4 }} />
          </View>
        </View>

        <Text style={styles.upgradeText}>
          Lakukan ini untuk naik ke level <Text style={{ fontWeight: 'bold' }}>Gold Jagoan</Text>
        </Text>
        <Text style={styles.checklistText}>✅ Hubungkan akun ke partner</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  badgeSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  badgeIcon: {
    marginBottom: 8,
  },
  levelTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  levelInfo: {
    color: '#B38ADE',
    marginTop: 4,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#f0f0f0',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  benefitsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  benefitItem: {
    width: '47%',
    marginBottom: 16,
    alignItems: 'center',
  },
  benefitCount: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 4,
  },
  benefitText: {
    textAlign: 'center',
    fontSize: 12,
    color: '#555',
  },
  achievementHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginBottom: 12,
  },
  achievementRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  achievementBox: {
    width: '48%',
  },
  achievementLabel: {
    fontSize: 12,
    color: '#888',
  },
  achievementValue: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 4,
  },
  upgradeText: {
    marginTop: 16,
    fontSize: 13,
    color: '#f60',
  },
  checklistText: {
    marginTop: 8,
    fontSize: 13,
  },
});

export default LevelAkun;
