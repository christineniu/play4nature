import { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Colors } from '../../constants/colors';
import QuestRow, { Quest } from '../../components/QuestRow';
import FactOfDayCard from '../../components/FactOfDayCard';
import ShareSheet from '../../components/ShareSheet';
import QuestToast from '../../components/QuestToast';

const INITIAL_QUESTS: Quest[] = [
  { id: '1', text: 'Share the fact of the day with a friend', progress: 0, total: 1, points: 15, completed: false },
  { id: '2', text: 'Take a picture of 3 different trees',     progress: 0, total: 3, points: 20, completed: false },
];

const NEWS = [
  { id: '1', title: 'Wildlife Management',   source: 'University of Maryland' },
  { id: '2', title: 'Climate Change Impact', source: 'UMCES' },
];

export default function HomeScreen() {
  const router = useRouter();
  const [shareVisible, setShareVisible] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);
  const [quests, setQuests] = useState(INITIAL_QUESTS);

  const handleShare = () => {
    setShareVisible(false);
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 2800);
  };

  const handleQuestGo = (id: string) => {
    setQuests(prev =>
      prev.map(q => {
        if (q.id !== id) return q;
        const next = Math.min(q.progress + 1, q.total);
        return { ...q, progress: next, completed: next >= q.total };
      })
    );
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.avatar} />
          <Text style={styles.welcome}>Welcome FluffyOtter123</Text>
        </View>
        <TouchableOpacity onPress={() => router.push('/shop')}>
          <Feather name="shopping-bag" size={24} color={Colors.textPrimary} />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
        <FactOfDayCard onShare={() => setShareVisible(true)} />

        {/* Daily Quests */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Daily Quests</Text>
          {/* Polecat mascot placeholder */}
          <View style={styles.mascot} />
        </View>
        {quests.map(q => (
          <QuestRow key={q.id} quest={q} onGo={() => handleQuestGo(q.id)} />
        ))}

        {/* Recent News */}
        <View style={[styles.sectionHeader, { marginTop: 24 }]}>
          <Text style={styles.sectionTitle}>Recent News</Text>
          <Feather name="arrow-right" size={20} color={Colors.textPrimary} />
        </View>
        <View style={styles.newsGrid}>
          {NEWS.map(item => (
            <TouchableOpacity key={item.id} style={styles.newsCard} activeOpacity={0.9}>
              <View style={styles.newsImg} />
              <View style={styles.newsOverlay}>
                <Text style={styles.newsTitle}>{item.title}</Text>
                <Text style={styles.newsSource}>{item.source}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <ShareSheet
        visible={shareVisible}
        onClose={() => setShareVisible(false)}
        onShare={handleShare}
      />
      <QuestToast visible={toastVisible} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.mintBackground },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  headerLeft: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  avatar: { width: 40, height: 40, borderRadius: 20, backgroundColor: Colors.teal },
  welcome: { fontFamily: 'Montserrat-Bold', fontSize: 18, color: Colors.textPrimary },
  scroll: { paddingHorizontal: 16, paddingBottom: 24 },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 12,
  },
  sectionTitle: { fontFamily: 'Montserrat-Bold', fontSize: 20, color: Colors.textPrimary },
  mascot: { width: 36, height: 36, borderRadius: 8, backgroundColor: Colors.sandCard },
  newsGrid: { flexDirection: 'row', gap: 8 },
  newsCard: { flex: 1, height: 120, borderRadius: 8, overflow: 'hidden' },
  newsImg: { flex: 1, backgroundColor: Colors.teal, opacity: 0.5 },
  newsOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.45)',
    padding: 8,
  },
  newsTitle:  { fontFamily: 'Montserrat-Bold', fontSize: 14, color: Colors.white },
  newsSource: { fontFamily: 'Inter-Regular',   fontSize: 11, color: Colors.white },
});
