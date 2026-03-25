import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Colors } from '../constants/colors';

const ITEMS = [
  { id: '1', name: 'Ferret Plush', points: 156 },
  { id: '2', name: 'Ferret Plush', points: 156 },
  { id: '3', name: 'Ferret Plush', points: 156 },
  { id: '4', name: 'Ferret Plush', points: 156 },
];

function ItemCard({ name, points }: { name: string; points: number }) {
  return (
    <View style={styles.card}>
      {/* Item image placeholder */}
      <View style={styles.cardImg} />
      <Text style={styles.cardName}>{name}</Text>
      <View style={styles.cardFooter}>
        <Text style={styles.cardPoints}>{points} points</Text>
        <TouchableOpacity style={styles.getBtn} activeOpacity={0.85}>
          <Text style={styles.getBtnText}>Get</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default function ShopScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Feather name="arrow-left" size={24} color={Colors.textPrimary} />
        </TouchableOpacity>
        <Text style={styles.headerPoints}>You have: 15 points</Text>
        <TouchableOpacity>
          <Feather name="shopping-cart" size={24} color={Colors.textPrimary} />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
        <Text style={styles.pageTitle}>Claim Prizes</Text>

        <Text style={styles.sectionLabel}>Newly Released</Text>
        <View style={styles.grid}>
          {ITEMS.slice(0, 2).map(item => (
            <ItemCard key={item.id} name={item.name} points={item.points} />
          ))}
        </View>

        <Text style={[styles.sectionLabel, { marginTop: 20 }]}>Popular</Text>
        <View style={styles.grid}>
          {ITEMS.slice(2).map(item => (
            <ItemCard key={`p${item.id}`} name={item.name} points={item.points} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.mintBackground },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  headerPoints: { fontFamily: 'Inter-Medium', fontSize: 14, color: Colors.textPrimary },
  scroll: { paddingHorizontal: 16, paddingBottom: 32 },
  pageTitle: { fontFamily: 'Montserrat-Bold', fontSize: 24, color: Colors.textPrimary, marginBottom: 16 },
  sectionLabel: { fontFamily: 'Montserrat-Bold', fontSize: 16, color: Colors.textPrimary, marginBottom: 12 },
  grid: { flexDirection: 'row', gap: 12 },
  card: {
    flex: 1,
    backgroundColor: Colors.white,
    borderRadius: 10,
    padding: 12,
  },
  cardImg: {
    height: 100,
    borderRadius: 8,
    backgroundColor: Colors.sandCard,
    marginBottom: 8,
  },
  cardName: { fontFamily: 'Inter-SemiBold', fontSize: 14, color: Colors.textPrimary, marginBottom: 8 },
  cardFooter: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  cardPoints: { fontFamily: 'Inter-Regular', fontSize: 13, color: Colors.textSecondary },
  getBtn: {
    backgroundColor: Colors.teal,
    borderRadius: 100,
    paddingVertical: 6,
    paddingHorizontal: 18,
  },
  getBtnText: { fontFamily: 'Poppins-Medium', fontSize: 13, color: Colors.white },
});
