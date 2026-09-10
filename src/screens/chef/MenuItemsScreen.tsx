import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MenuItem, RootStackParamList } from '../../types';
import { useMenu } from '../../context/MenuContext';
import ScreenHeader from '../../components/ScreenHeader';
import Badge from '../../components/Badge';
import { colors, spacing, typography } from '../../theme/theme';

type Props = NativeStackScreenProps<RootStackParamList, 'MenuItems'>;

export default function MenuItemsScreen({ navigation }: Props) {
  const { menuItems } = useMenu();

  const renderItem = ({ item }: { item: MenuItem }) => (
    <View style={styles.row}>
      <View>
        <Text style={styles.name}>{item.name}</Text>
        <Badge course={item.course} />
      </View>
      <Text style={styles.price}>R{item.price}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScreenHeader
        title="Menu Items"
        subtitle="Your Current Offerings"
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
    alignItems: 'flex-start',
    paddingVertical: spacing.md,
  },
  name: {
    ...typography.body,
    fontWeight: '700',
    color: colors.textPrimary,
    marginBottom: 4,
  },
  price: {
    ...typography.body,
    fontWeight: '700',
    color: colors.accent,
  },
  separator: {
    height: 1,
    backgroundColor: colors.divider,
  },
});
