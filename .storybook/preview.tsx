import type { Preview } from '@storybook/react';
import { DensityProvider } from '../src/contexts/DensityContext';

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
      
      return (
        <DensityProvider defaultMode={density}>
          <div style={{ padding: '20px' }}>
            <Story />
          </div>
        </DensityProvider>
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
  },
};

export default preview;