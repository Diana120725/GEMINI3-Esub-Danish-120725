import { Theme, Translation } from './types';

// --- THEMES (20 GUBI-Inspired Styles) ---
// Palettes are muted, using Stone/Zinc neutrals + Rich Jewel Tones
export const THEMES: Theme[] = [
  {
    id: 'rose',
    name: 'Antique Rose',
    colors: { primary: 'bg-stone-50', secondary: 'bg-rose-900', text: 'text-rose-950', border: 'border-rose-100', gradientFrom: 'from-rose-800', gradientTo: 'to-stone-700', chartMain: '#be123c', chartSecond: '#e7e5e4' }
  },
  {
    id: 'lily',
    name: 'Marble Lily',
    colors: { primary: 'bg-white', secondary: 'bg-emerald-900', text: 'text-emerald-950', border: 'border-stone-200', gradientFrom: 'from-emerald-800', gradientTo: 'to-stone-600', chartMain: '#064e3b', chartSecond: '#d1fae5' }
  },
  {
    id: 'sunflower',
    name: 'Ochre Sun',
    colors: { primary: 'bg-amber-50', secondary: 'bg-amber-800', text: 'text-amber-950', border: 'border-amber-200', gradientFrom: 'from-amber-700', gradientTo: 'to-stone-600', chartMain: '#b45309', chartSecond: '#fde68a' }
  },
  {
    id: 'lavender',
    name: 'Dusty Lavender',
    colors: { primary: 'bg-stone-50', secondary: 'bg-slate-700', text: 'text-slate-800', border: 'border-slate-200', gradientFrom: 'from-slate-600', gradientTo: 'to-purple-900', chartMain: '#475569', chartSecond: '#c4b5fd' }
  },
  {
    id: 'sakura',
    name: 'Pale Sakura',
    colors: { primary: 'bg-rose-50', secondary: 'bg-stone-600', text: 'text-stone-800', border: 'border-rose-100', gradientFrom: 'from-stone-500', gradientTo: 'to-rose-400', chartMain: '#9f1239', chartSecond: '#fecdd3' }
  },
  {
    id: 'orchid',
    name: 'Midnight Orchid',
    colors: { primary: 'bg-slate-50', secondary: 'bg-fuchsia-900', text: 'text-slate-900', border: 'border-slate-200', gradientFrom: 'from-fuchsia-900', gradientTo: 'to-slate-800', chartMain: '#701a75', chartSecond: '#e2e8f0' }
  },
  {
    id: 'tulip',
    name: 'Burnt Tulip',
    colors: { primary: 'bg-orange-50', secondary: 'bg-orange-900', text: 'text-stone-900', border: 'border-orange-200', gradientFrom: 'from-orange-800', gradientTo: 'to-stone-700', chartMain: '#c2410c', chartSecond: '#ffedd5' }
  },
  {
    id: 'daisy',
    name: 'Linen Daisy',
    colors: { primary: 'bg-lime-50', secondary: 'bg-lime-900', text: 'text-stone-800', border: 'border-lime-200', gradientFrom: 'from-lime-800', gradientTo: 'to-stone-600', chartMain: '#3f6212', chartSecond: '#ecfccb' }
  },
  {
    id: 'bluebell',
    name: 'Nordic Blue',
    colors: { primary: 'bg-slate-50', secondary: 'bg-sky-900', text: 'text-slate-900', border: 'border-slate-200', gradientFrom: 'from-sky-900', gradientTo: 'to-slate-600', chartMain: '#0c4a6e', chartSecond: '#bae6fd' }
  },
  {
    id: 'violet',
    name: 'Royal Violet',
    colors: { primary: 'bg-violet-50', secondary: 'bg-violet-900', text: 'text-violet-950', border: 'border-violet-200', gradientFrom: 'from-violet-900', gradientTo: 'to-stone-800', chartMain: '#4c1d95', chartSecond: '#ddd6fe' }
  },
  {
    id: 'jasmine',
    name: 'Silk Jasmine',
    colors: { primary: 'bg-emerald-50', secondary: 'bg-teal-800', text: 'text-teal-950', border: 'border-emerald-100', gradientFrom: 'from-teal-800', gradientTo: 'to-stone-600', chartMain: '#115e59', chartSecond: '#ccfbf1' }
  },
  {
    id: 'poppy',
    name: 'Crimson Poppy',
    colors: { primary: 'bg-red-50', secondary: 'bg-red-900', text: 'text-red-950', border: 'border-red-100', gradientFrom: 'from-red-900', gradientTo: 'to-stone-800', chartMain: '#7f1d1d', chartSecond: '#fecaca' }
  },
  {
    id: 'lotus',
    name: 'Blush Lotus',
    colors: { primary: 'bg-pink-50', secondary: 'bg-pink-900', text: 'text-stone-800', border: 'border-pink-100', gradientFrom: 'from-pink-800', gradientTo: 'to-stone-500', chartMain: '#831843', chartSecond: '#fce7f3' }
  },
  {
    id: 'dandelion',
    name: 'Mustard Dandelion',
    colors: { primary: 'bg-yellow-50', secondary: 'bg-yellow-800', text: 'text-yellow-950', border: 'border-yellow-200', gradientFrom: 'from-yellow-700', gradientTo: 'to-stone-600', chartMain: '#a16207', chartSecond: '#fef08a' }
  },
  {
    id: 'hydrangea',
    name: 'Slate Hydrangea',
    colors: { primary: 'bg-indigo-50', secondary: 'bg-indigo-900', text: 'text-indigo-950', border: 'border-indigo-100', gradientFrom: 'from-indigo-800', gradientTo: 'to-slate-600', chartMain: '#312e81', chartSecond: '#e0e7ff' }
  },
  {
    id: 'peony',
    name: 'Velvet Peony',
    colors: { primary: 'bg-fuchsia-50', secondary: 'bg-fuchsia-900', text: 'text-stone-900', border: 'border-fuchsia-100', gradientFrom: 'from-fuchsia-900', gradientTo: 'to-stone-700', chartMain: '#701a75', chartSecond: '#fae8ff' }
  },
  {
    id: 'iris',
    name: 'Deep Iris',
    colors: { primary: 'bg-blue-50', secondary: 'bg-blue-950', text: 'text-blue-950', border: 'border-blue-100', gradientFrom: 'from-blue-900', gradientTo: 'to-slate-700', chartMain: '#172554', chartSecond: '#dbeafe' }
  },
  {
    id: 'marigold',
    name: 'Terracotta',
    colors: { primary: 'bg-orange-50', secondary: 'bg-orange-800', text: 'text-stone-800', border: 'border-orange-200', gradientFrom: 'from-orange-800', gradientTo: 'to-stone-600', chartMain: '#9a3412', chartSecond: '#ffedd5' }
  },
  {
    id: 'magnolia',
    name: 'Pure Magnolia',
    colors: { primary: 'bg-stone-100', secondary: 'bg-stone-600', text: 'text-stone-800', border: 'border-stone-200', gradientFrom: 'from-stone-500', gradientTo: 'to-stone-400', chartMain: '#57534e', chartSecond: '#e7e5e4' }
  },
  {
    id: 'bamboo',
    name: 'Forest Bamboo',
    colors: { primary: 'bg-green-50', secondary: 'bg-green-900', text: 'text-green-950', border: 'border-green-100', gradientFrom: 'from-green-900', gradientTo: 'to-stone-700', chartMain: '#14532d', chartSecond: '#dcfce7' }
  },
];

