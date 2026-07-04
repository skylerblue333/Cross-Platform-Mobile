import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Scalable Mobile App</Text>
        <Text style={styles.subtitle}>Cross-Platform Architecture</Text>
        
        <View style={styles.card}>
          <Text style={styles.counterText}>Interactions: {count}</Text>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => setCount(c => c + 1)}
          >
            <Text style={styles.buttonText}>Engage</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  content: { flex: 1, padding: 20, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 28, fontWeight: 'bold', color: '#333', marginBottom: 10 },
  subtitle: { fontSize: 16, color: '#666', marginBottom: 40 },
  card: { backgroundColor: 'white', padding: 30, borderRadius: 12, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 10, elevation: 5, alignItems: 'center', width: '100%' },
  counterText: { fontSize: 24, marginBottom: 20, color: '#444' },
  button: { backgroundColor: '#007AFF', paddingHorizontal: 30, paddingVertical: 15, borderRadius: 8 },
  buttonText: { color: 'white', fontSize: 18, fontWeight: '600' }
});

export default App;
