import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';

interface RankingItemProps {
  position: number;
  name: string;
  xp: number;
  avatar: string;
}

const RankingItem: React.FC<RankingItemProps> = ({ position, name, xp, avatar }) => (
  <View style={styles.rankingItem}>
    <Text style={styles.position}>{position}</Text>
    <Image source={{ uri: avatar }} style={styles.avatar} />
    <View style={styles.userInfo}>
      <Text style={styles.userName}>{name}</Text>
      <Text style={styles.userXP}>{xp} XP</Text>
    </View>
  </View>
);

const CommunityScreen = () => {
  const rankings = [
    {
      position: 1,
      name: 'João Silva',
      xp: 15000,
      avatar: 'https://i.pravatar.cc/150?img=1',
    },
    {
      position: 2,
      name: 'Maria Santos',
      xp: 12500,
      avatar: 'https://i.pravatar.cc/150?img=2',
    },
    {
      position: 3,
      name: 'Pedro Oliveira',
      xp: 10800,
      avatar: 'https://i.pravatar.cc/150?img=3',
    },
  ];

  const communities = [
    {
      name: 'Iniciantes Unidos',
      members: 1250,
      description: 'Grupo para quem está começando na jornada fitness',
    },
    {
      name: 'Yoga Lovers',
      members: 850,
      description: 'Compartilhe sua prática de yoga',
    },
    {
      name: 'Corrida & Cardio',
      members: 2100,
      description: 'Para amantes de exercícios aeróbicos',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Ranking Semanal */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🏆 Ranking Semanal</Text>
        <View style={styles.rankingContainer}>
          {rankings.map((item) => (
            <RankingItem key={item.position} {...item} />
          ))}
        </View>
      </View>

      {/* Comunidades */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>👥 Comunidades</Text>
        {communities.map((community, index) => (
          <TouchableOpacity key={index} style={styles.communityCard}>
            <View>
              <Text style={styles.communityName}>{community.name}</Text>
              <Text style={styles.communityMembers}>
                {community.members} membros
              </Text>
              <Text style={styles.communityDescription}>
                {community.description}
              </Text>
            </View>
            <TouchableOpacity style={styles.joinButton}>
              <Text style={styles.joinButtonText}>Participar</Text>
            </TouchableOpacity>
          </TouchableOpacity>
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
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  rankingContainer: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  rankingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  position: {
    fontSize: 18,
    fontWeight: 'bold',
    width: 30,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: '500',
  },
  userXP: {
    fontSize: 14,
    color: '#666',
  },
  communityCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 15,
    marginBottom: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  communityName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  communityMembers: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  communityDescription: {
    fontSize: 14,
    color: '#444',
    maxWidth: '80%',
  },
  joinButton: {
    backgroundColor: '#6C63FF',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
  },
  joinButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
});

export default CommunityScreen; 