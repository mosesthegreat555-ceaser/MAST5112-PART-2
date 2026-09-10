import React from 'react';
import { Alert, FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MenuItem, RootStackParamList } from '../../types';
import { useMenu } from '../../context/MenuContext';
import ScreenHeader from '../../components/ScreenHeader';
import Badge from '../../components/Badge';
import { colors, radius, spacing, typography } from '../../theme/theme';

type Props = NativeStackScreenProps<RootStackParamList, 'ManageMenu'>;

export default function ManageMenuScreen({ navigation }: Props) {
  const { menuItems, deleteMenuItem } = useMenu();

  const confirmDelete = (item: MenuItem) => {
    Alert.alert('Remove dish', `Remove "${item.name}" from the menu?`, [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Remove', style: 'destructive', onPress: () => deleteMenuItem(item.id) },
    ]);
  };

  const renderItem = ({ item }: { item: MenuItem }) => (
    <View style={styles.row}>
      <View>
        <Text style={styles.name}>{item.name}</Text>
        <View style={styles.metaRow}>
          <Badge course={item.course} />
          <Text style={styles.price}>R{item.price}</Text>
        </View>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity
          style={[styles.iconButton, styles.editButton]}
          onPress={() => navigation.navigate('AddMenuItem', { itemId: item.id })}
          hitSlop={8}
        >
          <Ionicons name="create-outline" size={18} color={colors.accent} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.iconButton, styles.deleteButton]}
          onPress={() => confirmDelete(item)}
          hitSlop={8}
        >
          <Ionicons name="trash-outline" size={18} color={colors.danger} />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScreenHeader
        title="Manage Menu"
        subtitle="Edit or Remove Dishes"
        onBack={() => navigation.goBack()}
        onSettings={() => navigation.navigate('ChefSettings')}
      />
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  listContent: {
    paddingHorizontal: spacing.lg,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing.md,
  },
  name: {
    ...typography.body,
    fontWeight: '700',
    color: colors.textPrimary,
    marginBottom: 6,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    ...typography.body,
    color: colors.accent,
    fontWeight: '600',
    marginLeft: spacing.sm,
  },
  actions: {
    flexDirection: 'row',
  },
  iconButton: {
    width: 36,
    height: 36,
    borderRadius: radius.pill,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: spacing.sm,
  },
  editButton: {
    backgroundColor: colors.accentSoft,
  },
  deleteButton: {
    backgroundColor: colors.dangerSoft,
  },
  separator: {
    height: 1,
    backgroundColor: colors.divider,
  },
});
