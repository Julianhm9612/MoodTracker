import React, { useMemo } from 'react';
import { Text, TextProps } from 'react-native';

import { theme } from '../theme';

type AppTextType = TextProps & {
  fontFamily: 'bold' | 'regular' | 'italic';
  size: 8 | 12 | 16;
}

export const AppText: React.FC<AppTextType> = ({ children, style, fontFamily, ...props }) => {
  const fontStyle = useMemo(() => {
    if (fontFamily === 'bold') {
      return { fontFamily: theme.fontFamilyBold }
    }
  }, [fontFamily])

  return (
    <Text style={[style, fontStyle]} {...props}>
      {children}
    </Text>
  )
}

