import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, 
  PieChart, Pie, Cell 
} from 'recharts';
import { Building, FileText, PieChart as PieIcon, ArrowRight, Zap, CheckCircle, Database, Shield, Monitor } from 'lucide-react';
import { Theme, Language } from '../types';
import { TEXTS, STATS_DATA, COMPARISON_DATA, GROWTH_DATA, PIE_DATA } from '../constants';

interface DashboardProps {
  theme: Theme;
  lang: Language;
}

const Dashboard: React.FC<DashboardProps> = ({ theme, lang }) => {
  
  // Helper to get translated string for chart keys
  const t = (key: string) => TEXTS[key] ? TEXTS[key][lang] : key;

  return (
    <div className={`min-h-screen ${theme.colors.primary} transition-colors duration-1000 p-6 md:p-12 pt-24`}>
      
      {/* Header Section */}
      <header className="mb-16 text-center max-w-4xl mx-auto">
        <h1 className={`text-4xl md:text-6xl font-serif font-bold mb-6 tracking-tight ${theme.colors.text}`}>
          {t('dashboardTitle')}
        </h1>
        <div className="w-24 h-1 bg-[#B58D3D] mx-auto mb-6 opacity-80"></div> {/* Brass Accent */}
        <p className={`text-lg md:text-xl font-light tracking-wide opacity-80 ${theme.colors.text}`}>
          {t('dashboardSubtitle')}
        </p>
      </header>

      {/* Key Stats Cards - GUBI Style: Clean, Muted, Elegant */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {STATS_DATA.map((stat, idx) => (
          <div key={idx} className={`bg-white/90 backdrop-blur-sm rounded-[2rem] p-8 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-stone-100 relative overflow-hidden group hover:shadow-lg transition-all duration-500`}>
            {/* Subtle Gradient Overlay */}
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${theme.colors.gradientFrom} ${theme.colors.gradientTo} opacity-5 rounded-full blur-3xl -mr-10 -mt-10 group-hover:opacity-10 transition-opacity`} />
            
            <div className="flex flex-col items-center text-center relative z-10">
              <div className={`p-4 rounded-full mb-4 bg-stone-50 ${theme.colors.text}`}>
                {stat.icon === 'Building' && <Building size={28} strokeWidth={1.5} />}
                {stat.icon === 'FileText' && <FileText size={28} strokeWidth={1.5} />}
                {stat.icon === 'PieChart' && <PieIcon size={28} strokeWidth={1.5} />}
              </div>
              <span className={`text-5xl font-serif font-bold mb-2 ${theme.colors.text}`}>
                {stat.value.toLocaleString()}<span className="text-3xl font-light opacity-60 ml-1">{stat.suffix}</span>
              </span>
              <h3 className="text-stone-500 font-bold uppercase tracking-widest text-xs mt-2">{t(stat.labelKey)}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Timeline Section - Editorial Layout */}
      <div className="bg-white/80 backdrop-blur rounded-[2.5rem] shadow-xl border border-white/50 p-10 mb-16 relative overflow-hidden">
        {/* Decorative Brass Line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-[#B58D3D]/30" />
        
        <h2 className={`text-3xl font-serif font-bold mb-12 text-center ${theme.colors.text}`}>{t('timelineTitle')}</h2>
        
        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
            {['2022', '2023', '2024', '2025'].map((year, idx) => (
              <div key={year} className="flex flex-col relative group">
                <div className="flex items-center gap-4 mb-4">
                  <span className={`text-5xl font-serif font-bold opacity-20 group-hover:opacity-40 transition-opacity ${theme.colors.text}`}>{year.substring(0,4)}</span>
                  <div className={`h-px flex-1 bg-current opacity-20 ${theme.colors.text}`} />
                </div>
                <div className={`text-lg font-bold mb-3 ${theme.colors.text}`}>{t(`year${year}`)}</div>
                <p className="text-stone-600 text-sm leading-relaxed font-light">{t(`desc${year}`)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Future Plans - "Magazine Spread" Style */}
      <div className={`rounded-[2.5rem] shadow-2xl p-10 mb-16 text-white bg-gradient-to-br ${theme.colors.gradientFrom} ${theme.colors.gradientTo} relative overflow-hidden`}>
        {/* Texture/Noise overlay could go here */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
        
        <div className="relative z-10">
          <h2 className="text-3xl font-serif font-bold mb-8 flex items-center justify-center gap-3">
             {t('futurePlanTitle')} <Zap className="w-5 h-5 opacity-70" />
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-white/15 transition-colors">
              <div className="text-4xl font-serif font-bold mb-3 text-[#fcfbf9]">114.01.01</div>
              <p className="text-white/80 font-light tracking-wide">{t('jan2025')}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-white/15 transition-colors">
              <div className="text-4xl font-serif font-bold mb-3 text-[#fcfbf9]">114.07.01</div>
              <p className="text-white/80 font-light tracking-wide">{t('jul2025')}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Charts Section - Clean & Minimal */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {/* Bar Chart 1 */}
        <div className="bg-white/80 backdrop-blur-sm rounded-[2rem] shadow-lg p-8 border border-stone-100">
          <div className="flex items-center justify-between mb-8">
             <h3 className={`text-2xl font-serif font-bold ${theme.colors.text}`}>{t('comparisonTitle')}</h3>
             <div className="h-px flex-1 bg-stone-200 ml-6"></div>
          </div>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={COMPARISON_DATA} margin={{top: 20, right: 30, left: 0, bottom: 5}}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                <XAxis dataKey="name" tickFormatter={(val) => t(val)} axisLine={false} tickLine={false} tick={{fill: '#78716c', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#78716c', fontSize: 12}} />
                <Tooltip 
                  cursor={{fill: 'rgba(0,0,0,0.02)'}}
                  formatter={(value: number, name: string) => [value, t(name)]}
                  labelFormatter={(label) => t(label)}
                  contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', fontFamily: 'Lato', padding: '12px'}}
                />
                <Legend formatter={(val) => t(val)} iconType="circle" />
                <Bar dataKey="electronic" name="electronic" fill={theme.colors.chartMain} radius={[6, 6, 0, 0]} barSize={40} />
                <Bar dataKey="paper" name="paper" fill="#d6d3d1" radius={[6, 6, 0, 0]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Bar Chart 2 */}
        <div className="bg-white/80 backdrop-blur-sm rounded-[2rem] shadow-lg p-8 border border-stone-100">
           <div className="flex items-center justify-between mb-8">
             <h3 className={`text-2xl font-serif font-bold ${theme.colors.text}`}>{t('growthTitle')}</h3>
             <div className="h-px flex-1 bg-stone-200 ml-6"></div>
          </div>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={GROWTH_DATA} margin={{top: 20, right: 30, left: 0, bottom: 5}}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{fill: '#78716c', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#78716c', fontSize: 12}} />
                <Tooltip 
                  cursor={{fill: 'rgba(0,0,0,0.02)'}}
                  contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', fontFamily: 'Lato', padding: '12px'}}
                />
                <Bar dataKey="count" fill={theme.colors.chartMain} radius={[6, 6, 6, 6]} barSize={30}>
                    {GROWTH_DATA.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={index === GROWTH_DATA.length -1 ? theme.colors.chartSecond : theme.colors.chartMain} />
                    ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Workflow & Pie Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        
        {/* Pie Chart */}
        <div className="bg-white/80 backdrop-blur-sm rounded-[2rem] shadow-lg p-8 border border-stone-100 flex flex-col justify-center">
          <div className="flex items-center justify-between mb-2">
             <h3 className={`text-2xl font-serif font-bold ${theme.colors.text}`}>{t('distributionTitle')}</h3>
          </div>
          <div className="h-80 w-full flex items-center justify-center relative">
            {/* Center Donut Text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="text-sm font-bold text-stone-400 uppercase tracking-widest">Type</span>
            </div>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={PIE_DATA}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={110}
                  paddingAngle={8}
                  dataKey="value"
                  stroke="none"
                  cornerRadius={8}
                >
                  {PIE_DATA.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={[theme.colors.chartMain, theme.colors.chartSecond, '#a8a29e'][index % 3]} />
                  ))}
                </Pie>
                <Tooltip 
                    formatter={(val: number) => `${val}%`} 
                    contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)'}}
                />
                <Legend 
                    formatter={(val) => <span className="text-stone-600 font-medium ml-2">{t(val)}</span>} 
                    iconType="circle"
                    verticalAlign="bottom"
                    height={36}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Workflow Diagram - Clean Steps */}
        <div className="bg-white/80 backdrop-blur-sm rounded-[2rem] shadow-lg p-10 border border-stone-100 flex flex-col justify-center">
          <h3 className={`text-2xl font-serif font-bold mb-10 ${theme.colors.text}`}>{t('workflowTitle')}</h3>
          
          <div className="relative">
             {/* Connecting Line Vertical */}
             <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-stone-200"></div>

             {/* Step 1 */}
             <div className="flex items-center gap-6 mb-8 relative z-10">
                <div className={`w-16 h-16 rounded-full bg-white border-4 ${theme.colors.border} flex items-center justify-center shadow-sm shrink-0`}>
                    <Monitor className={`w-6 h-6 ${theme.colors.text}`} />
                </div>
                <div className="flex-1 p-4 rounded-2xl bg-stone-50 border border-stone-100">
                    <div className="font-bold text-lg text-stone-800">{t('manufacturers')}</div>
                    <div className="text-sm text-stone-500">{t('apply')}</div>
                </div>
             </div>

             {/* Step 2 */}
             <div className="flex items-center gap-6 mb-8 relative z-10">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${theme.colors.gradientFrom} ${theme.colors.gradientTo} flex items-center justify-center shadow-lg text-white shrink-0`}>
                    <Building className="w-6 h-6" />
                </div>
                <div className="flex-1 p-5 rounded-2xl bg-white shadow-md border border-stone-100">
                    <div className="font-bold text-lg mb-2 text-stone-800">{t('fda')}</div>
                    <div className="flex gap-2 text-xs flex-wrap">
                        <span className="px-2 py-1 bg-stone-100 rounded-md text-stone-600 flex items-center gap-1"><CheckCircle size={12}/>{t('review')}</span>
                        <span className="px-2 py-1 bg-stone-100 rounded-md text-stone-600 flex items-center gap-1"><Shield size={12}/>{t('security')}</span>
                        <span className="px-2 py-1 bg-stone-100 rounded-md text-stone-600 flex items-center gap-1"><Database size={12}/>{t('database')}</span>
                    </div>
                </div>
             </div>

             {/* Step 3 */}
             <div className="flex items-center gap-6 relative z-10">
                <div className="w-16 h-16 rounded-full bg-[#B58D3D] flex items-center justify-center shadow-md text-white shrink-0">
                    <CheckCircle className="w-6 h-6" />
                </div>
                <div className="flex-1 p-4 rounded-2xl bg-[#fffcf5] border border-amber-100">
                    <div className="font-bold text-lg text-[#B58D3D]">{t('approval')}</div>
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center text-stone-400 py-10 border-t border-stone-200">
        <p className="mb-2 font-light text-sm tracking-wide">食品藥物管理署 &gt; 查驗登記專區 | http://www.fda.gov.tw</p>
        <p className="font-light text-sm tracking-wide">諮詢專線：03-5732043 / 03-5743868</p>
      </footer>

    </div>
  );
};

export default Dashboard;