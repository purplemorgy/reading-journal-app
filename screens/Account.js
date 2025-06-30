import { signOut } from 'firebase/auth';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { auth } from '../firebase';

export default function AccountScreen() {
    const handleLogout = async () => {
        try {
          await signOut(auth);
          // Navigation happens automatically
        } catch (error) {
          Alert.alert('Error', error.message);
        }
      };

    return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>Welcome, Morgan</Text>
          <Text style={styles.subtitle}>Reader since 2025</Text>
        </View>
      </View>

      {/* Basic stats */}
      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>13</Text>
          <Text style={styles.statLabel}>Books Read</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>3</Text>
          <Text style={styles.statLabel}>Currently Reading</Text>
        </View>
      </View>

      {/* Setting selections */}
      <ScrollView style={styles.settingList}>
        <TouchableOpacity style={styles.settingItem}>
            <Text style={styles.settingText}>Account Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem}  onPress={handleLogout}>
            <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}



const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  header: {
    marginTop: 70,
    backgroundColor: '#8b6fc6',
    borderRadius: 20,
    padding: 20,
    flexDirection: 'row',
},
  headerTitle: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    color: 'white' 
},
  subtitle: { 
    color: 'white', 
    marginTop: 4 
},
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 24,
},
  statBox: {
    flex: 1,
    backgroundColor: '#f6f3fc',
    marginHorizontal: 6,
    padding: 16,
    borderRadius: 20,
    alignItems: 'center',
},
  statNumber: { 
    fontSize: 20, 
    fontWeight: 'bold', 
    color: '#8b6fc6' 
},
  statLabel: { 
    fontSize: 14, 
    color: '#555', 
    marginTop: 4 
},

  settingList: { marginTop: 10 },
  settingItem: {
    backgroundColor: '#f9f9f9',
    padding: 16,
    marginBottom: 10,
    borderRadius: 20,
},
  settingText: { 
    fontSize: 16, 
    color: '#333' 
},
logoutText: { 
    fontSize: 16, 
    color: '#e74c3c' 
},

});
