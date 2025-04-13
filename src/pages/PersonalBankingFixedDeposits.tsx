
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const PersonalBankingFixedDeposits = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-sbi-blue to-sbi-darkBlue text-white py-16">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-4">SBI Fixed Deposits</h1>
              <p className="text-xl opacity-90 mb-8">
                Secure investments with guaranteed returns
              </p>
            </div>
          </div>
        </section>
        <section className="py-16">
          <div className="container-custom text-center">
            <h2 className="text-2xl font-semibold mb-4">Fixed Deposit Options Coming Soon</h2>
            <p className="text-gray-600">We're working on bringing you the best fixed deposit schemes.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PersonalBankingFixedDeposits;
