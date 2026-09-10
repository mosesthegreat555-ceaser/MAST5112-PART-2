import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import { colors, radius, typography } from '../theme/theme';

interface ButtonProps {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
  disabled?: boolean;
  loading?: boolean;
}

export function PrimaryButton({ title, onPress, style, disabled, loading }: ButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.primary, disabled && styles.disabled, style]}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}
    >
      {loading ? (
        <ActivityIndicator color={colors.white} />
      ) : (
        <Text style={styles.primaryText}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}

export function OutlineButton({ title, onPress, style, disabled }: ButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.outline, disabled && styles.disabled, style]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}
    >
      <Text style={styles.outlineText}>{title}</Text>
    </TouchableOpacity>
  );
}

export function DangerOutlineButton({ title, onPress, style }: ButtonProps) {
  return (
    <TouchableOpacity style={[styles.dangerOutline, style]} onPress={onPress} activeOpacity={0.8}>
      <Text style={styles.dangerOutlineText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  primary: {
    backgroundColor: colors.accent,
    paddingVertical: 16,
    borderRadius: radius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryText: {
    color: colors.white,
    ...typography.body,
    fontWeight: '700',
  },
  outline: {
    borderWidth: 1.5,
    borderColor: colors.accent,
    paddingVertical: 16,
    borderRadius: radius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  outlineText: {
    color: colors.accent,
    ...typography.body,
    fontWeight: '700',
  },
  dangerOutline: {
    borderWidth: 1.5,
    borderColor: colors.danger,
    paddingVertical: 16,
    borderRadius: radius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dangerOutlineText: {
    color: colors.danger,
    ...typography.body,
    fontWeight: '700',
  },
  disabled: {
    opacity: 0.5,
  },
});
