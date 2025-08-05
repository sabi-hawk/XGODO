import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import AnnouncementBanner from './components/AnnouncementBanner';
import StatsSection from './components/StatsSection';
import CategorySection from './components/CategorySection';
import DeviceGrid from './components/DeviceGrid';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="flex">
        <Sidebar />
        
        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            <AnnouncementBanner />
            <StatsSection />
            <CategorySection />
            <DeviceGrid />
          </div>
        </main>
      </div>
      
      <Footer />
    </div>
  );
}

export default App;