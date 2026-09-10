import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import { OutlineButton } from '../../components/Buttons';
import { colors, radius, spacing, typography } from '../../theme/theme';

type Props = NativeStackScreenProps<RootStackParamList, 'GuestHome'>;

export default function GuestHomeScreen({ navigation }: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Chef Christoffel</Text>
          <Text style={styles.subtitle}>GUEST MENU</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('GuestSettings')} hitSlop={10}>
          <Ionicons name="settings-outline" size={22} color={colors.textSecondary} />
        </TouchableOpacity>
      </View>

      <View style={styles.welcomeCard}>
        <Text style={styles.welcomeTitle}>Welcome, Guest!</Text>
        <Text style={styles.welcomeBody}>Browse the curated seasonal menu below.</Text>
      </View>

      <View style={styles.iconWrap}>
        <View style={styles.iconCircle}>
          <Ionicons name="restaurant-outline" size={40} color={colors.accent} />
        </View>
      </View>

      <View style={styles.footer}>
        <OutlineButton
          title="Browse Menus"
          onPress={() => navigation.navigate('BrowseMenus')}
          style={styles.button}
        />
        <OutlineButton
          title="View Dishes"
          onPress={() => navigation.navigate('ViewDishes')}
          style={styles.button}
        />
        <OutlineButton
          title="Filter Courses"
          onPress={() => navigation.navigate('FilterCourses')}
          style={styles.button}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: spacing.lg,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingTop: spacing.sm,
  },
  title: {
    ...typography.h2,
    color: colors.textPrimary,
  },
  subtitle: {
    ...typography.label,
    color: colors.accent,
    marginTop: 2,
  },
  welcomeCard: {
    backgroundColor: colors.card,
    borderRadius: radius.lg,
    padding: spacing.lg,
    marginTop: spacing.lg,
  },
  welcomeTitle: {
    ...typography.body,
    fontWeight: '700',
    color: colors.textPrimary,
    textAlign: 'center',
    marginBottom: spacing.xs,
  },
  welcomeBody: {
    ...typography.body,
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: 'center',
  },
  iconWrap: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconCircle: {
    width: 100,
    height: 100,
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    paddingBottom: spacing.lg,
  },
  button: {
    marginBottom: spacing.md,
  },
});
