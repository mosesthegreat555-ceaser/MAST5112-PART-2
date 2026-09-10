import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import ScreenHeader from '../../components/ScreenHeader';
import { OutlineButton, PrimaryButton } from '../../components/Buttons';
import { colors, radius, spacing, typography } from '../../theme/theme';

type Props = NativeStackScreenProps<RootStackParamList, 'ChefHome'>;

export default function ChefHomeScreen({ navigation }: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <ScreenHeader
        title="Chef Christoffel"
        subtitle="Private Culinary Management"
        onSettings={() => navigation.navigate('ChefSettings')}
      />

      <View style={styles.content}>
        <View style={styles.welcomeCard}>
          <Text style={styles.welcomeTitle}>Welcome, Chef!</Text>
          <Text style={styles.welcomeBody}>
            Manage your exclusive menu for private culinary events. Add new dishes or view your
            current offerings.
          </Text>
        </View>

        <PrimaryButton
          title="Add Menu Item"
          onPress={() => navigation.navigate('AddMenuItem')}
          style={styles.button}
        />
        <OutlineButton
          title="View Menu Items"
          onPress={() => navigation.navigate('MenuItems')}
          style={styles.button}
        />
        <OutlineButton
          title="Manage Menu"
          onPress={() => navigation.navigate('ManageMenu')}
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
  },
  content: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.sm,
  },
  welcomeCard: {
    backgroundColor: colors.card,
    borderRadius: radius.lg,
    padding: spacing.lg,
    marginBottom: spacing.xl,
  },
  welcomeTitle: {
    ...typography.h2,
    color: colors.textPrimary,
    textAlign: 'center',
    marginBottom: spacing.sm,
  },
  welcomeBody: {
    ...typography.body,
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: 20,
  },
  button: {
    marginBottom: spacing.md,
  },
});
