import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList, UserRole } from '../types';
import { PrimaryButton } from '../components/Buttons';
import { colors, radius, spacing, typography } from '../theme/theme';

type Props = NativeStackScreenProps<RootStackParamList, 'RoleSelect'>;

interface RoleOption {
  role: UserRole;
  title: string;
  icon: keyof typeof Ionicons.glyphMap;
  description: string;
  tags: string[];
}

const roleOptions: RoleOption[] = [
  {
    role: 'chef',
    title: 'Culinary Chef',
    icon: 'briefcase-outline',
    description:
      'Manage curated menus, add signature dishes, configure custom courses, and review private guest requests.',
    tags: ['Manage Menus', 'Add Dishes', 'View Items'],
  },
  {
    role: 'guest',
    title: 'Dining Guest',
    icon: 'restaurant-outline',
    description:
      'Browse exclusive dining menus, view ingredients, filter culinary selections by course, and place private requests.',
    tags: ['Browse Menus', 'View Dishes', 'Filter Courses'],
  },
];

export default function RoleSelectScreen({ navigation }: Props) {
  const [selectedRole, setSelectedRole] = useState<UserRole>('chef');

  const handleLogIn = () => {
    navigation.replace(selectedRole === 'chef' ? 'ChefHome' : 'GuestHome');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.iconCircle}>
          <Ionicons name="restaurant" size={28} color={colors.accent} />
        </View>
        <Text style={styles.title}>Chef Christoffel</Text>
        <Text style={styles.subtitle}>PRIVATE CULINARY MANAGEMENT</Text>

        <Text style={styles.sectionLabel}>SELECT YOUR PROFILE TO CONTINUE</Text>

        {roleOptions.map((option) => {
          const selected = selectedRole === option.role;
          return (
            <TouchableOpacity
              key={option.role}
              style={[styles.card, selected && styles.cardSelected]}
              onPress={() => setSelectedRole(option.role)}
              activeOpacity={0.85}
            >
              <View style={styles.cardHeader}>
                <View style={styles.cardHeaderLeft}>
                  <View style={styles.cardIcon}>
                    <Ionicons name={option.icon} size={20} color={colors.accent} />
                  </View>
                  <Text style={styles.cardTitle}>{option.title}</Text>
                </View>
                <Ionicons
                  name={selected ? 'radio-button-on' : 'radio-button-off'}
                  size={22}
                  color={selected ? colors.accent : colors.textTertiary}
                />
              </View>
              <Text style={styles.cardDescription}>{option.description}</Text>
              <View style={styles.tagRow}>
                {option.tags.map((tag) => (
                  <View key={tag} style={styles.tag}>
                    <Text style={styles.tagText}>{tag}</Text>
                  </View>
                ))}
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      <View style={styles.footer}>
        <PrimaryButton title="Log In" onPress={handleLogIn} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContent: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
    alignItems: 'center',
    paddingBottom: spacing.md,
  },
  iconCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    borderWidth: 1.5,
    borderColor: colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.sm,
  },
  title: {
    ...typography.h1,
    color: colors.textPrimary,
  },
  subtitle: {
    ...typography.label,
    color: colors.textSecondary,
    marginTop: 4,
    marginBottom: spacing.lg,
    letterSpacing: 1,
  },
  sectionLabel: {
    ...typography.label,
    color: colors.textSecondary,
    alignSelf: 'flex-start',
    marginBottom: spacing.sm,
  },
  card: {
    width: '100%',
    backgroundColor: colors.card,
    borderRadius: radius.lg,
    borderWidth: 1.5,
    borderColor: colors.cardBorder,
    padding: spacing.md,
    marginBottom: spacing.md,
  },
  cardSelected: {
    borderColor: colors.accent,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardIcon: {
    width: 36,
    height: 36,
    borderRadius: radius.sm,
    backgroundColor: colors.accentSoft,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.sm,
  },
  cardTitle: {
    ...typography.body,
    fontWeight: '700',
    color: colors.textPrimary,
  },
  cardDescription: {
    ...typography.body,
    fontSize: 14,
    color: colors.textSecondary,
    marginTop: spacing.sm,
    lineHeight: 20,
  },
  tagRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: spacing.sm,
  },
  tag: {
    backgroundColor: '#0F0F11',
    borderRadius: radius.sm,
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginRight: spacing.xs,
    marginBottom: spacing.xs,
  },
  tagText: {
    color: colors.textSecondary,
    fontSize: 12,
    fontWeight: '600',
  },
  footer: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.lg,
    paddingTop: spacing.sm,
  },
});
