import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface Achievement {
  id: number;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
}

const ProfileScreen = () => {
  const userStats = {
    name: 'Ana Paula',
    level: 15,
    xp: 7500,
    nextLevelXp: 10000,
    streak: 12,
    totalWorkouts: 45,
    totalMinutes: 840,
    avatar: 'https://i.pravatar.cc/150?img=5',
  };

  const achievements: Achievement[] = [
    {
      id: 1,
      title: 'Primeira Vitória',
      description: 'Complete seu primeiro treino',
      icon: '🎯',
      unlocked: true,
    },
    {
      id: 2,
      title: 'Guerreiro Dedicado',
      description: '7 dias seguidos de treino',
      icon: '🔥',
      unlocked: true,
    },
    {
      id: 3,
      title: 'Mestre do Fitness',
      description: 'Complete 50 treinos',
      icon: '💪',
      unlocked: false,
    },
  ];

  const calculateProgress = () => {
    return ((userStats.xp - 0) / (userStats.nextLevelXp - 0)) * 100;
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header com informações do usuário */}
      <LinearGradient
        colors={['#6C63FF', '#3B3486']}
        style={styles.header}
      >
        <Image source={{ uri: userStats.avatar }} style={styles.avatar} />
        <Text style={styles.userName}>{userStats.name}</Text>
        <Text style={styles.userLevel}>Nível {userStats.level}</Text>
        
        <View style={styles.progressContainer}>
          <View style={styles.progressBar}>
            <View
              style={[styles.progressFill, { width: `${calculateProgress()}%` }]}
            />
          </View>
          <Text style={styles.progressText}>
            {userStats.xp} / {userStats.nextLevelXp} XP
          </Text>
        </View>
      </LinearGradient>

      {/* Estatísticas */}
      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>{userStats.streak}</Text>
          <Text style={styles.statLabel}>Dias Seguidos</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>{userStats.totalWorkouts}</Text>
          <Text style={styles.statLabel}>Total de Treinos</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>{userStats.totalMinutes}</Text>
          <Text style={styles.statLabel}>Minutos Totais</Text>
        </View>
      </View>

      {/* Conquistas */}
      <View style={styles.achievementsContainer}>
        <Text style={styles.sectionTitle}>Conquistas</Text>
        {achievements.map((achievement) => (
          <View
            key={achievement.id}
            style={[
              styles.achievementCard,
              !achievement.unlocked && styles.achievementLocked,
            ]}
          >
            <Text style={styles.achievementIcon}>{achievement.icon}</Text>
            <View style={styles.achievementInfo}>
              <Text style={styles.achievementTitle}>{achievement.title}</Text>
              <Text style={styles.achievementDescription}>
                {achievement.description}
              </Text>
            </View>
            {!achievement.unlocked && (
              <View style={styles.lockIcon}>
                <Text>🔒</Text>
              </View>
            )}
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 20,
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    borderWidth: 3,
    borderColor: '#fff',
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  userLevel: {
    fontSize: 18,
    color: '#fff',
    opacity: 0.9,
    marginBottom: 15,
  },
  progressContainer: {
    width: '100%',
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
    textAlign: 'center',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
    margin: 5,
    borderRadius: 15,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6C63FF',
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    marginTop: 5,
  },
  achievementsContainer: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  achievementCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 15,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  achievementLocked: {
    opacity: 0.7,
  },
  achievementIcon: {
    fontSize: 24,
    marginRight: 15,
  },
  achievementInfo: {
    flex: 1,
  },
  achievementTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  achievementDescription: {
    fontSize: 14,
    color: '#666',
  },
  lockIcon: {
    marginLeft: 10,
  },
});

export default ProfileScreen; 