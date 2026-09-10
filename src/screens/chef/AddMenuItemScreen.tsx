import React, { useEffect, useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Course, RootStackParamList } from '../../types';
import { useMenu } from '../../context/MenuContext';
import ScreenHeader from '../../components/ScreenHeader';
import { PrimaryButton } from '../../components/Buttons';
import { colors, radius, spacing, typography } from '../../theme/theme';

type Props = NativeStackScreenProps<RootStackParamList, 'AddMenuItem'>;

const courses: Course[] = ['Starter', 'Main', 'Dessert'];

export default function AddMenuItemScreen({ navigation, route }: Props) {
  const { addMenuItem, updateMenuItem, getMenuItem } = useMenu();
  const editingId = route.params?.itemId;
  const editingItem = editingId ? getMenuItem(editingId) : undefined;

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState<Course>('Main');
  const [price, setPrice] = useState('');

  useEffect(() => {
    if (editingItem) {
      setName(editingItem.name);
      setDescription(editingItem.description);
      setCourse(editingItem.course);
      setPrice(String(editingItem.price));
    }
  }, [editingItem]);

  const handleSave = () => {
    const trimmedName = name.trim();
    const numericPrice = parseFloat(price.replace(/[^0-9.]/g, ''));

    if (!trimmedName) {
      Alert.alert('Dish name required', 'Please enter a name for the dish.');
      return;
    }
    if (Number.isNaN(numericPrice) || numericPrice <= 0) {
      Alert.alert('Invalid price', 'Please enter a valid price.');
      return;
    }

    const payload = {
      name: trimmedName,
      description: description.trim(),
      course,
      price: numericPrice,
    };

    if (editingId) {
      updateMenuItem(editingId, payload);
    } else {
      addMenuItem(payload);
    }

    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScreenHeader
        title={editingId ? 'Edit Menu Item' : 'Add Menu Item'}
        subtitle="Enter New Dish Details"
        onBack={() => navigation.goBack()}
      />

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
          <Text style={styles.sectionTitle}>Dish Information</Text>

          <Text style={styles.fieldLabel}>Dish Name</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g. Saffron Risotto"
            placeholderTextColor={colors.textTertiary}
            value={name}
            onChangeText={setName}
          />

          <Text style={styles.fieldLabel}>Description</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Short description of ingredients..."
            placeholderTextColor={colors.textTertiary}
            value={description}
            onChangeText={setDescription}
            multiline
            numberOfLines={4}
          />

          <Text style={styles.fieldLabel}>Course</Text>
          <View style={styles.segmentRow}>
            {courses.map((c) => {
              const selected = course === c;
              return (
                <TouchableOpacity
                  key={c}
                  style={[styles.segment, selected && styles.segmentSelected]}
                  onPress={() => setCourse(c)}
                  activeOpacity={0.8}
                >
                  <Text style={[styles.segmentText, selected && styles.segmentTextSelected]}>
                    {c}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>

          <Text style={styles.fieldLabel}>Price</Text>
          <TextInput
            style={styles.input}
            placeholder="R195"
            placeholderTextColor={colors.textTertiary}
            value={price}
            onChangeText={setPrice}
            keyboardType="numeric"
          />

          <PrimaryButton
            title="Save Menu Item"
            onPress={handleSave}
            style={styles.saveButton}
          />
        </ScrollView>
      </KeyboardAvoidingView>
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
    paddingBottom: spacing.xl,
  },
  sectionTitle: {
    ...typography.body,
    fontWeight: '700',
    color: colors.textPrimary,
    marginBottom: spacing.md,
  },
  fieldLabel: {
    ...typography.caption,
    color: colors.textSecondary,
    marginBottom: spacing.xs,
    marginTop: spacing.md,
  },
  input: {
    backgroundColor: colors.inputBackground,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.cardBorder,
    paddingHorizontal: spacing.md,
    paddingVertical: 12,
    color: colors.textPrimary,
    ...typography.body,
  },
  textArea: {
    minHeight: 90,
    textAlignVertical: 'top',
  },
  segmentRow: {
    flexDirection: 'row',
    backgroundColor: colors.inputBackground,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.cardBorder,
    padding: 4,
  },
  segment: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: radius.sm,
  },
  segmentSelected: {
    backgroundColor: colors.accent,
  },
  segmentText: {
    color: colors.textSecondary,
    fontWeight: '600',
  },
  segmentTextSelected: {
    color: colors.white,
  },
  saveButton: {
    marginTop: spacing.xl,
  },
});
