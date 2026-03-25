import { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { Colors } from '../../constants/colors';

const { height: SCREEN_H } = Dimensions.get('window');
const MAP_H = SCREEN_H * 0.52;

const FILTERS = ['All', 'Parks', 'Wetlands', 'Forests', 'Urban'];

const EVENTS = [
  { id: '1', title: 'Wildlife Cleanup at College Park', date: 'June 1, 2025',  distance: '0.4 mi' },
  { id: '2', title: 'Twilight Nature Walk in D.C.',     date: 'June 10, 2022', distance: '1.0 mi' },
];

export default function ExploreScreen() {
  const [activeFilter, setActiveFilter] = useState('All');

  return (
    <View style={styles.container}>
      {/* Map — swap this View for <MapView> once react-native-maps is configured */}
      <View style={[styles.mapPlaceholder, { height: MAP_H }]}>
        <Text style={styles.mapLabel}>Map View</Text>
        <Text style={styles.mapSub}>Add react-native-maps to enable</Text>
        <TouchableOpacity style={styles.searchFab}>
          <Feather name="search" size={24} color={Colors.white} />
        </TouchableOpacity>
      </View>

      {/* Bottom sheet */}
      <SafeAreaView style={styles.sheet} edges={['bottom']}>
        <View style={styles.handle} />
        <Text style={styles.sheetTitle}>Wildlife Updates Near You</Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.pillsRow}
        >
          {FILTERS.map(f => (
            <TouchableOpacity
              key={f}
              style={[styles.pill, activeFilter === f && styles.pillActive]}
              onPress={() => setActiveFilter(f)}
            >
              <Feather
                name="map-pin"
                size={12}
                color={activeFilter === f ? Colors.white : Colors.textSecondary}
              />
              <Text style={[styles.pillText, activeFilter === f && styles.pillTextActive]}>{f}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <Text style={styles.eventsLabel}>Events nearby</Text>
        <View style={styles.eventsGrid}>
          {EVENTS.map(ev => (
            <TouchableOpacity key={ev.id} style={styles.eventCard} activeOpacity={0.85}>
              <View style={styles.eventImg} />
              <View style={styles.eventInfo}>
                <Text style={styles.eventTitle}>{ev.title}</Text>
                <Text style={styles.eventMeta}>{ev.date} · {ev.distance}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.mintBackground },
  mapPlaceholder: {
    backgroundColor: '#4A7C59',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapLabel: { fontFamily: 'Montserrat-Bold', fontSize: 18, color: Colors.white },
  mapSub:   { fontFamily: 'Inter-Regular',   fontSize: 13, color: 'rgba(255,255,255,0.7)', marginTop: 4 },
  searchFab: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: Colors.teal,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sheet: {
    flex: 1,
    backgroundColor: Colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 16,
  },
  handle: {
    width: 40,
    height: 4,
    backgroundColor: Colors.progressTrack,
    borderRadius: 2,
    alignSelf: 'center',
    marginTop: 12,
    marginBottom: 16,
  },
  sheetTitle: { fontFamily: 'Montserrat-Bold', fontSize: 18, color: Colors.textPrimary, marginBottom: 24 },
  pillsRow: { gap: 8, paddingBottom: 14 },
  pill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    borderWidth: 1,
    borderColor: Colors.divider,
    borderRadius: 100,
    paddingVertical: 6,
    paddingHorizontal: 14,
    backgroundColor: Colors.white,
  },
  pillActive:     { backgroundColor: Colors.deepEvergreen, borderColor: Colors.deepEvergreen },
  pillText:       { fontFamily: 'Inter-Regular', fontSize: 13, color: Colors.textSecondary },
  pillTextActive: { color: Colors.white },
  eventsLabel: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 15,
    color: Colors.textPrimary,
    marginBottom: 10,
  },
  eventsGrid: { flexDirection: 'row', gap: 8 },
  eventCard: {
    flex: 1,
    backgroundColor: Colors.white,
    borderRadius: 8,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  eventImg:   { height: 110, backgroundColor: Colors.teal, opacity: 0.45 },
  eventInfo:  { padding: 8 },
  eventTitle: { fontFamily: 'Montserrat-SemiBold', fontSize: 14, color: Colors.textPrimary, marginBottom: 4 },
  eventMeta:  { fontFamily: 'Inter-Regular',        fontSize: 12, color: Colors.textSecondary },
});
