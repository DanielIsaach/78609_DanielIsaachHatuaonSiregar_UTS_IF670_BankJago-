import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons, Ionicons, Feather } from '@expo/vector-icons';

const Beranda = () => {
  const namaPengguna = "Raka";
  const namaRekening = "Kantong Utama";
  const nomorRekening = "1045 9829 5780";
  const saldo = "Rp951.382";

  return (
    <View style={styles.screen}>
      {/* HEADER */}
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>Jago</Text>
          <Text style={styles.subGreeting}>Halo, {namaPengguna} 👋</Text>
        </View>
        <TouchableOpacity>
          <Ionicons name="notifications-outline" size={28} color="#333" />
        </TouchableOpacity>
      </View>

      {/* ISI */}
      <ScrollView contentContainerStyle={styles.content}>
        {/* Card Rekening */}
        <View style={styles.card}>
          <View style={styles.cardTop}>
            <View>
              <Text style={styles.judul}>{namaRekening}</Text>
              <Text style={styles.nomor}>{nomorRekening}</Text>
            </View>
            <Text style={styles.saldo}>{saldo}</Text>
          </View>

          {/* Tombol Aktivitas Terakhir */}
          <TouchableOpacity style={styles.aktivitasBtn}>
            <Text style={styles.aktivitasText}>Aktivitas Terakhir</Text>
            <MaterialIcons name="chevron-right" size={20} color="#FDB813" />
          </TouchableOpacity>
        </View>

        {/* Tombol Aksi Utama */}
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="swap-horizontal" size={24} color="#fff" />
            <Text style={styles.actionText}>Transfer & Bayar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton}>
            <MaterialIcons name="qr-code-scanner" size={24} color="#fff" />
            <Text style={styles.actionText}>Scan QRIS</Text>
          </TouchableOpacity>
        </View>

        {/* SPOTLIGHT */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Spotlight</Text>
          <TouchableOpacity style={styles.spotlightCard}>
            <Feather name="star" size={24} color="#FDB813" />
            <Text style={styles.spotlightText}>Atur budget mingguanmu sekarang!</Text>
          </TouchableOpacity>
        </View>

        {/* RENCANAKAN */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Rencanakan</Text>
          <TouchableOpacity style={styles.planCard}>
            <Feather name="calendar" size={24} color="#333" />
            <View style={{ marginLeft: 10 }}>
              <Text style={styles.planTitle}>Buat Rencana Tabungan</Text>
              <Text style={styles.planDesc}>Wujudkan tujuan finansialmu</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingTop: 50,
    paddingBottom: 16,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  subGreeting: {
    fontSize: 16,
    color: '#666',
    marginTop: 4,
  },
  content: {
    padding: 16,
  },
  card: {
    backgroundColor: '#fff5d1',
    padding: 20,
    borderRadius: 15,
    width: '100%',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 4,
  },
  cardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  judul: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#333',
  },
  nomor: {
    fontSize: 16,
    color: '#666',
  },
  saldo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  aktivitasBtn: {
    marginTop: 16,
    alignSelf: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
  },
  aktivitasText: {
    color: '#FDB813',
    fontWeight: 'bold',
    fontSize: 14,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  actionButton: {
    flex: 1,
    backgroundColor: '#FDB813',
    padding: 16,
    borderRadius: 12,
    marginHorizontal: 8,
    alignItems: 'center',
  },
  actionText: {
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 6,
    fontSize: 14,
    textAlign: 'center',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },
  spotlightCard: {
    backgroundColor: '#fff9e6',
    padding: 16,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  spotlightText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
    flexShrink: 1,
  },
  planCard: {
    backgroundColor: '#f2f2f2',
    padding: 16,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  planTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  planDesc: {
    fontSize: 14,
    color: '#777',
  },
});

export default Beranda;
