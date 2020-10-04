import * as React from 'react';
import ThemeProvider from '..';
import { floatingPanels } from '../../Themes';

function themeProviderWithMandatoryProps() {
  return <ThemeProvider />;
}

function themeProviderWithAllProps() {
  return (
    <ThemeProvider
      dataHook="dataHook"
      theme={{
        'color-00': '#FF0000',
        'color-05': '#FF0000',
        'color-10': '#FF0000',
        'color-20': '#FF0000',
        'color-30': '#FF0000',
        'color-40': '#FF0000',
        'color-50': '#FF0000',
        'color-60': '#FF0000',
      }}
    />
  );
}

function themeProviderWithFloatingPanelsTheme() {
  return (
    <ThemeProvider
      dataHook="dataHook"
      theme={floatingPanels({ mainColor: '#555555' })}
    />
  );
}
