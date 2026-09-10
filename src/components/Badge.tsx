import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Course } from '../types';
import { courseColors, radius, typography } from '../theme/theme';

interface Props {
  course: Course;
}

export default function Badge({ course }: Props) {
  const { bg, text } = courseColors(course);
  return (
    <View style={[styles.badge, { backgroundColor: bg }]}>
      <Text style={[styles.text, { color: text }]}>{course.toUpperCase()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: radius.sm,
    marginTop: 4,
  },
  text: {
    ...typography.label,
  },
});
