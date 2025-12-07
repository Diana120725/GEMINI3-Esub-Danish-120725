export type Language = 'en' | 'zh';

export interface Theme {
  id: string;
  name: string; // Display name (e.g., 'Rose')
  colors: {
    primary: string; // Main background/header
    secondary: string; // Sidebar/accent
    text: string;
    border: string;
    gradientFrom: string;
    gradientTo: string;
    chartMain: string;
    chartSecond: string;
  };
  icon?: string;
}

export interface ChartDataPoint {
  name: string;
  value: number;
  secondaryValue?: number;
}

export interface Translation {
  [key: string]: {
    en: string;
    zh: string;
  };
}