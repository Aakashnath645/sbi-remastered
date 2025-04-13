
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Percent, Shield, Clock } from 'lucide-react';

const PersonalBankingSavings = () => {
  const savingsFeatures = [
    {
      icon: <Percent className="h-10 w-10 text-sbi-blue" />,
      title: 'Competitive Interest Rates',
      description: 'Enjoy attractive interest rates that help your money grow faster over time.'
    },
    {
      icon: <Shield className="h-10 w-10 text-sbi-blue" />,
      title: 'Secure Banking',
      description: 'Your savings are protected with multi-layer security and insurance coverage.'
    },
    {
      icon: <Clock className="h-10 w-10 text-sbi-blue" />,
      title: '24/7 Account Access',
      description: 'Access your account anytime, anywhere through our online and mobile banking services.'
    }
  ];

  const savingsAccounts = [
    {
      title: 'Regular Savings Account',
      description: 'Basic savings account with standard features and minimal balance requirements.',
      interestRate: '3.5%',
      minBalance: '₹500',
      features: ['Free debit card', 'Online banking', 'Mobile banking', 'SMS alerts']
    },
    {
      title: 'Premium Savings Account',
      description: 'Enhanced savings account with premium benefits and personalized services.',
      interestRate: '4.0%',
      minBalance: '₹10,000',
      features: ['Premium debit card', 'Free DD/Cheque book', 'Priority banking', 'Higher transaction limits']
    },
    {
      title: 'Senior Citizen Savings Account',
      description: 'Special account for senior citizens with additional benefits and higher interest rates.',
      interestRate: '4.5%',
      minBalance: '₹500',
      features: ['Higher interest rates', 'Doorstep banking', 'Special queue at branches', 'Free account statements']
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-sbi-blue to-sbi-darkBlue text-white py-16">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-4">SBI Savings Accounts</h1>
              <p className="text-xl opacity-90 mb-8">
                Start your savings journey with India's most trusted bank
              </p>
              <Button asChild size="lg" className="bg-white text-sbi-blue hover:bg-gray-100">
                <Link to="#compare-accounts">Compare Accounts</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose SBI Savings Account</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {savingsFeatures.map((feature, index) => (
                <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-4">
                      {feature.icon}
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-center">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Account Types Section */}
        <section id="compare-accounts" className="py-16">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center mb-12">Our Savings Account Options</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {savingsAccounts.map((account, index) => (
                <Card key={index} className="border border-gray-200 hover:border-sbi-blue transition-colors duration-300">
                  <CardHeader>
                    <CardTitle>{account.title}</CardTitle>
                    <CardDescription>{account.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-600">Interest Rate</span>
                        <span className="font-semibold">{account.interestRate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Minimum Balance</span>
                        <span className="font-semibold">{account.minBalance}</span>
                      </div>
                    </div>
                    <div className="mt-6">
                      <h4 className="text-sm font-semibold mb-3">Features</h4>
                      <ul className="space-y-2">
                        {account.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full bg-sbi-blue hover:bg-sbi-darkBlue">
                      <Link to="/apply/savings" className="flex items-center justify-center">
                        Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Start Saving?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Open a savings account with SBI today and enjoy the benefits of banking with India's largest bank.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild size="lg" className="bg-sbi-blue hover:bg-sbi-darkBlue">
                  <Link to="/apply/savings">Open an Account</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">Talk to an Advisor</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default PersonalBankingSavings;
