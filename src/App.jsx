import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarqueeTicker from './components/MarqueeTicker';
import AboutUs from './components/AboutUs';
import WhyChooseUs from './components/WhyChooseUs';
import FacilityShowcase from './components/FacilityShowcase';
import GymMachines from './components/GymMachines';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import LocationsAndContact from './components/LocationsAndContact';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';

export default function App() {
  return (
    <div className="app-wrapper" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Navigation Header */}
      <Navbar />

      {/* Main Page Content */}
      <main style={{ flex: 1 }}>
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Seamless Marquee Ticker */}
        <MarqueeTicker />

        {/* 3. About Us & Stat Counters */}
        <AboutUs />

        {/* 4. Why Choose Us / Features */}
        <WhyChooseUs />

        {/* 5. Facility Showcase Banner */}
        <FacilityShowcase />

        {/* 6. Gym Machines & Real Equipment Showcase */}
        <GymMachines />

        {/* 7. Client Reviews / Testimonials */}
        <Testimonials />

        {/* 8. Membership Pricing Plans */}
        <Pricing />

        {/* 9. Locations & Direct Hotlines */}
        <LocationsAndContact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Multi-Branch WhatsApp Widget */}
      <WhatsAppWidget />
    </div>
  );
}
