import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Colors } from '../constants/colors';

export interface Quest {
  id: string;
  text: string;
  progress: number;
  total: number;
  points: number;
  completed: boolean;
}

interface Props {
  quest: Quest;
  onGo: () => void;
}

export default function QuestRow({ quest, onGo }: Props) {
  const pct = quest.total > 0 ? (quest.progress / quest.total) * 100 : 0;

  return (
    <View style={[styles.container, quest.completed && styles.containerDone]}>
      <Text style={styles.text}>{quest.text}</Text>
      <View style={styles.progressRow}>
        <View style={styles.barWrap}>
          <View style={styles.track}>
            <View style={[styles.fill, { width: `${pct}%` }]} />
          </View>
          <View style={styles.barFooter}>
            <Text style={styles.fraction}>{quest.progress}/{quest.total}</Text>
            {quest.completed && (
              <Text style={styles.pointsEarned}>+{quest.points} points</Text>
            )}
          </View>
        </View>
        {quest.completed ? (
          <View style={styles.doneCircle}>
            <Feather name="check" size={18} color="#22A75B" />
          </View>
        ) : (
          <TouchableOpacity style={styles.goCircle} onPress={onGo} activeOpacity={0.8}>
            <Text style={styles.goText}>GO</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.sandCard,
    borderRadius: 10,
    padding: 14,
    marginBottom: 10,
  },
  containerDone: {
    backgroundColor: Colors.mintTint,
  },
  text: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: Colors.textPrimary,
    marginBottom: 10,
  },
  progressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  barWrap: {
    flex: 1,
    gap: 4,
  },
  track: {
    height: 4,
    backgroundColor: Colors.progressTrack,
    borderRadius: 100,
    overflow: 'hidden',
  },
  fill: {
    height: '100%',
    backgroundColor: Colors.xpGold,
    borderRadius: 100,
  },
  barFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  fraction: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: Colors.textSecondary,
  },
  pointsEarned: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: Colors.teal,
  },
  goCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.teal,
    justifyContent: 'center',
    alignItems: 'center',
  },
  goText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 13,
    color: Colors.white,
  },
  doneCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#22A75B',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
