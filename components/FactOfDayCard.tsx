import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors } from '../constants/colors';

interface Props {
  onShare: () => void;
}

export default function FactOfDayCard({ onShare }: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.inner}>
        <View style={styles.textCol}>
          <Text style={styles.label}>Fact of the Day</Text>
          <Text style={styles.body}>
            UMD's campus is home to a thriving population of Eastern fox squirrels — the largest
            tree squirrel in their acorn-slurring habits!
          </Text>
          <TouchableOpacity style={styles.shareBtn} onPress={onShare} activeOpacity={0.85}>
            <Text style={styles.shareText}>Share ↑</Text>
          </TouchableOpacity>
        </View>
        {/* Nature photo placeholder — warm squirrel-brown tones */}
        <View style={styles.imgPlaceholder}>
          <View style={styles.imgInner} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.sandCard,
    borderRadius: 12,
    padding: 16,
    marginTop: 8,
  },
  inner: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'flex-start',
  },
  textCol: {
    flex: 1,
  },
  label: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 13,
    color: Colors.xpGold,
    marginBottom: 6,
  },
  body: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: Colors.textPrimary,
    lineHeight: 20,
    marginBottom: 14,
  },
  shareBtn: {
    backgroundColor: Colors.teal,
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 20,
    alignSelf: 'flex-start',
  },
  shareText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: Colors.white,
  },
  // Warm tan background with darker center — suggests a nature/animal photo
  imgPlaceholder: {
    width: 80,
    height: 80,
    borderRadius: 8,
    backgroundColor: '#C8A97A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgInner: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#8B6440',
    opacity: 0.6,
  },
});
