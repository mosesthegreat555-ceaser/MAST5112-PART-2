import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import { DangerOutlineButton } from '../../components/Buttons';
import { colors, radius, spacing, typography } from '../../theme/theme';

type Props = NativeStackScreenProps<RootStackParamList, 'GuestSettings'>;

function SectionLabel({ children }: { children: string }) {
  return <Text style={styles.sectionLabel}>{children}</Text>;
}

function Row({
  label,
  value,
  showChevron,
}: {
  label: string;
  value: string;
  showChevron?: boolean;
}) {
  return (
    <View style={styles.row}>
      <Text style={styles.rowLabel}>{label}</Text>
      <View style={styles.rowValueContainer}>
        <Text style={styles.rowValue}>{value}</Text>
        {showChevron && <Ionicons name="chevron-forward" size={16} color={colors.textTertiary} />}
      </View>
    </View>
  );
}

export default function GuestSettingsScreen({ navigation }: Props) {
  const [darkMode, setDarkMode] = useState(true);
  const [notifications, setNotifications] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} hitSlop={10} style={styles.backRow}>
          <Ionicons name="chevron-back" size={20} color={colors.accent} />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Settings</Text>
        <View style={{ width: 50 }} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <SectionLabel>ACCOUNT</SectionLabel>
        <View style={styles.card}>
          <Row label="Guest Name" value="Guest User" />
          <View style={styles.divider} />
          <Row label="Email" value="guest@email.com" />
          <View style={styles.divider} />
          <Row label="Password" value="•••••••" />
        </View>

        <SectionLabel>PREFERENCES</SectionLabel>
        <View style={styles.card}>
          <View style={styles.row}>
            <Text style={styles.rowLabel}>Dark Mode</Text>
            <Switch
              value={darkMode}
              onValueChange={setDarkMode}
              trackColor={{ true: colors.accent, false: colors.cardBorder }}
              thumbColor={colors.white}
            />
          </View>
          <View style={styles.divider} />
          <View style={styles.row}>
            <Text style={styles.rowLabel}>Notifications</Text>
            <Switch
              value={notifications}
              onValueChange={setNotifications}
              trackColor={{ true: colors.accent, false: colors.cardBorder }}
              thumbColor={colors.white}
            />
          </View>
          <View style={styles.divider} />
          <Row label="Dietary Preferences" value="None" showChevron />
          <View style={styles.divider} />
          <Row label="Language" value="English" showChevron />
        </View>

        <SectionLabel>ABOUT</SectionLabel>
        <View style={styles.card}>
          <Row label="App Version" value="1.0.0" />
          <View style={styles.divider} />
          <Row label="Terms of Service" value="" showChevron />
          <View style={styles.divider} />
          <Row label="Privacy Policy" value="" showChevron />
        </View>

        <DangerOutlineButton
          title="Log Out"
          onPress={() => navigation.reset({ index: 0, routes: [{ name: 'RoleSelect' }] })}
          style={styles.logout}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
  },
  backRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 60,
  },
  backText: {
    color: colors.accent,
    ...typography.body,
    marginLeft: 2,
  },
  headerTitle: {
    ...typography.body,
    fontWeight: '700',
    fontSize: 17,
    color: colors.textPrimary,
  },
  content: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.xl,
  },
  sectionLabel: {
    ...typography.label,
    color: colors.accent,
    marginBottom: spacing.sm,
    marginTop: spacing.md,
  },
  card: {
    backgroundColor: colors.card,
    borderRadius: radius.lg,
    paddingHorizontal: spacing.md,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
  },
  rowLabel: {
    ...typography.body,
    color: colors.textPrimary,
  },
  rowValueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowValue: {
    ...typography.body,
    color: colors.textSecondary,
    marginRight: 4,
  },
  divider: {
    height: 1,
    backgroundColor: colors.divider,
  },
  logout: {
    marginTop: spacing.xl,
  },
});
