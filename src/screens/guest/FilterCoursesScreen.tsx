import React, { useMemo, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Course, MenuItem, RootStackParamList } from '../../types';
import { useMenu } from '../../context/MenuContext';
import ScreenHeader from '../../components/ScreenHeader';
import { colors, radius, spacing, typography } from '../../theme/theme';

type Props = NativeStackScreenProps<RootStackParamList, 'FilterCourses'>;

type FilterOption = 'All' | Course;
const filters: FilterOption[] = ['All', 'Starter', 'Main', 'Dessert'];
const filterLabels: Record<FilterOption, string> = {
  All: 'All',
  Starter: 'Starters',
  Main: 'Mains',
  Dessert: 'Desserts',
};

export default function FilterCoursesScreen({ navigation }: Props) {
  const { menuItems } = useMenu();
  const [activeFilter, setActiveFilter] = useState<FilterOption>('Starter');

  const filteredItems = useMemo(() => {
    if (activeFilter === 'All') return menuItems;
    return menuItems.filter((item) => item.course === activeFilter);
  }, [activeFilter, menuItems]);

  const renderItem = ({ item }: { item: MenuItem }) => (
    <View style={styles.card}>
      <View style={styles.cardTop}>
        <Text style={styles.cardTitle}>{item.name}</Text>
        <Text style={styles.cardPrice}>R{item.price}</Text>
      </View>
      <Text style={styles.cardDescription}>{item.description}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScreenHeader
        title="Filter Courses"
        subtitle="Browse by Category"
        onBack={() => navigation.goBack()}
        onSettings={() => navigation.navigate('GuestSettings')}
      />

      <View style={styles.filterRow}>
        {filters.map((f) => {
          const selected = activeFilter === f;
          return (
            <TouchableOpacity
              key={f}
              style={[styles.filterChip, selected && styles.filterChipSelected]}
              onPress={() => setActiveFilter(f)}
              activeOpacity={0.8}
            >
              <Text style={[styles.filterText, selected && styles.filterTextSelected]}>
                {filterLabels[f]}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <FlatList
        data={filteredItems}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
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
  filterRow: {
    flexDirection: 'row',
    paddingHorizontal: spacing.lg,
    marginBottom: spacing.md,
  },
  filterChip: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: radius.pill,
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.cardBorder,
    marginRight: spacing.sm,
  },
  filterChipSelected: {
    backgroundColor: colors.accent,
    borderColor: colors.accent,
  },
  filterText: {
    ...typography.caption,
    color: colors.textSecondary,
  },
  filterTextSelected: {
    color: colors.white,
  },
  listContent: {
    paddingHorizontal: spacing.lg,
  },
  card: {
    backgroundColor: colors.card,
    borderRadius: radius.lg,
    padding: spacing.md,
    marginBottom: spacing.md,
  },
  cardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardTitle: {
    ...typography.body,
    fontWeight: '700',
    color: colors.textPrimary,
  },
  cardPrice: {
    ...typography.body,
    fontWeight: '700',
    color: colors.accent,
  },
  cardDescription: {
    ...typography.body,
    fontSize: 14,
    color: colors.textSecondary,
    marginTop: spacing.sm,
    lineHeight: 20,
  },
});
