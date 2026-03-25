import { useEffect, useRef } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Colors } from '../constants/colors';

interface Props {
  visible: boolean;
}

export default function QuestToast({ visible }: Props) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) {
      Animated.sequence([
        Animated.timing(opacity, { toValue: 1, duration: 150, useNativeDriver: true }),
        Animated.delay(2500),
        Animated.timing(opacity, { toValue: 0, duration: 300, useNativeDriver: true }),
      ]).start();
    } else {
      opacity.setValue(0);
    }
  }, [visible]);

  if (!visible) return null;

  return (
    <Animated.View style={[styles.toast, { opacity }]}>
      <Feather name="check" size={16} color={Colors.deepEvergreen} />
      <Text style={styles.text}>Shared</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  toast: {
    position: 'absolute',
    bottom: 96,
    alignSelf: 'center',
    backgroundColor: Colors.white,
    borderRadius: 100,
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 16,
    elevation: 8,
  },
  text: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: Colors.textPrimary,
  },
});
