
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import LoginForm from '@/components/login/LoginForm';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ShieldCheck, Globe, Clock, SmartphoneCharging } from 'lucide-react';

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-10 bg-gray-50">
        <div className="container-custom">
          <div className="mb-8">
            <Button asChild variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
              <Link to="/" className="flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Welcome to SBI Internet Banking</h1>
              <p className="text-gray-600 mb-8">
                Access your accounts, pay bills, transfer funds, and more with our secure online banking platform.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <ShieldCheck className="h-6 w-6 text-sbi-blue" />
                  </div>
                  <div className="ml-3">
                    <h3 className="font-medium text-gray-900">Secure Banking</h3>
                    <p className="text-sm text-gray-600">
                      Our multi-layered security ensures your financial data is always protected.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Globe className="h-6 w-6 text-sbi-blue" />
                  </div>
                  <div className="ml-3">
                    <h3 className="font-medium text-gray-900">Access Anywhere</h3>
                    <p className="text-sm text-gray-600">
                      Bank from anywhere in the world, on any device, 24/7.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Clock className="h-6 w-6 text-sbi-blue" />
                  </div>
                  <div className="ml-3">
                    <h3 className="font-medium text-gray-900">24/7 Banking</h3>
                    <p className="text-sm text-gray-600">
                      Manage your finances anytime, day or night, without waiting.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <SmartphoneCharging className="h-6 w-6 text-sbi-blue" />
                  </div>
                  <div className="ml-3">
                    <h3 className="font-medium text-gray-900">Mobile-Ready</h3>
                    <p className="text-sm text-gray-600">
                      Optimized for all mobile devices, so you can bank on the go.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <LoginForm />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Login;
