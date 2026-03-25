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

const OPTIONS = [
  { id: 'messages',  label: 'Messages',  icon: 'message-circle', accent: false },
  { id: 'telegram',  label: 'Telegram',  icon: 'send',           accent: false },
  { id: 'twitter',   label: 'Twitter',   icon: 'twitter',        accent: false },
  { id: 'whatsapp',  label: 'Whatsapp',  icon: 'phone',          accent: false },
  { id: 'email',     label: 'E-mail',    icon: 'mail',           accent: true  },
] as const;

interface Props {
  visible: boolean;
  onClose: () => void;
  onShare: () => void;
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

        <View style={styles.grid}>
          {OPTIONS.map(opt => {
            const color = opt.accent ? Colors.ctaOrange : Colors.textPrimary;
            return (
              <TouchableOpacity key={opt.id} style={styles.option} onPress={onShare}>
                <View style={styles.iconCircle}>
                  <Feather name={opt.icon} size={24} color={color} />
                </View>
                <Text style={[styles.optLabel, { color }]}>{opt.label}</Text>
              </TouchableOpacity>
            );
          })}
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
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    marginBottom: 24,
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
