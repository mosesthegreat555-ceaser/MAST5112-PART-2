import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MenuItem, RootStackParamList } from '../../types';
import { useMenu } from '../../context/MenuContext';
import ScreenHeader from '../../components/ScreenHeader';
import { colors, radius, spacing, typography } from '../../theme/theme';

type Props = NativeStackScreenProps<RootStackParamList, 'ViewDishes'>;

export default function ViewDishesScreen({ navigation }: Props) {
  const { menuItems } = useMenu();

  const renderItem = ({ item }: { item: MenuItem }) => (
    <View style={styles.row}>
      <View>
        <Text style={styles.name}>{item.name}</Text>
        <View style={styles.courseTag}>
          <Text style={styles.courseText}>{item.course}</Text>
        </View>
      </View>
      <Text style={styles.price}>R{item.price}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScreenHeader
        title="View Dishes"
        subtitle="Full Dish Collection"
        onBack={() => navigation.goBack()}
        onSettings={() => navigation.navigate('GuestSettings')}
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
    marginBottom: 6,
  },
  courseTag: {
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderColor: colors.cardBorder,
    borderRadius: radius.sm,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  courseText: {
    color: colors.textSecondary,
    fontSize: 12,
    fontWeight: '600',
  },
  price: {
    ...typography.body,
    fontWeight: '700',
    color: colors.textPrimary,
  },
  separator: {
    height: 1,
    backgroundColor: colors.divider,
  },
});
