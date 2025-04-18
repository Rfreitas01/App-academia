import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header com progresso diário */}
      <LinearGradient
        colors={['#6C63FF', '#3B3486']}
        style={styles.headerContainer}
      >
        <View style={styles.streakContainer}>
          <Text style={styles.streakText}>🔥 7 dias seguidos</Text>
          <Text style={styles.xpText}>Nível 5 • 2500 XP</Text>
        </View>
        <View style={styles.progressContainer}>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: '70%' }]} />
          </View>
          <Text style={styles.progressText}>350/500 XP para o próximo nível</Text>
        </View>
      </LinearGradient>

      {/* Desafio Diário */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Desafio Diário</Text>
        <TouchableOpacity style={styles.challengeCard}>
          <View style={styles.challengeContent}>
            <View style={styles.challengeInfo}>
              <Text style={styles.challengeTitle}>Treino Completo</Text>
              <Text style={styles.challengeDescription}>
                Complete 3 exercícios hoje para ganhar 100 XP extra!
              </Text>
            </View>
            <Text style={styles.challengeProgress}>1/3</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Próximos Treinos */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Próximos Treinos</Text>
        <TouchableOpacity style={styles.workoutCard}>
          <View style={styles.workoutContent}>
            <Text style={styles.workoutTitle}>Treino de Força</Text>
            <Text style={styles.workoutDuration}>20 min • 150 XP</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.workoutCard}>
          <View style={styles.workoutContent}>
            <Text style={styles.workoutTitle}>Yoga para Iniciantes</Text>
            <Text style={styles.workoutDuration}>15 min • 100 XP</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  headerContainer: {
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  streakContainer: {
    marginBottom: 15,
  },
  streakText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  xpText: {
    color: '#fff',
    fontSize: 16,
    marginTop: 5,
  },
  progressContainer: {
    marginTop: 10,
  },
  progressBar: {
    height: 10,
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 5,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#fff',
  },
  progressText: {
    color: '#fff',
    fontSize: 14,
    marginTop: 5,
  },
  sectionContainer: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  challengeCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  challengeContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  challengeInfo: {
    flex: 1,
  },
  challengeTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  challengeDescription: {
    fontSize: 14,
    color: '#666',
  },
  challengeProgress: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6C63FF',
  },
  workoutCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 15,
    marginBottom: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  workoutContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  workoutTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  workoutDuration: {
    fontSize: 14,
    color: '#666',
  },
});

export default HomeScreen; 