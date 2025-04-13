
import React from 'react';
import { Link } from 'react-router-dom';
import { CreditCard, Home, GraduationCap, Car, Landmark, Briefcase, PiggyBank, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface QuickLinkProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  to: string;
  className?: string;
}

const QuickLinkCard = ({ icon, title, description, to, className }: QuickLinkProps) => (
  <Link
    to={to}
    className={cn(
      "quick-link-card group flex flex-col items-center text-center transition-all duration-300",
      "hover:translate-y-[-5px]",
      className
    )}
  >
    <div className="mb-4 p-3 rounded-full bg-blue-50 text-sbi-blue group-hover:bg-sbi-blue group-hover:text-white transition-colors duration-300">
      {icon}
    </div>
    <h3 className="text-lg font-semibold mb-2 text-gray-800">{title}</h3>
    <p className="text-sm text-gray-600 mb-4">{description}</p>
    <div className="mt-auto flex items-center text-sbi-blue font-medium text-sm">
      <span>Learn more</span>
      <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </div>
  </Link>
);

const QuickLinks = () => {
  const quickLinks = [
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: 'Credit Cards',
      description: 'Explore our range of credit cards with exciting rewards and benefits.',
      to: '/cards/credit',
    },
    {
      icon: <Home className="h-6 w-6" />,
      title: 'Home Loans',
      description: 'Make your dream home a reality with our affordable home loan options.',
      to: '/loans/home-loan',
    },
    {
      icon: <PiggyBank className="h-6 w-6" />,
      title: 'Savings',
      description: 'Open a savings account and enjoy high interest rates and benefits.',
      to: '/personal-banking/savings',
    },
    {
      icon: <Car className="h-6 w-6" />,
      title: 'Car Loans',
      description: 'Get on the road with our quick and hassle-free car loan services.',
      to: '/loans/car-loan',
    },
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: 'Education Loans',
      description: 'Fund your education with our flexible education loan schemes.',
      to: '/loans/education-loan',
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: 'Business Banking',
      description: 'Comprehensive banking solutions for businesses of all sizes.',
      to: '/corporate-banking',
    },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Banking Solutions For You</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of banking products and services designed to meet your personal and business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {quickLinks.map((link, index) => (
            <QuickLinkCard
              key={index}
              icon={link.icon}
              title={link.title}
              description={link.description}
              to={link.to}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;
