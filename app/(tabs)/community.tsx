import { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { Colors } from '../../constants/colors';

const FILTERS = ['Recent', 'Trending', 'Nearby', 'Following'];

const POSTS = [
  {
    id: '1',
    username: 'FluffyOtter123',
    handle: '@FluffyOtter1',
    time: '5 minutes ago',
    body: 'omit which animal would you find in this area. The frog seems to call 4reast during its acorn-slurring habits',
    location: 'College Park, MD',
    tags: ['Butterflies', 'Foxes'],
    likes: 4,
    comments: 6,
    images: 0,
    avatarColor: Colors.xpGold,
    avatarBg: '#C8DFC9',
  },
  {
    id: '2',
    username: 'User148532',
    handle: '@User148532',
    time: '6 minutes ago',
    body: 'Look at those beautiful butterflies I saw today!! Located in a field near College Park, MD',
    location: null,
    tags: ['Butterflies'],
    likes: 2,
    comments: 3,
    images: 3,
    avatarColor: '#9B59B6',
    avatarBg: '#E8D5F0',
  },
];

export default function CommunityScreen() {
  const [activeFilter, setActiveFilter] = useState('Recent');

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.searchBar}>
          <Feather name="search" size={16} color={Colors.textMuted} />
          <TextInput
            placeholder="Search..."
            placeholderTextColor={Colors.textMuted}
            style={styles.searchInput}
          />
        </View>
        <TouchableOpacity>
          <Feather name="bell" size={24} color={Colors.textPrimary} />
        </TouchableOpacity>
      </View>

      {/* Filter pills */}
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
            <Text style={[styles.pillText, activeFilter === f && styles.pillTextActive]}>{f}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Feed */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {POSTS.map((post, i) => (
          <View key={post.id}>
            <View style={styles.post}>
              <View style={styles.postHeader}>
                <View style={[styles.avatar, { borderColor: post.avatarColor, backgroundColor: post.avatarBg }]} />
                <View style={styles.postMeta}>
                  <Text style={styles.username}>{post.username}</Text>
                  <Text style={styles.handle}>{post.handle}</Text>
                </View>
                <Text style={styles.timestamp}>{post.time}</Text>
              </View>

              <Text style={styles.body}>{post.body}</Text>

              {post.images > 0 && (
                <View style={styles.imgGrid}>
                  {Array.from({ length: post.images }).map((_, n) => (
                    <View key={n} style={styles.postImg} />
                  ))}
                </View>
              )}

              {post.location && (
                <View style={styles.locationRow}>
                  <Feather name="map-pin" size={12} color={Colors.textSecondary} />
                  <Text style={styles.locationText}>{post.location}</Text>
                </View>
              )}

              {post.tags.length > 0 && (
                <View style={styles.tagsRow}>
                  {post.tags.map(tag => (
                    <View key={tag} style={styles.tag}>
                      <Text style={styles.tagText}>{tag}</Text>
                    </View>
                  ))}
                </View>
              )}

              <View style={styles.reactions}>
                <TouchableOpacity style={styles.reaction}>
                  <Feather name="heart" size={20} color={Colors.textSecondary} />
                  <Text style={styles.reactionCount}>{post.likes}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.reaction}>
                  <Feather name="message-circle" size={20} color={Colors.textSecondary} />
                  <Text style={styles.reactionCount}>{post.comments}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.reaction}>
                  <Feather name="share-2" size={20} color={Colors.textSecondary} />
                </TouchableOpacity>
              </View>
            </View>
            {i < POSTS.length - 1 && <View style={styles.divider} />}
          </View>
        ))}
      </ScrollView>

      {/* FAB */}
      <TouchableOpacity style={styles.fab}>
        <Feather name="plus" size={24} color={Colors.white} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.mintBackground },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 12,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.sandCard,
    borderRadius: 100,
    height: 44,
    paddingHorizontal: 14,
    gap: 8,
  },
  searchInput: {
    flex: 1,
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: Colors.textPrimary,
  },
  pillsRow: { paddingHorizontal: 16, gap: 8, paddingBottom: 12 },
  pill: {
    borderWidth: 1,
    borderColor: Colors.divider,
    borderRadius: 100,
    paddingVertical: 6,
    paddingHorizontal: 16,
    backgroundColor: Colors.white,
  },
  pillActive: { backgroundColor: Colors.deepEvergreen, borderColor: Colors.deepEvergreen },
  pillText: { fontFamily: 'Inter-Regular', fontSize: 13, color: Colors.textPrimary },
  pillTextActive: { color: Colors.white },
  post: { paddingHorizontal: 16, paddingVertical: 14 },
  postHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.sandCard,
    borderWidth: 2,
    marginRight: 10,
  },
  postMeta: { flex: 1 },
  username:  { fontFamily: 'Montserrat-SemiBold', fontSize: 15, color: Colors.textPrimary },
  handle:    { fontFamily: 'Inter-Regular',        fontSize: 13, color: Colors.textMuted },
  timestamp: { fontFamily: 'Inter-Regular',        fontSize: 12, color: Colors.textMuted },
  body: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: Colors.textPrimary,
    lineHeight: 20,
    marginBottom: 10,
  },
  imgGrid: { flexDirection: 'row', gap: 4, marginBottom: 10 },
  postImg: { flex: 1, height: 80, borderRadius: 6, backgroundColor: Colors.teal, opacity: 0.4 },
  locationRow: { flexDirection: 'row', alignItems: 'center', gap: 4, marginBottom: 8 },
  locationText: { fontFamily: 'Inter-Regular', fontSize: 13, color: Colors.textSecondary },
  tagsRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginBottom: 10 },
  tag: {
    backgroundColor: Colors.sandCard,
    borderRadius: 100,
    paddingVertical: 4,
    paddingHorizontal: 12,
  },
  tagText: { fontFamily: 'Inter-Medium', fontSize: 12, color: Colors.textSecondary },
  reactions: { flexDirection: 'row', gap: 16 },
  reaction: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  reactionCount: { fontFamily: 'Inter-Regular', fontSize: 14, color: Colors.textSecondary },
  divider: { height: 1, backgroundColor: Colors.divider },
  fab: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: Colors.teal,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
  },
});
