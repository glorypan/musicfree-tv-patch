import React, { useState } from 'react';
import { View, StyleSheet, ViewStyle, Pressable } from 'react-native';
import rpx from '@/utils/rpx';

interface IFocusableItemProps {
  children: React.ReactNode;
  onPress?: () => void;
  onLongPress?: () => void;
  style?: ViewStyle;
  disabled?: boolean;
}

export default function FocusableItem(props: IFocusableItemProps) {
  const { children, onPress, onLongPress, style, disabled } = props;
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      onLongPress={onLongPress}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      style={[style, isFocused && styles.focus]}
    >
      {children}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  focus: {
    borderWidth: rpx(4),
    borderColor: '#4096ff',
    borderRadius: rpx(12),
  },
});
