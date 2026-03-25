import { Platform, View, StyleSheet } from 'react-native';
import { Colors } from '../constants/colors';

interface Props {
  children: React.ReactNode;
}

// On web: centers a 390px phone-width container on a mint background.
// On iOS/Android: renders children directly with no wrapper.
export default function PhoneFrame({ children }: Props) {
  if (Platform.OS !== 'web') return <>{children}</>;

  return (
    <View style={styles.page}>
      <View style={styles.phone}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#C8DFC9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  phone: {
    width: 390,
    height: 844,
    overflow: 'hidden',
    borderRadius: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 24 },
    shadowOpacity: 0.25,
    shadowRadius: 48,
    backgroundColor: Colors.mintBackground,
  },
});
