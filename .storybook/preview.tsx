import type { Preview } from '@storybook/react';
import { DensityProvider } from '../src/contexts/DensityContext';
import { ThemeProvider } from '../src/contexts/ThemeContext';
import '../src/themes';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const density = context.globals.density as 'comfortable' | 'compact' || 'comfortable';
      const theme = context.globals.theme as 'light' | 'dark' || 'light';
      
      return (
        <ThemeProvider defaultMode={theme}>
          <DensityProvider defaultMode={density}>
            <Story />
          </DensityProvider>
        </ThemeProvider>
      );
    },
  ],
  globalTypes: {
    density: {
      name: 'Density',
      description: 'Density mode',
      defaultValue: 'comfortable',
      toolbar: {
        icon: 'circlehollow',
        items: [
          { value: 'comfortable', title: 'Comfortable', icon: 'circle' },
          { value: 'compact', title: 'Compact', icon: 'circle' },
        ],
      },
    },
    theme: {
      name: 'Theme',
      description: 'Light/Dark theme',
      defaultValue: 'light',
      toolbar: {
        icon: 'sun',
        items: [
          { value: 'light', title: 'Light', icon: 'sun' },
          { value: 'dark', title: 'Dark', icon: 'moon' },
        ],
      },
    },
  },
};

export default preview;