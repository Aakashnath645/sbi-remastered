
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import QuickLinks from '@/components/home/QuickLinks';
import TestimonialCarousel from '@/components/home/TestimonialCarousel';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <QuickLinks />
        <TestimonialCarousel />
        
        {/* App promo section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Banking on the Go</h2>
                <p className="text-gray-600 mb-6">
                  Download the SBI YONO app and experience banking, shopping, travel booking, and more, all in one place.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <a href="#" className="block transition-transform hover:scale-105">
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                      alt="Download on the App Store" 
                      className="h-10 w-auto"
                    />
                  </a>
                  <a href="#" className="block transition-transform hover:scale-105">
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                      alt="Get it on Google Play" 
                      className="h-10 w-auto"
                    />
                  </a>
                </div>
              </div>
              
              <div className="order-1 md:order-2 flex justify-center">
                <div className="w-64 h-96 bg-sbi-blue rounded-3xl shadow-xl flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-2xl font-bold mb-2">YONO</div>
                    <div className="text-sm">Mobile App</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
