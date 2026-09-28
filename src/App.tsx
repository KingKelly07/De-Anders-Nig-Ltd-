import { useState, useEffect } from 'react';
import type { TabId } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { HomeTab } from './components/HomeTab';
import { ServicesTab } from './components/ServicesTab';
import { InvestmentsTab } from './components/InvestmentsTab';
import { FleetTab } from './components/FleetTab';
import { ContactTab } from './components/ContactTab';

export function App() {
  const [activeTab, setActiveTab] = useState<TabId>('home');

  // Dynamic SEO Title per Tab
  useEffect(() => {
    const titles: Record<TabId, string> = {
      home: 'DE ANDERS NIG LTD | Transport, Charter, Hire Purchase & 48% ROI Investment',
      services:
        'Daily Travels (Umuahia, Owerri, Onitsha, Aba, Enugu), Charter & Hire Purchase | DE ANDERS NIG LTD',
      investments:
        'Commercial Transport Investment (Up to 48% ROI - Keke & Bus Plans) | DE ANDERS NIG LTD',
      fleet: 'Live Fleet Videos & Vehicle Showcase | DE ANDERS NIG LTD',
      contact:
        'Offices (Obowo, Umuahia, Onuimo) & Direct Contact | DE ANDERS NIG LTD',
    };

    document.title = titles[activeTab];
  }, [activeTab]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      {/* Sticky Header & Navigation */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Area */}
      <main className="flex-grow">
        {activeTab === 'home' && <HomeTab setActiveTab={setActiveTab} />}
        {activeTab === 'services' && <ServicesTab setActiveTab={setActiveTab} />}
        {activeTab === 'investments' && (
          <InvestmentsTab setActiveTab={setActiveTab} />
        )}
        {activeTab === 'fleet' && <FleetTab setActiveTab={setActiveTab} />}
        {activeTab === 'contact' && <ContactTab />}
      </main>

      {/* Corporate Footer */}
      <Footer setActiveTab={setActiveTab} />

      {/* Floating WhatsApp & Call Action */}
      <WhatsAppFloat />
    </div>
  );
}

export default App;