
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import EMICalculator from '@/components/loans/EMICalculator';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Home, Car, GraduationCap, Briefcase, ArrowRight, Check } from 'lucide-react';

interface LoanTypeProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  interestRate: string;
  tenure: string;
  path: string;
}

const LoanTypeCard = ({ icon, title, description, features, interestRate, tenure, path }: LoanTypeProps) => {
  return (
    <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-lg">
      <CardHeader className="pb-2">
        <div className="flex items-center mb-2">
          <div className="p-2 rounded-md bg-blue-50 text-sbi-blue mr-3">{icon}</div>
          <CardTitle>{title}</CardTitle>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="p-3 bg-gray-50 rounded-md">
            <div className="text-sm text-gray-500">Interest Rate</div>
            <div className="font-semibold text-gray-900">{interestRate}</div>
          </div>
          <div className="p-3 bg-gray-50 rounded-md">
            <div className="text-sm text-gray-500">Loan Tenure</div>
            <div className="font-semibold text-gray-900">{tenure}</div>
          </div>
        </div>
        <div className="space-y-2">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <Check className="h-4 w-4 text-green-500 mr-2 mt-1" />
              <span className="text-sm text-gray-600">{feature}</span>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full bg-sbi-blue hover:bg-sbi-darkBlue">
          <Link to={path} className="flex items-center justify-center">
            Apply Now <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

const Loans = () => {
  const loanTypes: LoanTypeProps[] = [
    {
      icon: <Home className="h-5 w-5" />,
      title: "Home Loan",
      description: "Make your dream home a reality with our affordable home loan options.",
      features: [
        "Loan amount up to ₹10 crore",
        "Quick approval process",
        "Flexible repayment options",
        "No pre-payment charges"
      ],
      interestRate: "8.40% - 9.15%",
      tenure: "Up to 30 years",
      path: "/loans/home-loan"
    },
    {
      icon: <Car className="h-5 w-5" />,
      title: "Car Loan",
      description: "Get on the road with our quick and hassle-free car loan services.",
      features: [
        "Loan amount up to ₹1 crore",
        "Competitive interest rates",
        "Minimal documentation",
        "Quick disbursal"
      ],
      interestRate: "8.70% - 9.80%",
      tenure: "Up to 7 years",
      path: "/loans/car-loan"
    },
    {
      icon: <GraduationCap className="h-5 w-5" />,
      title: "Education Loan",
      description: "Fund your education with our flexible education loan schemes.",
      features: [
        "Cover tuition fees and living expenses",
        "Studies in India and abroad",
        "Repayment after course completion",
        "Tax benefits under Section 80E"
      ],
      interestRate: "8.85% - 10.15%",
      tenure: "Up to 15 years",
      path: "/loans/education-loan"
    },
    {
      icon: <Briefcase className="h-5 w-5" />,
      title: "Personal Loan",
      description: "Quick access to funds for your personal needs without any collateral.",
      features: [
        "Loan amount up to ₹20 lakhs",
        "Minimal documentation",
        "No collateral required",
        "Quick processing and disbursal"
      ],
      interestRate: "10.50% - 12.75%",
      tenure: "Up to 5 years",
      path: "/loans/personal-loan"
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero section */}
        <section className="bg-gradient-to-r from-sbi-blue to-sbi-darkBlue text-white py-16">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold mb-4">
                SBI Loans - Turning Your Dreams Into Reality
              </h1>
              <p className="text-lg opacity-90 mb-8">
                Choose from our wide range of loan products designed to meet your financial needs.
              </p>
              <Button asChild size="lg" className="bg-white text-sbi-blue hover:bg-gray-100">
                <a href="#loan-calculator">Calculate Your EMI</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Loan types section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Explore Our Loan Products
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Whether you're looking to buy a home, a car, fund education, or meet personal expenses, 
                we have a loan solution for you.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {loanTypes.map((loanType, index) => (
                <LoanTypeCard key={index} {...loanType} />
              ))}
            </div>
          </div>
        </section>

        {/* EMI Calculator section */}
        <section id="loan-calculator" className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                EMI Calculator
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Use our EMI calculator to estimate your monthly loan repayments.
              </p>
            </div>
            
            <EMICalculator />
          </div>
        </section>

        {/* Application Process */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Simple Application Process
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Getting a loan from SBI is easy and convenient. Follow these simple steps:
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  step: "Step 1",
                  title: "Choose a Loan",
                  description: "Select the loan product that best suits your requirements."
                },
                {
                  step: "Step 2",
                  title: "Apply Online",
                  description: "Fill out the online application form with your personal and financial details."
                },
                {
                  step: "Step 3",
                  title: "Document Submission",
                  description: "Upload the required documents for verification."
                },
                {
                  step: "Step 4",
                  title: "Loan Approval & Disbursal",
                  description: "Get approval and receive your loan amount directly in your account."
                }
              ].map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 relative border border-gray-100">
                  <div className="absolute top-4 right-4 bg-sbi-blue text-white text-sm font-medium px-3 py-1 rounded-full">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 mt-6 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Loans;
