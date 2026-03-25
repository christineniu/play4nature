import { Platform, View, StyleSheet } from 'react-native';

interface Props {
  children: React.ReactNode;
}

// On mobile: renders children directly.
// On web: wraps the app in a realistic iPhone 14 mockup.
export default function PhoneFrame({ children }: Props) {
  if (Platform.OS !== 'web') return <>{children}</>;

  return (
    <View style={styles.page}>
      {/* Scale wrapper so the mockup fits most laptop screens */}
      <View style={styles.scaleWrapper}>
        {/* Phone body */}
        <View style={styles.phone}>

          {/* Left side buttons: mute + volume */}
          <View style={[styles.sideBtn, styles.muteBtn]} />
          <View style={[styles.sideBtn, styles.volUpBtn]} />
          <View style={[styles.sideBtn, styles.volDownBtn]} />

          {/* Right side button: power */}
          <View style={[styles.sideBtn, styles.powerBtn]} />

          {/* Screen */}
          <View style={styles.screen}>
            {/* Dynamic Island */}
            <View style={styles.dynamicIsland} />

            {/* App content — clipped to screen */}
            <View style={styles.appContent}>
              {children}
            </View>

            {/* Home indicator */}
            <View style={styles.homeIndicator} />
          </View>

        </View>
      </View>
    </View>
  );
}

const SCREEN_W = 390;
const SCREEN_H = 844;
const BEZEL_H = 14;   // top + bottom bezel inside frame
const BEZEL_SIDE = 14;
const FRAME_W = SCREEN_W + BEZEL_SIDE * 2;
const FRAME_H = SCREEN_H + BEZEL_H * 2;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#0F1923',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // CSS transform scale to fit on smaller screens
  scaleWrapper: {
    // @ts-ignore — web-only style
    transform: [{ scale: 0.88 }],
  },

  phone: {
    width: FRAME_W,
    height: FRAME_H,
    backgroundColor: '#1C1C1E',
    borderRadius: 56,
    // Outer gloss ring
    borderWidth: 1,
    borderColor: '#3A3A3C',
    // Shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 32 },
    shadowOpacity: 0.6,
    shadowRadius: 64,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },

  // ── Side buttons ──────────────────────────────────────────
  sideBtn: {
    position: 'absolute',
    backgroundColor: '#2C2C2E',
    borderRadius: 3,
  },
  muteBtn: {
    left: -4,
    top: 100,
    width: 4,
    height: 32,
  },
  volUpBtn: {
    left: -4,
    top: 152,
    width: 4,
    height: 60,
  },
  volDownBtn: {
    left: -4,
    top: 224,
    width: 4,
    height: 60,
  },
  powerBtn: {
    right: -4,
    top: 168,
    width: 4,
    height: 80,
  },

  // ── Screen ────────────────────────────────────────────────
  screen: {
    width: SCREEN_W,
    height: SCREEN_H,
    backgroundColor: '#000',
    borderRadius: 44,
    overflow: 'hidden',
    position: 'relative',
  },

  // Dynamic Island pill
  dynamicIsland: {
    position: 'absolute',
    top: 14,
    alignSelf: 'center',
    width: 120,
    height: 34,
    backgroundColor: '#000',
    borderRadius: 20,
    zIndex: 10,
  },

  // App content fills the screen but starts below the Dynamic Island area
  appContent: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  // Home indicator bar
  homeIndicator: {
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
    width: 134,
    height: 5,
    backgroundColor: 'rgba(255,255,255,0.4)',
    borderRadius: 3,
    zIndex: 10,
  },
});
