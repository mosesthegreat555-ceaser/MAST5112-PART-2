import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import { DangerOutlineButton } from '../../components/Buttons';
import { colors, radius, spacing, typography } from '../../theme/theme';

type Props = NativeStackScreenProps<RootStackParamList, 'ChefSettings'>;

function SectionLabel({ children }: { children: string }) {
  return <Text style={styles.sectionLabel}>{children}</Text>;
}

function Row({
  label,
  value,
  onPress,
  showChevron,
}: {
  label: string;
  value: string;
  onPress?: () => void;
  showChevron?: boolean;
}) {
  const Wrapper: any = onPress ? TouchableOpacity : View;
  return (
    <Wrapper style={styles.row} onPress={onPress} activeOpacity={0.7}>
      <Text style={styles.rowLabel}>{label}</Text>
      <View style={styles.rowValueContainer}>
        <Text style={styles.rowValue}>{value}</Text>
        {showChevron && <Ionicons name="chevron-forward" size={16} color={colors.textTertiary} />}
      </View>
    </Wrapper>
  );
}

export default function ChefSettingsScreen({ navigation }: Props) {
  const [darkMode, setDarkMode] = useState(true);
  const [notifications, setNotifications] = useState(true);

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
        <View style={styles.profileCard}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>CC</Text>
          </View>
          <View>
            <Text style={styles.profileName}>Chef Christoffel</Text>
            <Text style={styles.profileSubtitle}>Culinary Private Management App</Text>
          </View>
        </View>

        <SectionLabel>ACCOUNT</SectionLabel>
        <View style={styles.card}>
          <Row label="Profile Name" value="Chef Christoffel" />
          <View style={styles.divider} />
          <Row label="Email" value="chef@christoffel.co.za" />
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
  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.card,
    borderRadius: radius.lg,
    padding: spacing.md,
    marginBottom: spacing.lg,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.md,
  },
  avatarText: {
    color: colors.white,
    fontWeight: '700',
  },
  profileName: {
    ...typography.body,
    fontWeight: '700',
    color: colors.textPrimary,
  },
  profileSubtitle: {
    ...typography.caption,
    color: colors.textSecondary,
    marginTop: 2,
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
