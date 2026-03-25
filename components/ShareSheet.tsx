import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Colors } from '../constants/colors';

// Row 1: Messages, Telegram, Twitter
// Row 2: WhatsApp, E-mail
const ROW1 = [
  { id: 'messages', label: 'Messages', icon: 'message-circle' as const, accent: false },
  { id: 'telegram', label: 'Telegram', icon: 'send'           as const, accent: false },
  { id: 'twitter',  label: 'Twitter',  icon: 'twitter'        as const, accent: false },
];
const ROW2 = [
  { id: 'whatsapp', label: 'Whatsapp', icon: 'message-circle' as const, accent: false },
  { id: 'email',    label: 'E-mail',   icon: null,                       accent: true  },
];

interface Props {
  visible: boolean;
  onClose: () => void;
  onShare: () => void;
}

function OptionItem({ id, label, icon, accent, onPress }: {
  id: string; label: string; icon: string | null; accent: boolean; onPress: () => void;
}) {
  const color = accent ? Colors.ctaOrange : Colors.textPrimary;
  return (
    <TouchableOpacity key={id} style={styles.option} onPress={onPress}>
      <View style={styles.iconCircle}>
        {icon ? (
          <Feather name={icon as any} size={24} color={color} />
        ) : (
          <Text style={[styles.atSymbol, { color }]}>@</Text>
        )}
      </View>
      <Text style={[styles.optLabel, { color }]}>{label}</Text>
    </TouchableOpacity>
  );
}

export default function ShareSheet({ visible, onClose, onShare }: Props) {
  return (
    <Modal visible={visible} transparent animationType="slide" statusBarTranslucent>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.scrim} />
      </TouchableWithoutFeedback>

      <View style={styles.sheet}>
        <View style={styles.handle} />
        <Text style={styles.title}>Share with</Text>

        <View style={styles.row}>
          {ROW1.map(opt => (
            <OptionItem key={opt.id} {...opt} onPress={onShare} />
          ))}
        </View>
        <View style={[styles.row, { marginBottom: 24 }]}>
          {ROW2.map(opt => (
            <OptionItem key={opt.id} {...opt} onPress={onShare} />
          ))}
        </View>

        <TouchableOpacity style={styles.shareBtn} onPress={onShare} activeOpacity={0.85}>
          <Text style={styles.shareBtnText}>Share</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  scrim: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  sheet: {
    backgroundColor: Colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 24,
    paddingBottom: 32,
  },
  handle: {
    width: 40,
    height: 4,
    backgroundColor: Colors.progressTrack,
    borderRadius: 2,
    alignSelf: 'center',
    marginTop: 12,
    marginBottom: 20,
  },
  title: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
    color: Colors.textPrimary,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 16,
  },
  option: {
    alignItems: 'center',
    width: 64,
  },
  iconCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: Colors.sandCard,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 6,
  },
  atSymbol: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  optLabel: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    textAlign: 'center',
  },
  shareBtn: {
    backgroundColor: Colors.teal,
    borderRadius: 12,
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shareBtnText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    color: Colors.white,
  },
});
