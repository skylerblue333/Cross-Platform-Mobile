import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, Pressable, View } from 'react-native';

import { initialSession, recordInteraction } from './src/session';

const App = () => {
  const [session, setSession] = useState(initialSession);

  const interact = () => {
    setSession((current) => recordInteraction(current, new Date()));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text accessibilityRole="header" style={styles.title}>Sky Mobile Shell</Text>
        <Text style={styles.subtitle}>A small verified React Native interaction shell</Text>

        <View style={styles.card}>
          <Text accessibilityLiveRegion="polite" style={styles.counterText}>
            Interactions: {session.interactions}
          </Text>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Record interaction"
            style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
            onPress={interact}
          >
            <Text style={styles.buttonText}>Engage</Text>
          </Pressable>
          <Text style={styles.metaText}>
            {session.lastInteractionAt ? `Last interaction: ${session.lastInteractionAt}` : 'No interactions recorded yet'}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  content: { flex: 1, padding: 20, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 28, fontWeight: 'bold', color: '#222', marginBottom: 10 },
  subtitle: { fontSize: 16, color: '#555', marginBottom: 40, textAlign: 'center' },
  card: { backgroundColor: 'white', padding: 30, borderRadius: 12, alignItems: 'center', width: '100%' },
  counterText: { fontSize: 24, marginBottom: 20, color: '#333' },
  button: { backgroundColor: '#005FCC', paddingHorizontal: 30, paddingVertical: 15, borderRadius: 8 },
  buttonPressed: { opacity: 0.75 },
  buttonText: { color: 'white', fontSize: 18, fontWeight: '600' },
  metaText: { marginTop: 20, fontSize: 12, color: '#555', textAlign: 'center' },
});

export default App;
