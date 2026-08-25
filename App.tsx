import React, { useReducer } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { DEFAULT_SESSION, progressPercent, reduceSession } from './src/session';

const App = () => {
  const [session, dispatch] = useReducer(reduceSession, DEFAULT_SESSION);
  const progress = progressPercent(session);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text accessibilityRole="header" style={styles.title}>Sky Mobile Interaction Lab</Text>
        <Text style={styles.subtitle}>A small React Native state and accessibility exercise</Text>

        <View accessibilityLabel="Interaction progress" style={styles.card}>
          <Text style={styles.counterText}>Interactions: {session.interactions}</Text>
          <Text accessibilityLiveRegion="polite" style={styles.progressText}>
            Goal {session.goal} · {progress}% complete
          </Text>

          <TouchableOpacity
            accessibilityRole="button"
            accessibilityLabel="Add one interaction"
            style={styles.button}
            onPress={() => dispatch({ type: 'increment' })}
          >
            <Text style={styles.buttonText}>Add interaction</Text>
          </TouchableOpacity>

          <TouchableOpacity
            accessibilityRole="button"
            accessibilityLabel="Reset interaction count"
            style={styles.secondaryButton}
            onPress={() => dispatch({ type: 'reset' })}
          >
            <Text style={styles.secondaryButtonText}>Reset</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  content: { flex: 1, padding: 20, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 28, fontWeight: 'bold', color: '#333', marginBottom: 10, textAlign: 'center' },
  subtitle: { fontSize: 16, color: '#666', marginBottom: 40, textAlign: 'center' },
  card: {
    backgroundColor: 'white',
    padding: 30,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    alignItems: 'center',
    width: '100%',
  },
  counterText: { fontSize: 24, marginBottom: 8, color: '#444' },
  progressText: { fontSize: 16, marginBottom: 20, color: '#555' },
  button: { backgroundColor: '#007AFF', paddingHorizontal: 30, paddingVertical: 15, borderRadius: 8 },
  buttonText: { color: 'white', fontSize: 18, fontWeight: '600' },
  secondaryButton: { paddingHorizontal: 30, paddingVertical: 15, marginTop: 10 },
  secondaryButtonText: { color: '#333', fontSize: 16, fontWeight: '600' },
});

export default App;
