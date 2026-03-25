import { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { Colors } from '../../constants/colors';
import QuestRow, { Quest } from '../../components/QuestRow';

const STATS = [
  { label: 'Days Active',   value: '157' },
  { label: 'Quests',        value: '53' },
  { label: 'Points Earned', value: '1,506' },
];

const INITIAL_QUESTS: Quest[] = [
  { id: '1', text: 'Share the fact of the day with a friend', progress: 1, total: 1, points: 15, completed: true },
  { id: '2', text: 'Take a picture of 3 different trees',     progress: 2, total: 3, points: 20, completed: false },
];

export default function ProfileScreen() {
  const [quests, setQuests] = useState(INITIAL_QUESTS);

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
      {/* Action icons */}
      <View style={styles.iconRow}>
        <TouchableOpacity><Feather name="share-2" size={22} color={Colors.textPrimary} /></TouchableOpacity>
        <TouchableOpacity><Feather name="edit-2"  size={22} color={Colors.textPrimary} /></TouchableOpacity>
        <TouchableOpacity><Feather name="settings" size={22} color={Colors.textPrimary} /></TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
        {/* Avatar + info */}
        <View style={styles.profileTop}>
          <View style={styles.avatarWrap}>
            <View style={styles.avatar}>
              <View style={styles.avatarInner} />
            </View>
            <View style={styles.levelBadge}>
              <Text style={styles.levelText}>Lvl 10</Text>
            </View>
          </View>
          <View>
            <Text style={styles.username}>FluffyOtter123</Text>
            <Text style={styles.email}>ferret@gmail.com</Text>
          </View>
        </View>

        {/* Stats */}
        <View style={styles.statsRow}>
          {STATS.map(s => (
            <View key={s.label} style={styles.statCard}>
              <Text style={styles.statNumber}>{s.value}</Text>
              <Text style={styles.statLabel}>{s.label}</Text>
            </View>
          ))}
        </View>

        {/* Quests */}
        <Text style={styles.sectionTitle}>Quests</Text>
        {quests.map(q => (
          <QuestRow key={q.id} quest={q} onGo={() => handleQuestGo(q.id)} />
        ))}

        {/* Badges */}
        <Text style={[styles.sectionTitle, { marginTop: 24 }]}>Badges</Text>
        <View style={styles.badgesEmpty}>
          {/* Polecat empty-state placeholder */}
          <View style={styles.polecatPlaceholder} />
          <Text style={styles.emptyText}>No badges yet</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.mintBackground },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  scroll: { paddingHorizontal: 16, paddingBottom: 32 },
  profileTop: { flexDirection: 'row', alignItems: 'center', gap: 16, marginBottom: 20 },
  avatarWrap: { position: 'relative' },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#C8DFC9',
    borderWidth: 3,
    borderColor: Colors.xpGold,
    justifyContent: 'center',
    alignItems: 'center',
  },
  levelBadge: {
    position: 'absolute',
    bottom: -4,
    left: -4,
    backgroundColor: Colors.xpGold,
    borderRadius: 100,
    paddingVertical: 4,
    paddingHorizontal: 10,
  },
  levelText: { fontFamily: 'Montserrat-Bold', fontSize: 12, color: Colors.white },
  username:  { fontFamily: 'Montserrat-Bold', fontSize: 20, color: Colors.textPrimary },
  email:     { fontFamily: 'Inter-Regular',   fontSize: 13, color: Colors.textMuted },
  statsRow: { flexDirection: 'row', gap: 8, marginBottom: 24 },
  statCard: {
    flex: 1,
    backgroundColor: Colors.sandCard,
    borderRadius: 10,
    padding: 16,
    alignItems: 'center',
  },
  statNumber: { fontFamily: 'SpaceGrotesk-Bold', fontSize: 26, color: Colors.teal },
  statLabel:  { fontFamily: 'Inter-Regular',     fontSize: 12, color: Colors.textMuted, marginTop: 4 },
  sectionTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
    color: Colors.textPrimary,
    marginBottom: 12,
  },
  badgesEmpty: {
    backgroundColor: Colors.sandCard,
    borderRadius: 12,
    paddingVertical: 32,
    alignItems: 'center',
  },
  avatarInner: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#8B6440',
    opacity: 0.5,
  },
  polecatPlaceholder: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#C8A97A',
    marginBottom: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: { fontFamily: 'Inter-Regular', fontSize: 14, color: Colors.textMuted },
});