// --- TRANSLATIONS ---
export const TEXTS: Translation = {
  dashboardTitle: { en: "Medical Device e-Submission System", zh: "醫療器材查驗登記電子化送件系統" },
  dashboardSubtitle: { en: "Smart, Energy-saving, Convenient & AI embedded", zh: "智慧 節能 便捷 & AI embedded" },
  applicants: { en: "Applicants", zh: "申請廠商數量" },
  submissions: { en: "e-Submissions", zh: "電子化送件數量" },
  rate: { en: "e-Submission Rate", zh: "電子化送件比例" },
  timelineTitle: { en: "Timeline of Enhancements", zh: "歷年系統功能精進" },
  year2022: { en: "2022 (Year 111)", zh: "111年" },
  year2023: { en: "2023 (Year 112)", zh: "112年" },
  year2024: { en: "2024 (Year 113)", zh: "113年" },
  year2025: { en: "2025 (Year 114)", zh: "114年" },
  desc2022: { en: "Launch of e-submission for Class 2 & 3 devices.", zh: "開始提供第二、三等級查驗登記電子化送件服務。" },
  desc2023: { en: "Introduction of 'Offline Mode'.", zh: "提供”離線版”申請模式。" },
  desc2024: { en: "Comprehensive UI/UX optimization.", zh: "全面升級優化審查流程與操作介面。" },
  desc2025: { en: "Launch of Class 1 e-submission & Smart Mode.", zh: "開始提供第一等級查驗登記電子化送件服務。提供智慧申請模式。" },
  futurePlanTitle: { en: "Future Plans", zh: "後續推動規劃" },
  jan2025: { en: "Jan 1, 2025: No physical copies for supplements.", zh: "114年1月1日：補件案無須檢附正本者，免附補件公文" },
  jul2025: { en: "Jul 1, 2025: Mandatory e-submission for Class 2 & 3.", zh: "114年7月1日：第二、三等級申請案全面使用電子化送件" },
  comparisonTitle: { en: "Electronic vs Paper Submission", zh: "電子化 vs 紙本送件比較" },
  growthTitle: { en: "Annual Growth", zh: "各年度案件增加情形" },
  distributionTitle: { en: "Submission Type Distribution", zh: "各類申請案件數量分布" },
  workflowTitle: { en: "Workflow", zh: "電子化送件流程" },
  luckyWheel: { en: "Design Palette", zh: "風格轉盤" },
  spin: { en: "Spin", zh: "旋轉" },
  sidebarHide: { en: "Hide", zh: "隱藏" },
  sidebarShow: { en: "Menu", zh: "選單" },
  registration: { en: "Registration", zh: "查登案" },
  variation: { en: "Variation", zh: "變更案" },
  extension: { en: "Extension", zh: "展延案" },
  electronic: { en: "Electronic", zh: "電子化" },
  paper: { en: "Paper", zh: "紙本" },
  manufacturers: { en: "Manufacturers", zh: "醫療器材商" },
  fda: { en: "TFDA", zh: "食品藥物管理署" },
  apply: { en: "Apply", zh: "線上申請" },
  review: { en: "Review", zh: "線上審查" },
  database: { en: "Data Center", zh: "資料中心" },
  security: { en: "Security", zh: "資訊安全" },
  approval: { en: "License", zh: "核准許可證" },
};

// --- DATA ---
export const STATS_DATA = [
  { labelKey: 'applicants', value: 753, suffix: '', icon: 'Building' },
  { labelKey: 'submissions', value: 4225, suffix: '', icon: 'FileText' },
  { labelKey: 'rate', value: 43, suffix: '%', icon: 'PieChart' },
];

export const COMPARISON_DATA = [
  { name: 'registration', electronic: 1322, paper: 1928 },
  { name: 'variation', electronic: 1160, paper: 4146 },
  { name: 'extension', electronic: 1211, paper: 3282 },
];

export const GROWTH_DATA = [
  { year: '2022', count: 709 },
  { year: '2023', count: 1434 },
  { year: '2024', count: 2082 },
  { year: '2025 (Est)', count: 2415 }, // Requested addition
];

export const PIE_DATA = [
  { name: 'registration', value: 39.17 },
  { name: 'variation', value: 32 },
  { name: 'extension', value: 28.83 },
];

export const WORKFLOW_STEPS = [
  { id: 1, titleKey: 'apply', icon: 'Monitor' },
  { id: 2, titleKey: 'review', icon: 'Search' },
  { id: 3, titleKey: 'approval', icon: 'CheckCircle' },
];